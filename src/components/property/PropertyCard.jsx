import { useState } from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
	const [isFavourite, setIsFavourite] = useState(false);

	const handleFavourite = (event) => {
		event.preventDefault();
		event.stopPropagation();

		setIsFavourite((current) => !current);
	};

	return (
		<Link to={`/property/${property.id}`} className="group block">
			<article className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
				{/* === PROPERTY IMAGE === */}

				<div className="relative h-60 w-full overflow-hidden sm:h-64 lg:h-68">
					<img
						src={property.image}
						alt={property.title}
						className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
					/>

					{/* IMAGE OVERLAY */}

					<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

					{/* === PRICE === */}

					<div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2 shadow-md">
						<p className="text-sm font-semibold text-gray-800">
							{property.price}

							<span className="ml-1 text-xs font-normal text-gray-500">
								/night
							</span>
						</p>
					</div>

					{/* === FAVOURITE === */}

					<button
						type="button"
						aria-label={
							isFavourite
								? `Remove ${property.title} from favourites`
								: `Add ${property.title} to favourites`
						}
						onClick={handleFavourite}
						className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition duration-200 hover:scale-110 ${
							isFavourite
								? "text-red-500"
								: "text-gray-700 hover:text-gray-900"
						}`}>
						<span className="text-xl leading-none">
							{isFavourite ? "♥" : "♡"}
						</span>
					</button>
				</div>

				{/* === PROPERTY INFORMATION === */}

				<div className="p-5 sm:p-6">
					{/* COUNTRY */}

					<p className="text-xs uppercase tracking-wide text-gray-500">
						{property.country}
					</p>

					{/* LOCATION */}

					<p className="mt-1 text-sm text-gray-400">
						{property.location}
					</p>

					{/* TITLE */}

					<h3 className="mt-2 font-serif text-xl leading-tight text-gray-900 transition group-hover:text-gray-700">
						{property.title}
					</h3>

					{/* === PROPERTY FEATURES === */}

					<div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500 sm:gap-x-5 sm:text-sm">
						<span>{property.guests} Guests</span>

						<span>{property.bedrooms} Bedrooms</span>

						<span>{property.bathrooms} Bathrooms</span>

						<span>{property.size} m²</span>
					</div>
				</div>
			</article>
		</Link>
	);
}

export default PropertyCard;