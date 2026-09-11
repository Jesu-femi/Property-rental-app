import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
	selectFavouriteIds,
	toggleFavourite,
} from "../../redux/slices/favouritesSlice";

function PropertyCard({ property }) {
	// Redux replaces useState + useEffect here entirely.
	// Before: local state had to be loaded from localStorage on mount,
	// per-card, via useEffect. Now the store already holds the current
	// favourite IDs (loaded once, at app start, inside the slice's
	// initialState) — so there's nothing to "load" per card anymore.
	const dispatch = useDispatch();

	// useSelector subscribes this component to state.favourites.ids.
	// Redux re-renders this component automatically whenever that
	// array changes — for ANY property, not just this one — so we
	// derive "is THIS property favourited" ourselves below.
	const favouriteIds = useSelector(selectFavouriteIds);
	const favourite = favouriteIds.includes(property.id);

	const handleFavourite = (event) => {
		event.preventDefault();
		event.stopPropagation();

		// One action handles both add and remove — the slice's
		// toggleFavourite reducer checks whether the ID is already
		// in the array and flips it accordingly. No more if/else here,
		// and no more manual setFavourite(true/false) — the component
		// just asks Redux to toggle, then re-renders based on the
		// updated store state.
		dispatch(toggleFavourite(property.id));
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
							₦{property.price}
							<span className="ml-1 text-xs font-normal text-gray-500">
								/night
							</span>
						</p>
					</div>

					{/* FAVOURITE */}

					<button
						type="button"
						aria-label={
							favourite
								? `Remove ${property.title} from favourites`
								: `Add ${property.title} to favourites`
						}
						onClick={handleFavourite}
						className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110 ${
							favourite ? "text-red-500" : "text-gray-700"
						}`}>
						{favourite ? "♥" : "♡"}
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
