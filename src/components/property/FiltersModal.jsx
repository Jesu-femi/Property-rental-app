function FilterModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/30">
			<div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-xl">
				{/* HEADER */}

				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
					<h2 className="font-serif text-2xl font-semibold text-[#171d24]">
						Filters
					</h2>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close filters"
						className="text-2xl text-gray-700">
						×
					</button>
				</div>

				{/* FILTER CONTENT */}

				<div className="space-y-7 px-6 py-6">
					{/* LOCATION */}

					<div>
						<h3 className="mb-3 text-sm font-semibold text-gray-800">
							Location
						</h3>

						<select className="w-full rounded-lg border border-gray-300 px-4 py-4 text-sm outline-none">
							<option>Select</option>
							<option>Italy</option>
							<option>Greece</option>
							<option>Croatia</option>
						</select>
					</div>

					{/* DATE */}

					<div>
						<h3 className="mb-3 text-sm font-semibold text-gray-800">Date</h3>

						<button
							type="button"
							className="w-full rounded-lg border border-gray-300 px-4 py-4 text-left text-sm text-gray-700">
							Check in
						</button>
					</div>

					{/* GUESTS */}

					<div>
						<h3 className="mb-3 text-sm font-semibold text-gray-800">Guests</h3>

						<div className="rounded-lg border border-gray-300 px-5 py-5">
							<input
								type="range"
								min="1"
								max="12"
								defaultValue="2"
								className="w-full"
							/>

							<p className="mt-3 text-sm text-gray-700">2 guests</p>
						</div>
					</div>

					{/* PRICE */}

					<div>
						<h3 className="mb-3 text-sm font-semibold text-gray-800">Price</h3>

						<div className="rounded-lg border border-gray-300 px-5 py-5">
							<input
								type="range"
								min="100"
								max="3000"
								defaultValue="1000"
								className="w-full"
							/>

							<p className="mt-3 text-sm text-gray-700">€1000 / week</p>
						</div>
					</div>

					{/* MORE FILTERS */}

					<div>
						<h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-600">
							More filters
						</h3>

						<div className="space-y-4">
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

				{/* FOOTER BUTTONS */}

				<div className="sticky bottom-0 flex gap-3 border-t border-gray-200 bg-white px-6 py-4">
					<button
						type="button"
						className="flex-1 rounded-lg border border-[#606b75] px-4 py-3 text-sm text-[#606b75]">
						Clear all
					</button>

					<button
						type="button"
						onClick={onClose}
						className="flex-1 rounded-lg bg-[#606b75] px-4 py-3 text-sm text-white">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default FilterModal;
