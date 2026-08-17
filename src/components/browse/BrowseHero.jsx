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
}) {
	return (
		<section className="bg-[#e8e5df] px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24 md:px-10 lg:px-16 lg:pb-14 lg:pt-28">
			<div className="mx-auto max-w-5xl">
				{/* PAGE TITLE */}

				<div className="text-center">
					<h1 className="font-serif text-4xl text-[#171d24] sm:text-5xl">
						All Villas
					</h1>

					<p className="mt-2 text-sm text-gray-600">Find your perfect stay</p>
				</div>

				{/* SEARCH */}

				<SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

				{/* FILTERS */}

				<div className="mt-5">
					<FilterPanel
						location={location}
						onLocationChange={onLocationChange}
						guests={guests}
						onGuestsChange={onGuestsChange}
						onClearFilters={onClearFilters}
					/>
				</div>
			</div>
		</section>
	);
}

export default BrowseHero;
