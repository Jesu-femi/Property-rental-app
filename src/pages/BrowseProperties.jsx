import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BrowseHero from "../components/browse/BrowseHero";
import PropertyGrid from "../components/property/PropertyGrid";
import LoadMore from "../components/property/LoadMore";
import BrowseContactSection from "../components/browse/BrowseContactSection";

import properties from "../data/properties";

import {
	selectFilters,
	setSearchTerm,
	setLocation,
	setGuests,
	setPrice,
	setBedrooms,
	setSortBy,
	loadMoreVisible,
	hydrateFromParams,
	clearFilters,
} from "../redux/slices/filtersSlice";

function BrowseProperties() {
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();

	// All six pieces of filter/sort/pagination state now come from
	// Redux instead of six separate useState calls. useSelector
	// re-renders this component whenever any of them change.
	const {
		searchTerm,
		location,
		guests,
		price,
		bedrooms,
		sortBy,
		visibleCount,
	} = useSelector(selectFilters);

	// Seed from the URL once, on mount — see the big comment on
	// hydrateFromParams in the slice for why this is necessary now
	// that state lives in Redux instead of local useState.
	useEffect(() => {
		dispatch(
			hydrateFromParams({
				searchTerm: searchParams.get("search") || "",
				location: searchParams.get("location") || "",
				guests: searchParams.get("guests") || "",
				price: searchParams.get("price") || "",
			}),
		);
		// Intentionally empty deps: this should only run once, when the
		// page is first entered — same as a useState initializer only
		// running on first mount, not on every render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// === FILTER PROPERTIES ===
	// Unchanged: still a plain useMemo. "properties" is static imported
	// data, not something that needs to live in Redux — only the
	// filter INPUTS needed to move to the store, not this derived
	// computation.
	const filteredProperties = useMemo(() => {
		const search = searchTerm.trim().toLowerCase();

		const filtered = properties.filter((property) => {
			const matchesSearch =
				!search ||
				property.title.toLowerCase().includes(search) ||
				property.location.toLowerCase().includes(search) ||
				property.country.toLowerCase().includes(search);

			const matchesLocation = !location || property.country === location;

			const matchesGuests = !guests || property.guests >= Number(guests);

			const propertyPrice = Number(
				String(property.price).replace(/[^\d.]/g, ""),
			);
			const matchesPrice = !price || propertyPrice <= Number(price);

			const matchesBedrooms =
				!bedrooms || property.bedrooms >= Number(bedrooms);

			return (
				matchesSearch &&
				matchesLocation &&
				matchesGuests &&
				matchesPrice &&
				matchesBedrooms
			);
		});

		if (sortBy === "price-low") {
			return [...filtered].sort((a, b) => a.price - b.price);
		}
		if (sortBy === "price-high") {
			return [...filtered].sort((a, b) => b.price - a.price);
		}
		if (sortBy === "name-az") {
			return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
		}
		if (sortBy === "name-za") {
			return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
		}
		return filtered;
	}, [searchTerm, location, guests, price, bedrooms, sortBy]);

	const visibleProperties = filteredProperties.slice(0, visibleCount);
	const hasMore = visibleCount < filteredProperties.length;

	// === HANDLERS ===
	// Each is now a one-line dispatch. The "also reset visibleCount"
	// logic that used to be repeated in every handler now lives once,
	// inside each reducer.
	const handleSearchChange = (value) => dispatch(setSearchTerm(value));
	const handleLocationChange = (value) => dispatch(setLocation(value));
	const handleGuestsChange = (value) => dispatch(setGuests(value));
	const handlePriceChange = (value) => dispatch(setPrice(value));
	const handleBedroomsChange = (value) => dispatch(setBedrooms(value));
	const handleClearFilters = () => dispatch(clearFilters());
	const handleLoadMore = () => dispatch(loadMoreVisible());

	return (
		<main>
			<BrowseHero
				searchTerm={searchTerm}
				onSearchChange={handleSearchChange}
				location={location}
				onLocationChange={handleLocationChange}
				guests={guests}
				onGuestsChange={handleGuestsChange}
				price={price}
				onPriceChange={handlePriceChange}
				bedrooms={bedrooms}
				onBedroomsChange={handleBedroomsChange}
				onClearFilters={handleClearFilters}
			/>

			{/* === PROPERTIES === */}

			<section
				id="browse-results"
				className="bg-[#e8e5df] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 md:px-10 md:pt-12 lg:px-16 lg:pb-28 lg:pt-14">
				<div className="mx-auto max-w-5xl">
					{/* RESULT HEADER */}

					<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<p className="text-sm text-gray-600">
							{filteredProperties.length}{" "}
							{filteredProperties.length === 1 ? "property" : "properties"}{" "}
							found
						</p>

						<select
							value={sortBy}
							onChange={(event) => dispatch(setSortBy(event.target.value))}
							className="rounded-md border border-gray-300 bg-white px-4 py-2 text-xs text-gray-700 outline-none">
							<option value="recommended">Recommended</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
							<option value="name-az">Name: A to Z</option>
							<option value="name-za">Name: Z to A</option>
						</select>
					</div>

					<PropertyGrid properties={visibleProperties} />

					<LoadMore onLoadMore={handleLoadMore} hasMore={hasMore} />
				</div>
			</section>

			<BrowseContactSection />
		</main>
	);
}

export default BrowseProperties;
