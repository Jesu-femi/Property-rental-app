import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeroSearch() {
	const navigate = useNavigate();

	const [location, setLocation] = useState("");
	const [guests, setGuests] = useState("");
	const [price, setPrice] = useState("");

	const handleSearch = () => {
		const params = new URLSearchParams();

		if (location) {
			params.set("location", location);
		}

		if (guests) {
			params.set("guests", guests);
		}

		if (price) {
			params.set("price", price);
		}

		navigate(`/browse-properties?${params.toString()}`);
	};

	return (
		<div className="mt-12 hidden w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl md:grid md:grid-cols-5">
			{/* LOCATION */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Location
				</label>

				<select
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					className="w-full bg-transparent text-sm outline-none">
					<option value="">Any location</option>
					<option value="Italy">Italy</option>
					<option value="Spain">Spain</option>
					<option value="Greece">Greece</option>
					<option value="Croatia">Croatia</option>
				</select>
			</div>

			{/* DATE */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Date
				</label>

				<input
					type="date"
					className="w-full bg-transparent text-sm outline-none"
				/>
			</div>

			{/* GUESTS */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Guests
				</label>

				<select
					value={guests}
					onChange={(event) => setGuests(event.target.value)}
					className="w-full bg-transparent text-sm outline-none">
					<option value="">Any guests</option>
					<option value="2">2+ Guests</option>
					<option value="4">4+ Guests</option>
					<option value="6">6+ Guests</option>
					<option value="8">8+ Guests</option>
				</select>
			</div>

			{/* PRICE */}

			<div className="border-r border-gray-200 p-4">
				<label className="mb-1 block text-[10px] font-semibold text-gray-800">
					Price
				</label>

				<select
					value={price}
					onChange={(event) => setPrice(event.target.value)}
					className="w-full bg-transparent text-sm outline-none">
					<option value="">Any price</option>
					<option value="500">₦500 or less</option>
					<option value="1000">₦1000 or less</option>
					<option value="1500">₦1500 or less</option>
				</select>
			</div>

			{/* SEARCH */}

			<Link
				to="/browse"
				className="flex items-center justify-center bg-slate-700 px-6 text-sm font-medium text-white transition hover:bg-slate-800">
				Search
			</Link>
		</div>
	);
}

export default HeroSearch;
