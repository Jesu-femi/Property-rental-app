import { useMemo, useState } from "react";

import BrowseHero from "../components/browse/BrowseHero";
import PropertyGrid from "../components/property/PropertyGrid";
import LoadMore from "../components/property/LoadMore";

import properties from "../data/properties";

function BrowseProperties() {
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");
	const [visibleCount, setVisibleCount] = useState(6);
	const [guests, setGuests] = useState("");
	const [price, setPrice] = useState("");

	const filteredProperties = useMemo(() => {
		const search = searchTerm.trim().toLowerCase();

		return properties.filter((property) => {
			const matchesSearch =
				!search ||
				property.title.toLowerCase().includes(search) ||
				property.location.toLowerCase().includes(search) ||
				property.country.toLowerCase().includes(search);

			const matchesPrice = !price || property.price <= Number(price);

			const matchesLocation = !location || property.country === location;

			const matchesGuests = !guests || property.guests >= Number(guests);

			return matchesSearch && matchesLocation && matchesGuests && matchesPrice;
		});
	}, [searchTerm, location, guests, price]);

	const visibleProperties = filteredProperties.slice(0, visibleCount);

	const hasMore = visibleCount < filteredProperties.length;

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

	const handleClearFilters = () => {
		setLocation("");
		setSearchTerm("");
		setGuests("");
		setPrice("");
		setVisibleCount("");
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
				onClearFilters={handleClearFilters}
			/>

			<section className="bg-[#e8e5df] px-5 pb-16 sm:px-8 md:px-10 lg:px-16 lg:pb-24">
				<div className="mx-auto max-w-5xl">
					<PropertyGrid properties={visibleProperties} />

					<LoadMore onLoadMore={handleLoadMore} hasMore={hasMore} />
				</div>
			</section>
		</main>
	);
}

export default BrowseProperties;
