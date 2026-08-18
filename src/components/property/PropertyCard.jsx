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
		<Link to={`/property/${property.id}`} className="block">
			<article className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
				{/* === PROPERTY IMAGE === */}

				<div className="relative h-64 w-full overflow-hidden">
					<img
						src={property.image}
						alt={property.title}
						className="h-full w-full object-cover"
					/>

					{/* PRICE */}

					<div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2 shadow-md">
						<p className="text-sm font-semibold text-gray-800">
							{property.price}
							<span className="ml-1 text-xs font-normal text-gray-500">
								/night
							</span>
						</p>
					</div>

					{/* FAVOURITE */}

					<button
						type="button"
						aria-label={
							isFavourite
								? `Remove ${property.title} from favourites`
								: `Add ${property.title} to favourites`
						}
						onClick={handleFavourite}
						className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110 ${
							isFavourite ? "text-red-500" : "text-gray-700"
						}`}>
						{isFavourite ? "♥" : "♡"}
					</button>
				</div>

				{/* === PROPERTY INFORMATION === */}

				<div className="p-5">
					<p className="text-sm text-gray-500">{property.country}</p>

					<p className="mt-1 text-sm text-gray-400">{property.location}</p>

					<h3 className="mt-2 text-xl font-semibold text-gray-900">
						{property.title}
					</h3>

					{/* === PROPERTY FEATURES === */}

					<div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
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
