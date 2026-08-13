// src/components/home/HeroSearch.jsx

function HeroSearch() {
	return (
		<div
			className="
        mx-auto
        grid
        max-w-5xl
        grid-cols-1
        overflow-hidden
        rounded-xl
        bg-white
        shadow-2xl
        md:grid-cols-5
      ">
			{/* Location */}

			<select className="border-b p-5 outline-none md:border-b-0 md:border-r">
				<option>Italy</option>
				<option>France</option>
				<option>Spain</option>
			</select>

			{/* Date */}

			<input
				type="date"
				className="border-b p-5 outline-none md:border-b-0 md:border-r"
			/>

			{/* Guests */}

			<select className="border-b p-5 outline-none md:border-b-0 md:border-r">
				<option>2 Guests</option>
				<option>4 Guests</option>
				<option>6 Guests</option>
			</select>

			{/* Price */}

			<select className="border-b p-5 outline-none md:border-b-0 md:border-r">
				<option>Price</option>
				<option>$100 - $300</option>
				<option>$300 - $600</option>
			</select>

			{/* Button */}

			<button
				className="
          bg-slate-700
          p-5
          font-semibold
          text-white
          transition
          hover:bg-slate-800
        ">
				Search
			</button>
		</div>
	);
}

export default HeroSearch;
