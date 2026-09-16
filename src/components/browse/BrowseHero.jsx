import browserbg from "../../assets/images/About bg.jpg";
import SearchBar from "../property/SearchBar";
import FilterPanel from "../property/FilterPanel";

function BrowseHero({
	searchTerm,
	onSearchChange,
	location,
	onLocationChange,
	guests,
	onGuestsChange,
	price,
	onPriceChange,
	onClearFilters,
	bedrooms,
	onBedroomsChange,
}) {
	return (
		<section
			className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${browserbg})` }}>
			{/* Background overlay */}
			<div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

			{/* HERO CONTENT */}
			<div className="relative px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 md:px-10 md:pb-32 md:pt-32 lg:px-16 lg:pb-36 lg:pt-36">
				<div className="mx-auto max-w-5xl">
					{/* TITLE */}

					<div className="text-center text-white">
						<h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
							All Villas
						</h1>

						<p className="mt-3 text-xs text-white/80 sm:text-sm">
							Find your perfect stay
						</p>
					</div>

					{/* SEARCH */}

					<SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
				</div>
			</div>

			{/* FILTER */}
			<div className="relative z-10 -mt-10 px-5 pb-10 sm:px-8 md:px-10 lg:px-16 lg:pb-14">
				<div className="mx-auto max-w-5xl">
					<FilterPanel
						location={location}
						onLocationChange={onLocationChange}
						guests={guests}
						onGuestsChange={onGuestsChange}
						price={price}
						onPriceChange={onPriceChange}
						bedrooms={bedrooms}
						onBedroomsChange={onBedroomsChange}
						onClearFilters={onClearFilters}
					/>
				</div>
			</div>
		</section>
	);
}

export default BrowseHero;