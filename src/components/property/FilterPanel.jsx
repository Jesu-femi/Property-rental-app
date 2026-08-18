import { useState } from "react";
import FilterModal from "./FiltersModal";

function FilterPanel({
	location = "",
	onLocationChange,
	guests = "",
	onGuestsChange,
	price = "",
	onPriceChange,
	onClearFilters,
}) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	return (
		<>
			<div className="rounded-md bg-white p-5 shadow-sm">
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
					{/* LOCATION */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Location
						</p>

						<select
							value={location}
							onChange={(event) =>
								onLocationChange(event.target.value)
							}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none"
						>
							<option value="">Where to?</option>
							<option value="Italy">Italy</option>
							<option value="Greece">Greece</option>
							<option value="Croatia">Croatia</option>
						</select>
					</div>

					{/* DATE */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Date
						</p>

						<select className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none">
							<option>Any date</option>
							<option>This week</option>
							<option>This month</option>
						</select>
					</div>

					{/* GUESTS */}

					<div>
						<p className="mb-2 text-[10px] font-medium uppercase text-gray-500">
							Guests
						</p>

						<select
							value={guests}
							onChange={(event) =>
								onGuestsChange(event.target.value)
							}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none"
						>
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
							onChange={(event) =>
								onPriceChange(event.target.value)
							}
							className="w-full border-b border-gray-300 bg-transparent pb-2 text-xs outline-none"
						>
							<option value="">Any price</option>
							<option value="500">€500 / night or less</option>
							<option value="1000">€1000 / night or less</option>
							<option value="1500">€1500 / night or less</option>
						</select>
					</div>

					{/* SEARCH */}

					<div className="flex items-end">
						<button
							type="button"
							className="w-full rounded-md bg-[#606b75] px-4 py-2 text-xs text-white transition hover:bg-[#4f5962]"
						>
							Search
						</button>
					</div>
				</div>

				{/* MORE FILTERS */}

				<div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
					<button
						type="button"
						onClick={() => setIsFilterOpen(true)}
						className="text-xs font-medium uppercase tracking-wide text-gray-600"
					>
						More filters
					</button>

					<button
						type="button"
						onClick={onClearFilters}
						className="text-xs text-gray-500 transition hover:text-gray-900"
					>
						Clear all
					</button>
				</div>
			</div>

			<FilterModal
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
			/>
		</>
	);
}

export default FilterPanel;