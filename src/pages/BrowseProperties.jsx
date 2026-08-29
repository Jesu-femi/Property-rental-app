import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BrowseHero from "../components/browse/BrowseHero";
import PropertyGrid from "../components/property/PropertyGrid";
import LoadMore from "../components/property/LoadMore";
import BrowseContactSection from "../components/browse/BrowseContactSection";

import properties from "../data/properties";

function BrowseProperties() {
	const [searchParams, setSearchParams] = useSearchParams();

	// Get filter values from the URL.
	const initialLocation = searchParams.get("location") || "";
	const initialGuests = searchParams.get("guests") || "";
	const initialPrice = searchParams.get("price") || "";

	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState(initialLocation);
	const [guests, setGuests] = useState(initialGuests);
	const [price, setPrice] = useState(initialPrice);

	const [visibleCount, setVisibleCount] = useState(6);

	// === FILTER PROPERTIES ===

	const filteredProperties = useMemo(() => {
		const search = searchTerm.trim().toLowerCase();

		return properties.filter((property) => {
			// SEARCH
			const matchesSearch =
				!search ||
				property.title.toLowerCase().includes(search) ||
				property.location.toLowerCase().includes(search) ||
				property.country.toLowerCase().includes(search);

			// LOCATION
			const matchesLocation = !location || property.country === location;

			// GUESTS
			const matchesGuests = !guests || property.guests >= Number(guests);

			// PRICE
			const propertyPrice = Number(
				String(property.price).replace(/[^\d.]/g, ""),
			);

			const matchesPrice = !price || propertyPrice <= Number(price);

			return matchesSearch && matchesLocation && matchesGuests && matchesPrice;
		});
	}, [searchTerm, location, guests, price]);

	// Only display the number of properties allowed by Load More.
	const visibleProperties = filteredProperties.slice(0, visibleCount);

	const hasMore = visibleCount < filteredProperties.length;

	// === HANDLERS ===

	const handleSearchChange = (value) => {
		setSearchTerm(value);
		setVisibleCount(6);
	};

	const handleLocationChange = (value) => {
		setLocation(value);
		setVisibleCount(6);

		updateUrl("location", value);
	};

	const handleGuestsChange = (value) => {
		setGuests(value);
		setVisibleCount(6);

		updateUrl("guests", value);
	};

	const handlePriceChange = (value) => {
		setPrice(value);
		setVisibleCount(6);

		updateUrl("price", value);
	};

	// === UPDATE URL ===

	const updateUrl = (key, value) => {
		const params = new URLSearchParams(searchParams);

		if (value) {
			params.set(key, value);
		} else {
			params.delete(key);
		}

		setSearchParams(params);
	};

	// === CLEAR FILTERS ===

	const handleClearFilters = () => {
		setLocation("");
		setGuests("");
		setPrice("");
		setSearchTerm("");
		setVisibleCount(6);

		setSearchParams({});
	};

	// === LOAD MORE ===

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
				onClearFilters={handleClearFilters}
			/>

			{/* === PROPERTIES === */}

			<section className="bg-[#e8e5df] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 md:px-10 md:pt-12 lg:px-16 lg:pb-28 lg:pt-14">
				<div className="mx-auto max-w-5xl">
					<PropertyGrid properties={visibleProperties} />

					<LoadMore onLoadMore={handleLoadMore} hasMore={hasMore} />
				</div>
			</section>

			<BrowseContactSection />
		</main>
	);
}

export default BrowseProperties;