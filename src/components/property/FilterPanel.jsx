import { useState } from "react";
import FilterModal from "./FiltersModal";
import { locationOptions } from "../../utils/Location";

function FilterPanel({
	location = "",
	onLocationChange,
	guests = "",
	onGuestsChange,
	price = "",
	onPriceChange,
	bedrooms = "",
	onBedroomsChange,
	onClearFilters,
}) {
	const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
	const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

	return (
		<>
			{/* === DESKTOP FILTER PANEL === */}

			<div className="hidden rounded-md bg-white p-5 shadow-md lg:block">
				{/* MAIN FILTERS */}
				{/* Date field removed — it was decorative, with no state or
				    filtering logic behind it anywhere in the app. Grid
				    dropped from 5 columns to 4 to match. */}

				<div className="grid grid-cols-4 gap-5">
					{/* LOCATION */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Location
						</p>

						<select
							value={location}
							onChange={(event) => onLocationChange(event.target.value)}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none">
							<option value="">Where to?</option>
							{locationOptions.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>

					{/* GUESTS */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Guests
						</p>

						<select
							value={guests}
							onChange={(event) => onGuestsChange(event.target.value)}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none">
							<option value="">Any guests</option>
							<option value="2">2+ guests</option>
							<option value="4">4+ guests</option>
							<option value="6">6+ guests</option>
							<option value="8">8+ guests</option>
						</select>
					</div>

					{/* PRICE */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Price
						</p>

						<select
							value={price}
							onChange={(event) => onPriceChange(event.target.value)}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none">
							<option value="">Any price</option>
							<option value="500">₦500 / night or less</option>
							<option value="1000">₦1000 / night or less</option>
							<option value="1500">₦1500 / night or less</option>
						</select>
					</div>

					{/* SEARCH */}

					<div className="flex items-end">
						<button
							type="button"
							onClick={() => {
								// Filtering already happens live as fields change —
								// there's nothing to "trigger" here. Instead, this
								// button does something genuinely useful: jumps the
								// user down to the results, since on smaller desktop
								// windows the filter panel can push results below the
								// fold. #browse-results is added to the results
								// section in BrowseProperties.jsx.
								document
									.getElementById("browse-results")
									?.scrollIntoView({ behavior: "smooth" });
							}}
							className="w-full rounded-md bg-[#606b75] px-4 py-2 text-xs text-white transition hover:bg-[#4f5962]">
							Search
						</button>
					</div>
				</div>

				{/* MORE FILTERS BAR */}

				<div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
					<button
						type="button"
						onClick={() => setIsMoreFiltersOpen((current) => !current)}
						className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-600 transition hover:text-gray-900">
						More filters
						<span
							className={`text-sm transition-transform ${
								isMoreFiltersOpen ? "rotate-180" : ""
							}`}>
							⌄
						</span>
					</button>

					<button
						type="button"
						onClick={onClearFilters}
						className="text-xs text-gray-500 transition hover:text-gray-900">
						Clear all
					</button>
				</div>

				{/* === EXPANDED FILTERS === */}

				{isMoreFiltersOpen && (
					<div className="mt-5 border-t border-gray-200 pt-5">
						<div className="grid grid-cols-4 gap-8">
							{/* PROPERTY TYPE */}

							<div>
								<p className="mb-4 text-[10px] font-medium uppercase text-gray-500">
									Property type
								</p>

								<div className="space-y-3">
									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Villa
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Apartment
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										House
									</label>
								</div>
							</div>

							{/* AMENITIES */}

							<div>
								<p className="mb-4 text-[10px] font-medium uppercase text-gray-500">
									Amenities
								</p>

								<div className="space-y-3">
									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Swimming pool
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Sea view
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Parking
									</label>
								</div>
							</div>

							{/* FEATURES */}

							<div>
								<p className="mb-4 text-[10px] font-medium uppercase text-gray-500">
									Features
								</p>

								<div className="space-y-3">
									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Air conditioning
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Wi-Fi
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input type="checkbox" />
										Pet friendly
									</label>
								</div>
							</div>

							{/* BEDROOMS */}

							<div>
								<p className="mb-4 text-[10px] font-medium uppercase text-gray-500">
									Bedrooms
								</p>

								<div className="space-y-3">
									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input
											type="radio"
											name="bedrooms"
											value="1"
											checked={bedrooms === "1"}
											onChange={(event) => onBedroomsChange(event.target.value)}
										/>
										1+ bedroom
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input
											type="radio"
											name="bedrooms"
											value="2"
											checked={bedrooms === "2"}
											onChange={(event) => onBedroomsChange(event.target.value)}
										/>
										2+ bedrooms
									</label>

									<label className="flex items-center gap-2 text-xs text-gray-700">
										<input
											type="radio"
											name="bedrooms"
											value="4"
											checked={bedrooms === "4"}
											onChange={(event) => onBedroomsChange(event.target.value)}
										/>
										4+ bedrooms
									</label>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* === TABLET / MOBILE FILTER BAR === */}

			<div className="lg:hidden">
				<div className="rounded-md bg-white p-4 shadow-md">
					<div className="flex items-center justify-between gap-4">
						<div>
							<p className="text-[10px] font-medium uppercase text-gray-500">
								Filters
							</p>

							<p className="mt-1 text-sm text-gray-700">
								Find your perfect stay
							</p>
						</div>

						<button
							type="button"
							onClick={() => setIsMobileFilterOpen(true)}
							className="rounded-md bg-[#606b75] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#4f5962]">
							More filters
						</button>
					</div>

					{/* QUICK FILTERS */}

					<div className="mt-4 grid grid-cols-2 gap-3">
						<select
							value={location}
							onChange={(event) => onLocationChange(event.target.value)}
							className="w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-xs outline-none">
							<option value="">Location</option>
							{locationOptions.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>

						<select
							value={guests}
							onChange={(event) => onGuestsChange(event.target.value)}
							className="w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-xs outline-none">
							<option value="">Guests</option>
							<option value="2">2+ guests</option>
							<option value="4">4+ guests</option>
							<option value="6">6+ guests</option>
							<option value="8">8+ guests</option>
						</select>
					</div>

					<button
						type="button"
						onClick={onClearFilters}
						className="mt-4 text-xs text-gray-500 underline underline-offset-2">
						Clear all
					</button>
				</div>
			</div>

			{/* === MOBILE FILTER MODAL === */}

			<FilterModal
				isOpen={isMobileFilterOpen}
				onClose={() => setIsMobileFilterOpen(false)}
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
		</>
	);
}

export default FilterPanel;
