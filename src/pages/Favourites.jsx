import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import aboutBg from "../assets/images/About bg.jpg";
import properties from "../data/properties";
import PropertyGrid from "../components/property/PropertyGrid";

import {
	clearFavourites,
	selectFavouriteIds,
} from "../redux/slices/favouritesSlice";

function Favourites() {
	// Same pattern as PropertyCard/PropertyDetails: read straight from
	// the store instead of loading a local copy via useEffect. This is
	// also what makes this page automatically consistent with the
	// heart button anywhere else in the app — toggle a favourite on
	// Browse, this page reflects it without any extra wiring.
	const dispatch = useDispatch();
	const favouriteIds = useSelector(selectFavouriteIds);

	const favouriteProperties = properties.filter((property) =>
		favouriteIds.includes(property.id),
	);

	const handleClearAll = () => {
		dispatch(clearFavourites());
	};

	return (
		<main className="relative min-h-screen overflow-hidden">
			{/* === FULL PAGE BACKGROUND === */}

			<div className="fixed inset-0 -z-10">
				<img
					src={aboutBg}
					alt=""
					className="h-full w-full scale-105 object-cover blur-md"
				/>

				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* === HERO === */}

			<section className="px-5 pb-16 pt-28 text-center text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-16">
				<div className="mx-auto max-w-5xl">
					<p className="text-xs uppercase tracking-[0.2em] text-white/80">
						Home / Favourites
					</p>

					<h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
						Favourites
					</h1>

					<div className="mx-auto mt-5 h-px w-14 bg-white/70" />

					<p className="mt-5 text-sm text-white/90 sm:text-base">
						All the villas you love, in one place.
					</p>

					<p className="mt-1 text-sm text-white/75 sm:text-base">
						Save, compare and find your perfect stay.
					</p>
				</div>
			</section>

			{/* === SAVED VILLAS === */}

			<section className="px-5 pb-20 sm:px-8 md:px-10 lg:px-16 lg:pb-28">
				<div className="mx-auto max-w-7xl rounded-2xl bg-[#e8e5df]/95 p-5 shadow-2xl backdrop-blur-sm sm:p-8 lg:p-10">
					{/* SECTION HEADER */}

					<div className="mb-8 flex items-end justify-between gap-5">
						<div>
							<h2 className="font-serif text-3xl text-[#171d24] sm:text-4xl">
								Saved villas
							</h2>

							<p className="mt-2 text-sm text-gray-500">
								{favouriteProperties.length}{" "}
								{favouriteProperties.length === 1 ? "property" : "properties"}{" "}
								saved
							</p>
						</div>

						{favouriteProperties.length > 0 && (
							<button
								type="button"
								onClick={handleClearAll}
								className="rounded-md border border-gray-400 px-4 py-2 text-xs text-gray-600 transition hover:bg-[#606b75] hover:text-white">
								Clear all
							</button>
						)}
					</div>

					{/* PROPERTY GRID / EMPTY STATE */}

					{favouriteProperties.length > 0 ? (
						<PropertyGrid properties={favouriteProperties} />
					) : (
						<div className="py-16 text-center">
							<h3 className="font-serif text-3xl text-[#171d24]">
								No favourites yet
							</h3>

							<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
								You haven't saved any properties yet. Browse our collection and
								tap the heart on a property you love.
							</p>

							<Link
								to="/browse"
								className="mt-6 inline-block rounded-md bg-[#606b75] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#4f5962]">
								Browse properties
							</Link>
						</div>
					)}
				</div>
			</section>

			{/* === BOTTOM AREA === */}

			<section className="bg-[#dfe4e8]/95 px-5 py-16 sm:px-8 lg:px-16">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-10 md:grid-cols-2">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#606b75]">
								Luxury Rentals
							</p>

							<h2 className="mt-3 font-serif text-3xl text-[#171d24]">
								Your favourite villas,
								<br />
								all in one place.
							</h2>
						</div>

						<div className="md:text-right">
							<p className="text-sm leading-7 text-gray-600">
								Keep exploring our collection of beautiful villas and find the
								perfect destination for your next stay.
							</p>

							<Link
								to="/browse"
								className="mt-5 inline-block rounded-md bg-[#606b75] px-6 py-3 text-xs text-white transition hover:bg-[#4f5962]">
								Browse properties
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Favourites;
