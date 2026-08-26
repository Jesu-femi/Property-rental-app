function BookingCard({ property }) {
	return (
		<aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
			<div className="flex items-baseline justify-between">
				<div>
					<span className="text-2xl font-semibold text-gray-900">
						€{property.price}
					</span>

					<span className="ml-1 text-sm text-gray-500">/night</span>
				</div>
			</div>

			<div className="mt-6 space-y-4">
				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Check in
					</label>

					<input
						type="date"
						className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-700"
					/>
				</div>

				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Check out
					</label>

					<input
						type="date"
						className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-700"
					/>
				</div>

				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Guests
					</label>

					<select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-700">
						<option>1 guest</option>
						<option>2 guests</option>
						<option>4 guests</option>
						<option>6 guests</option>
						<option>8 guests</option>
					</select>
				</div>
			</div>

			<button
				type="button"
				className="mt-6 w-full rounded-lg bg-[#606b75] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#4f5962]">
				Make an enquiry
			</button>

			<p className="mt-4 text-center text-xs text-gray-500">
				You won't be charged yet
			</p>
		</aside>
	);
}

export default BookingCard;
