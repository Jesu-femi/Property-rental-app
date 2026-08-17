import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {
	// Get the property ID from the URL.
	// Example: /property/5 gives us id = "5"
	const { id } = useParams();

	// Find the property whose ID matches the URL.
	// Number(id) converts the URL string into a number.
	const property = properties.find((item) => item.id === Number(id));

	// If the property doesn't exist, show a simple message.
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
			{/* === PROPERTY IMAGE === */}

			<section className="px-5 pt-8 sm:px-8 lg:px-16 lg:pt-12">
				<div className="mx-auto max-w-7xl">
					{/* Main property image */}
					<div className="h-75 overflow-hidden rounded-2xl sm:h-100 lg:h-130">
						<img
							src={property.image}
							alt={property.title}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* === PROPERTY INFORMATION === */}

			<section className="px-5 py-10 sm:px-8 lg:px-16 lg:py-14">
				<div className="mx-auto max-w-7xl">
					{/* Title + Favourite */}
					<div className="flex items-start justify-between gap-6">
						<div>
							<p className="text-sm text-gray-500">
								{property.country}, {property.location}
							</p>

							<h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
								{property.title}
							</h1>
						</div>

						{/* Favourite button */}

						<button
							type="button"
							aria-label="Add property to favourites"
							className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xl transition hover:bg-gray-900 hover:text-white">
							♡
						</button>
					</div>

					{/* === PRICE === */}

					<div className="mt-6">
						<span className="text-2xl font-semibold text-gray-900">
							{property.price}
						</span>

						<span className="ml-2 text-sm text-gray-500">/ night</span>
					</div>

					{/* === PROPERTY FEATURES === */}

					<div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-200 py-6 sm:grid-cols-4">
						{/* Guests */}

						<div>
							<p className="text-xs text-gray-500">Guests</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.guests} Guests
							</p>
						</div>

						{/* Bedrooms */}

						<div>
							<p className="text-xs text-gray-500">Bedrooms</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.bedrooms} Bedrooms
							</p>
						</div>

						{/* Bathrooms */}

						<div>
							<p className="text-xs text-gray-500">Bathrooms</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.bathrooms} Bathrooms
							</p>
						</div>

						{/* Size */}

						<div>
							<p className="text-xs text-gray-500">Size</p>

							<p className="mt-1 text-sm font-medium text-gray-900">
								{property.size} m²
							</p>
						</div>
					</div>

					{/* === DESCRIPTION + ENQUIRY === */}

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
						{/* Description */}

						<div>
							<h2 className="text-2xl font-semibold text-gray-900">
								About this property
							</h2>

							<p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
								{property.description ||
									"No description is available for this property yet."}
							</p>
						</div>

						{/* Enquiry */}

						<div className="lg:text-right">
							<button
								type="button"
								className="w-full rounded-md bg-gray-900 px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-700 lg:w-auto">
								Make an enquiry
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PropertyDetails;
