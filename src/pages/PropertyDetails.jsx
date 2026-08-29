import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import properties from "../data/properties";

import PropertyGallery from "../components/property/PropertyGallery";
import PropertyAmenities from "../components/property/Amenities";
import BookingCard from "../components/property/BookingCard";
import PropertyLocation from "../components/property/PropertyLocation";
import HouseRules from "../components/property/HouseRules";
import RelatedProperties from "../components/property/RelatedProperties";
import ContactSection from "../components/Home/ContactSection";

import {
	addFavourite,
	isFavourite,
	removeFavourite,
} from "../utils/favourites";

function PropertyDetails() {
	const { id } = useParams();

	const property = properties.find((item) => item.id === Number(id));

	const [favourite, setFavourite] = useState(false);

	useEffect(() => {
		if (property) {
			setFavourite(isFavourite(property.id));
		}
	}, [property]);

	// PROPERTY NOT FOUND

	if (!property) {
		return (
			<main className="flex min-h-[60vh] items-center justify-center bg-white px-5">
				<div className="text-center">
					<h1 className="text-3xl font-semibold text-gray-900">
						Property not found
					</h1>

					<p className="mt-3 text-gray-500">
						The property you are looking for does not exist.
					</p>
				</div>
			</main>
		);
	}

	return (
		<main className="bg-white">
			{/* === PROPERTY GALLERY === */}

			<PropertyGallery property={property} />

			{/* === PROPERTY HEADER === */}

			<section className="px-5 py-10 sm:px-8 lg:px-16 lg:py-14">
				<div className="mx-auto max-w-7xl">
					{/* TITLE + FAVOURITE */}

					<div className="flex items-start justify-between gap-6">
						<div>
							<p className="text-sm text-gray-500">
								{property.country}, {property.location}
							</p>

							<h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
								{property.title}
							</h1>
						</div>

						<button
							type="button"
							aria-label={
								favourite
									? `Remove ${property.title} from favourites`
									: `Add ${property.title} to favourites`
							}
							onClick={() => {
								if (favourite) {
									removeFavourite(property.id);
									setFavourite(false);
								} else {
									addFavourite(property.id);
									setFavourite(true);
								}
							}}
							className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xl transition hover:bg-gray-900 hover:text-white ${
								favourite ? "text-red-500" : "text-gray-700"
							}`}>
							{favourite ? "♥" : "♡"}
						</button>
					</div>

					{/* PRICE */}

					<div className="mt-6">
						<span className="text-2xl font-semibold text-gray-900">
							€{property.price}
						</span>

						<span className="ml-2 text-sm text-gray-500">/ night</span>
					</div>

					{/* === PROPERTY FEATURES === */}

					<div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-200 py-6 sm:grid-cols-4">
						<div>
							<p className="text-xs text-gray-500">Guests</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.guests} Guests
							</p>
						</div>

						<div>
							<p className="text-xs text-gray-500">Bedrooms</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.bedrooms} Bedrooms
							</p>
						</div>

						<div>
							<p className="text-xs text-gray-500">Bathrooms</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.bathrooms} Bathrooms
							</p>
						</div>

						<div>
							<p className="text-xs text-gray-500">Size</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.size} m²
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* === DESCRIPTION + BOOKING === */}

			<section className="px-5 pb-10 sm:px-8 lg:px-16 lg:pb-14">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_360px]">
					{/* LEFT CONTENT */}

					<div>
						{/* DESCRIPTION */}

						<div>
							<h2 className="text-2xl font-semibold text-gray-900">
								About this property
							</h2>

							<p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
								{property.description ||
									"No description is available for this property yet."}
							</p>
						</div>

						{/* AMENITIES */}

						<div className="mt-10">
							{/* <PropertyAmenities /> */}
							<PropertyAmenities property={property} />
						</div>

						{/* LOCATION */}

						<PropertyLocation property={property} />

						{/* HOUSE RULES */}

						<HouseRules property={property} />
					</div>

					{/* RIGHT BOOKING CARD */}

					<div>
						<div className="lg:sticky lg:top-8">
							<BookingCard property={property} />
						</div>
					</div>
				</div>
			</section>

			{/* === RELATED PROPERTIES === */}

			<RelatedProperties property={property} />

			{/* === CONTACT === */}

			<ContactSection />
		</main>
	);
}

export default PropertyDetails;
