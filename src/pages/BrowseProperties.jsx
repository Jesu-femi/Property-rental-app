import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BrowseHero from "../components/browse/BrowseHero";
import PropertyGrid from "../components/property/PropertyGrid";
import LoadMore from "../components/property/LoadMore";
import BrowseContactSection from "../components/browse/BrowseContactSection";

import properties from "../data/properties";

function BrowseProperties() {
	const [searchParams] = useSearchParams();

	// === MAIN FILTERS ===

	const [searchTerm, setSearchTerm] = useState(
		searchParams.get("search") || "",
	);

	const [location, setLocation] = useState(searchParams.get("location") || "");

	const [guests, setGuests] = useState(searchParams.get("guests") || "");

	const [price, setPrice] = useState(searchParams.get("price") || "");

	const [bedrooms, setBedrooms] = useState("");

	// === SORTING ===

	const [sortBy, setSortBy] = useState("recommended");

	// === LOAD MORE ===

	const [visibleCount, setVisibleCount] = useState(6);

	// === FILTER PROPERTIES ===

	const filteredProperties = useMemo(() => {
		const search = searchTerm.trim().toLowerCase();

		const filtered = properties.filter((property) => {
			// SEARCH
			const matchesSearch =
				!search ||
				property.title.toLowerCase().includes(search) ||
				property.location.toLowerCase().includes(search) ||
				property.country.toLowerCase().includes(search);

			// LOCATION / COUNTRY
			const matchesLocation = !location || property.country === location;

			// GUESTS
			const matchesGuests = !guests || property.guests >= Number(guests);

			// PRICE
			const propertyPrice = Number(
				String(property.price).replace(/[^\d.]/g, ""),
			);

			const matchesPrice = !price || propertyPrice <= Number(price);

			// BEDROOMS
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

		// === SORT RESULTS ===

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

	// === VISIBLE PROPERTIES ===

	const visibleProperties = filteredProperties.slice(0, visibleCount);

	const hasMore = visibleCount < filteredProperties.length;

	// === FILTER HANDLERS ===

	const handleSearchChange = (value) => {
		setSearchTerm(value);
		setVisibleCount(6);
	};

	const handleLocationChange = (value) => {
		setLocation(value);
		setVisibleCount(6);
	};

	const handleGuestsChange = (value) => {
		setGuests(value);
		setVisibleCount(6);
	};

	const handlePriceChange = (value) => {
		setPrice(value);
		setVisibleCount(6);
	};

	const handleBedroomsChange = (value) => {
		setBedrooms(value);
		setVisibleCount(6);
	};

	const handleClearFilters = () => {
		setLocation("");
		setGuests("");
		setPrice("");
		setBedrooms("");
		setSearchTerm("");
		setSortBy("recommended");
		setVisibleCount(6);
	};

	const handleLoadMore = () => {
		setVisibleCount((currentCount) => currentCount + 3);
	};

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

			<section className="bg-[#e8e5df] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 md:px-10 md:pt-12 lg:px-16 lg:pb-28 lg:pt-14">
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
							onChange={(event) => {
								setSortBy(event.target.value);
								setVisibleCount(6);
							}}
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
