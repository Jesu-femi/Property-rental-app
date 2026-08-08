function HeroSearch() {
	return (
		<div className=" mt-12 hidden w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl md:grid md:grid-cols-5">
			{/* Location */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Location
				</label>

				<select className="border-r p-5 outline-none">
					<option>Italy</option>
					<option>France</option>
					<option>Spain</option>
				</select>
			</div>

			{/* Date */}

			<div className="border-rborder-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Date
				</label>

				<input
					type="date"
					className="w-full bg-transparent text-sm outline-none"
				/>
			</div>

			{/* Guests */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Guests
				</label>

				<select className="w-full bg-transparent text-sm outline-none">
					<option>2 Guests</option>
					<option>4 Guests</option>
					<option>6 Guests</option>
					<option>8 Guests</option>
				</select>
			</div>

			{/* Price */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Price
				</label>

				<select className="w-full bg-transparent text-sm outline-none">
					<option>Any Price</option>
					<option>€100 - €300</option>
					<option>€300 - €500</option>
					<option>€500+</option>
				</select>
			</div>

			{/* Button */}

			<button
				type="button"
				className=" flex items-center justify-center bg-slate-700 px-6 text-sm font-medium text-white transition hover:bg-slate-800">
				Search
			</button>
		</div>
	);
}

export default HeroSearch;
