import { useState } from "react";
import { useDispatch } from "react-redux";

import { clearEnquiry } from "../../redux/slices/enquirySlice";

function ContactForm({ className = "", property = null }) {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
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

		// Remove the error as soon as the user fixes the field.
		setErrors((current) => ({ ...current, [name]: "" }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Please enter your name.";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Please enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email.";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Please enter a message.";
		}

		if (!formData.terms) {
			newErrors.terms = "Please accept the terms and conditions.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// For now we simply confirm the submission.
		// We will connect this to a backend later.
		setSubmitted(true);

		console.log("Enquiry submitted:", {
			...formData,
			property: property ? { id: property.id, title: property.title } : null,
		});
	};

	if (submitted) {
		return (
			<div
				className={`flex min-h-68.75 w-full flex-col items-center justify-center rounded-br-[40px] bg-white px-7 py-8 text-center sm:px-10 sm:py-9 ${className}`}>
				<h2 className="font-serif text-3xl text-gray-900">Thank you!</h2>

				<p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
					Your message has been received. Our team will get back to you as soon
					as possible.
				</p>

				{property && (
					<p className="mt-2 text-xs text-gray-400">
						Enquiry for {property.title}
					</p>
				)}

				<button
					type="button"
					onClick={() => {
						setSubmitted(false);
						setFormData({ name: "", email: "", message: "", terms: false });

						// A "new" message should start general, not still tied to
						// whichever property this enquiry happened to be about —
						// otherwise it looks like a fresh enquiry but silently
						// carries over stale property context from Redux.
						dispatch(clearEnquiry());
					}}
					className="mt-6 rounded-md bg-[#606b75] px-7 py-2.5 text-xs font-medium text-white transition hover:bg-[#4f5962]">
					Send another message
				</button>
			</div>
		);
	}

	return (
		<div
			className={`min-h-68.75 w-full rounded-br-[40px] bg-white px-7 py-8 sm:px-10 sm:py-9 md:px-8 lg:px-11 ${className}`}>
			<h2 className="font-serif text-3xl leading-tight text-gray-900">
				{property ? "Make an enquiry" : "We’d love to hear from you"}
			</h2>

			{property && (
				<p className="mt-2 text-xs text-gray-500">
					Enquiring about:{" "}
					<span className="font-medium text-gray-800">{property.title}</span>
				</p>
			)}

			<form className="mt-6" onSubmit={handleSubmit} noValidate>
				{/* NAME + EMAIL */}

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
					<div>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your Name"
							className={`w-full border-b ${
								errors.name ? "border-red-400" : "border-gray-400"
							} pb-2 text-xs outline-none placeholder:text-gray-500`}
						/>

						{errors.name && (
							<p className="mt-1 text-[10px] text-red-500">{errors.name}</p>
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
								errors.email ? "border-red-400" : "border-gray-400"
							} pb-2 text-xs outline-none placeholder:text-gray-500`}
						/>

						{errors.email && (
							<p className="mt-1 text-[10px] text-red-500">{errors.email}</p>
						)}
					</div>
				</div>

				{/* MESSAGE */}

				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows="2"
					placeholder="Message"
					className={`mt-5 w-full resize-none border-b ${
						errors.message ? "border-red-400" : "border-gray-400"
					} pb-2 text-xs outline-none placeholder:text-gray-500`}
				/>

				{errors.message && (
					<p className="mt-1 text-[10px] text-red-500">{errors.message}</p>
				)}

				{/* TERMS */}

				<label className="mt-3 flex items-start gap-2 text-[10px] text-gray-600">
					<input
						type="checkbox"
						name="terms"
						checked={formData.terms}
						onChange={handleChange}
						className="mt-0.5 h-3 w-3 shrink-0"
					/>

					<span>I accept the Terms and conditions</span>
				</label>

				{errors.terms && (
					<p className="mt-1 text-[10px] text-red-500">{errors.terms}</p>
				)}

				{/* SEND */}

				<button
					type="submit"
					className="mt-4 rounded-md bg-[#606b75] px-7 py-2.5 text-[10px] font-medium text-white transition hover:bg-[#4f5962]">
					SEND
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
