import { useState } from "react";
import { Link } from "react-router-dom";

import aboutBg from "../assets/images/About bg.jpg";

function HostApply() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		propertyTitle: "",
		propertyType: "",
		location: "",
		country: "",
		guests: "",
		bedrooms: "",
		bathrooms: "",
		size: "",
		price: "",
		message: "",
		terms: false,
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;

		setFormData((current) => ({
			...current,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Clear that field's error the moment the user touches it again —
		// same UX as ContactForm, kept consistent on purpose.
		setErrors((current) => ({ ...current, [name]: "" }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newErrors = {};

		// === CONTACT INFO ===
		if (!formData.name.trim()) {
			newErrors.name = "Please enter your full name.";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Please enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email.";
		}

		// === PROPERTY DETAILS ===
		// These mirror the exact fields every listed property already
		// has, so an approved application later maps directly onto a
		// real property record — nothing to rename or restructure.

		if (!formData.propertyTitle.trim()) {
			newErrors.propertyTitle = "Please enter a name for your property.";
		}

		if (!formData.propertyType) {
			newErrors.propertyType = "Please select a property type.";
		}

		if (!formData.location.trim()) {
			newErrors.location = "Please enter the property's location.";
		}

		if (!formData.country.trim()) {
			newErrors.country = "Please enter the property's country.";
		}

		if (!formData.guests || Number(formData.guests) <= 0) {
			newErrors.guests = "Please enter how many guests it accommodates.";
		}

		if (!formData.bedrooms || Number(formData.bedrooms) <= 0) {
			newErrors.bedrooms = "Please enter the number of bedrooms.";
		}

		if (!formData.bathrooms || Number(formData.bathrooms) <= 0) {
			newErrors.bathrooms = "Please enter the number of bathrooms.";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Tell us a little about your property.";
		}

		if (!formData.terms) {
			newErrors.terms = "Please accept the terms and conditions.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// Same "confirm locally, backend later" approach as ContactForm —
		// intentionally kept consistent rather than building a second,
		// different submission pattern.
		setSubmitted(true);

		console.log("Host application submitted:", formData);
	};

	// This background block is identical in structure to what
	// Favourites.jsx uses: a fixed, blurred full-page image behind a
	// dark overlay, with actual content floating on top in a
	// translucent card. Rendering it once, up here, means both the
	// form state and the submitted/thank-you state below can reuse
	// the exact same wrapper without duplicating the image/overlay
	// markup twice.
	const pageBackground = (
		<div className="fixed inset-0 -z-10">
			<img
				src={aboutBg}
				alt=""
				className="h-full w-full scale-105 object-cover blur-md"
			/>
			<div className="absolute inset-0 bg-black/30" />
		</div>
	);

	if (submitted) {
		return (
			<main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-28">
				{pageBackground}

				{/* Translucent card, same treatment as the "no favourites yet"
				    empty state on the Favourites page — bg-white/95 rather
				    than the beige #e8e5df/95 used there, since a lighter card
				    reads a little more like a confirmation receipt than a
				    content panel. */}
				<div className="mx-auto max-w-lg rounded-2xl bg-white/95 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12">
					<h1 className="font-serif text-4xl text-[#171d24] sm:text-5xl">
						Thank you for applying!
					</h1>

					<p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
						We've received your host application. Our team will review your
						property details and get back to you within a few business days.
					</p>

					<Link
						to="/"
						className="mt-8 inline-block rounded-lg bg-[#606b75] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4f5962]">
						Back to home
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="relative min-h-screen overflow-hidden">
			{pageBackground}

			{/* HEADER */}
			{/* Text colors flipped to white/translucent-white, since this
			    now sits directly over the dark blurred image instead of a
			    flat #f8f7f4 background — same adaptation Favourites makes
			    for its hero text. */}
			<section className="px-5 pb-10 pt-28 text-center sm:px-8 sm:pt-32 lg:px-16">
				<div className="mx-auto max-w-2xl">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
						Host application
					</p>

					<h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
						Tell us about your property
					</h1>

					<p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
						Fill in a few details about the property you'd like to list. Our
						team will review your application and reach out with next steps.
					</p>
				</div>
			</section>

			{/* FORM */}
			<section className="px-5 pb-20 sm:px-8 lg:px-16">
				{/* bg-white/95 (not fully opaque) lets a hint of the blurred
				    background show through at the card's edges, same idea as
				    Favourites' content panel — keeps the card feeling part of
				    the page rather than pasted on top of it, while staying
				    solid enough for the form fields to read clearly. */}
				<div className="mx-auto max-w-3xl rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
					<form onSubmit={handleSubmit} noValidate>
						{/* === CONTACT INFO === */}
						<h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
							Your details
						</h2>

						<div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Full name"
									className={`w-full border-b ${
										errors.name ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.name && (
									<p className="mt-1 text-xs text-red-500">{errors.name}</p>
								)}
							</div>

							<div>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									className={`w-full border-b ${
										errors.email ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.email && (
									<p className="mt-1 text-xs text-red-500">{errors.email}</p>
								)}
							</div>

							<div className="sm:col-span-2">
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="Phone number (optional)"
									className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
								/>
							</div>
						</div>

						{/* === PROPERTY DETAILS === */}
						<h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-gray-500">
							Property details
						</h2>

						<div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<input
									type="text"
									name="propertyTitle"
									value={formData.propertyTitle}
									onChange={handleChange}
									placeholder="Property name (e.g. Villa Sunset)"
									className={`w-full border-b ${
										errors.propertyTitle ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.propertyTitle && (
									<p className="mt-1 text-xs text-red-500">
										{errors.propertyTitle}
									</p>
								)}
							</div>

							<div>
								<select
									name="propertyType"
									value={formData.propertyType}
									onChange={handleChange}
									className={`w-full border-b ${
										errors.propertyType ? "border-red-400" : "border-gray-300"
									} bg-transparent pb-2 text-sm outline-none`}>
									<option value="">Property type</option>
									<option value="Villa">Villa</option>
									<option value="Apartment">Apartment</option>
									<option value="House">House</option>
								</select>
								{errors.propertyType && (
									<p className="mt-1 text-xs text-red-500">
										{errors.propertyType}
									</p>
								)}
							</div>

							<div>
								<input
									type="text"
									name="location"
									value={formData.location}
									onChange={handleChange}
									placeholder="Location (e.g. Amalfi Coast)"
									className={`w-full border-b ${
										errors.location ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.location && (
									<p className="mt-1 text-xs text-red-500">{errors.location}</p>
								)}
							</div>

							<div>
								<input
									type="text"
									name="country"
									value={formData.country}
									onChange={handleChange}
									placeholder="Country"
									className={`w-full border-b ${
										errors.country ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.country && (
									<p className="mt-1 text-xs text-red-500">{errors.country}</p>
								)}
							</div>

							<div>
								<input
									type="number"
									min="1"
									name="guests"
									value={formData.guests}
									onChange={handleChange}
									placeholder="Max guests"
									className={`w-full border-b ${
										errors.guests ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.guests && (
									<p className="mt-1 text-xs text-red-500">{errors.guests}</p>
								)}
							</div>

							<div>
								<input
									type="number"
									min="1"
									name="bedrooms"
									value={formData.bedrooms}
									onChange={handleChange}
									placeholder="Bedrooms"
									className={`w-full border-b ${
										errors.bedrooms ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.bedrooms && (
									<p className="mt-1 text-xs text-red-500">{errors.bedrooms}</p>
								)}
							</div>

							<div>
								<input
									type="number"
									min="1"
									name="bathrooms"
									value={formData.bathrooms}
									onChange={handleChange}
									placeholder="Bathrooms"
									className={`w-full border-b ${
										errors.bathrooms ? "border-red-400" : "border-gray-300"
									} pb-2 text-sm outline-none placeholder:text-gray-400`}
								/>
								{errors.bathrooms && (
									<p className="mt-1 text-xs text-red-500">
										{errors.bathrooms}
									</p>
								)}
							</div>

							<div>
								<input
									type="number"
									min="0"
									name="size"
									value={formData.size}
									onChange={handleChange}
									placeholder="Size in m² (optional)"
									className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
								/>
							</div>

							<div>
								<input
									type="number"
									min="0"
									name="price"
									value={formData.price}
									onChange={handleChange}
									placeholder="Desired price per night, ₦ (optional)"
									className="w-full border-b border-gray-300 pb-2 text-sm outline-none placeholder:text-gray-400"
								/>
							</div>
						</div>

						{/* === MESSAGE === */}
						<div className="mt-6">
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows="4"
								placeholder="Tell us more about your property"
								className={`w-full resize-none border-b ${
									errors.message ? "border-red-400" : "border-gray-300"
								} pb-2 text-sm outline-none placeholder:text-gray-400`}
							/>
							{errors.message && (
								<p className="mt-1 text-xs text-red-500">{errors.message}</p>
							)}
						</div>

						{/* === TERMS === */}
						<label className="mt-5 flex items-start gap-2 text-xs text-gray-600">
							<input
								type="checkbox"
								name="terms"
								checked={formData.terms}
								onChange={handleChange}
								className="mt-0.5 h-3.5 w-3.5 shrink-0"
							/>
							<span>
								I confirm the details above are accurate and I agree to the
								Terms and conditions for hosting.
							</span>
						</label>
						{errors.terms && (
							<p className="mt-1 text-xs text-red-500">{errors.terms}</p>
						)}

						{/* SUBMIT */}
						<button
							type="submit"
							className="mt-8 w-full rounded-lg bg-[#606b75] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4f5962] sm:w-auto">
							Submit application
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}

export default HostApply;
