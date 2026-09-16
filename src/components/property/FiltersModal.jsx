import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLocationOptions } from "../../redux/slices/propertiesSlice";

function FilterModal({
	isOpen,
	onClose,
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
	const locationOptions = useSelector(selectLocationOptions);

	const [localLocation, setLocalLocation] = useState(location);
	const [localGuests, setLocalGuests] = useState(guests);
	const [localPrice, setLocalPrice] = useState(price);
	const [localBedrooms, setLocalBedrooms] = useState(bedrooms);

	// This component never actually unmounts — "if (!isOpen) return
	// null" only hides its output, so its local draft state (the
	// four useState calls above) was only ever initialized ONCE, on
	// first mount. Any filter changes made elsewhere (e.g. the quick
	// filters in the mobile bar, or Clear All) never updated these
	// local copies, so reopening the modal could show outdated values
	// instead of what's actually currently applied.
	//
	// Fix: whenever isOpen flips to true (the modal is being opened),
	// re-copy the real applied values into local state. This makes
	// "opening the modal" always start from the true current filters,
	// which is what a user would expect.
	useEffect(() => {
		if (isOpen) {
			setLocalLocation(location);
			setLocalGuests(guests);
			setLocalPrice(price);
			setLocalBedrooms(bedrooms);
		}
	}, [isOpen, location, guests, price, bedrooms]);

	if (!isOpen) return null;

	const handleApply = () => {
		onLocationChange(localLocation);
		onGuestsChange(localGuests);
		onPriceChange(localPrice);
		onBedroomsChange(localBedrooms);

		onClose();
	};

	const handleClear = () => {
		setLocalLocation("");
		setLocalGuests("");
		setLocalPrice("");
		setLocalBedrooms("");

		onClearFilters();
	};

	return (
		<div className="fixed inset-0 z-50 bg-black/40">
			<div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
				<div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-5 sm:px-6">
					<h2 className="font-serif text-2xl font-semibold text-[#171d24]">
						Filters
					</h2>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close filters"
						className="flex h-9 w-9 items-center justify-center text-2xl text-gray-700 transition hover:text-black">
						×
					</button>
				</div>

				<div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
					<div className="space-y-7">
						<div>
							<h3 className="mb-3 text-sm font-semibold text-gray-800">
								Location
							</h3>

							<select
								value={localLocation}
								onChange={(event) => setLocalLocation(event.target.value)}
								className="w-full rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none">
								<option value="">Any location</option>
								{locationOptions.map((country) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
						</div>

						<div>
							<h3 className="mb-3 text-sm font-semibold text-gray-800">
								Guests
							</h3>

							<select
								value={localGuests}
								onChange={(event) => setLocalGuests(event.target.value)}
								className="w-full rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none">
								<option value="">Any guests</option>
								<option value="2">2+ guests</option>
								<option value="4">4+ guests</option>
								<option value="6">6+ guests</option>
								<option value="8">8+ guests</option>
							</select>
						</div>

						<div>
							<h3 className="mb-3 text-sm font-semibold text-gray-800">
								Price
							</h3>

							<select
								value={localPrice}
								onChange={(event) => setLocalPrice(event.target.value)}
								className="w-full rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none">
								<option value="">Any price</option>
								<option value="500">₦500 or less</option>
								<option value="1000">₦1000 or less</option>
								<option value="1500">₦1500 or less</option>
							</select>
						</div>

						<div>
							<h3 className="mb-4 text-sm font-semibold text-gray-800">
								Bedrooms
							</h3>

							<div className="space-y-4">
								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input
										type="radio"
										name="mobile-bedrooms"
										value="1"
										checked={localBedrooms === "1"}
										onChange={(event) => setLocalBedrooms(event.target.value)}
									/>
									1+ bedroom
								</label>

								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input
										type="radio"
										name="mobile-bedrooms"
										value="2"
										checked={localBedrooms === "2"}
										onChange={(event) => setLocalBedrooms(event.target.value)}
									/>
									2+ bedrooms
								</label>

								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input
										type="radio"
										name="mobile-bedrooms"
										value="4"
										checked={localBedrooms === "4"}
										onChange={(event) => setLocalBedrooms(event.target.value)}
									/>
									4+ bedrooms
								</label>
							</div>
						</div>

						<div>
							<h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-600">
								More filters
							</h3>

							<div className="grid grid-cols-1 gap-4">
								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input type="checkbox" />
									Sea view
								</label>

								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input type="checkbox" />
									Swimming pool
								</label>

								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input type="checkbox" />
									Parking
								</label>

								<label className="flex items-center gap-3 text-sm text-gray-700">
									<input type="checkbox" />
									Air conditioning
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex shrink-0 gap-3 border-t border-gray-200 bg-white px-5 py-4 sm:px-6">
					<button
						type="button"
						onClick={handleClear}
						className="flex-1 rounded-lg border border-[#606b75] px-4 py-3 text-sm text-[#606b75] transition hover:bg-gray-50">
						Clear all
					</button>

					<button
						type="button"
						onClick={handleApply}
						className="flex-1 rounded-lg bg-[#606b75] px-4 py-3 text-sm text-white transition hover:bg-[#4f5962]">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default FilterModal;
