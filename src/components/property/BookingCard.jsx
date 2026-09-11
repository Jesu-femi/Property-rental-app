import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEnquiry } from "../../redux/slices/enquirySlice";

function BookingCard({ property }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [checkIn, setCheckIn] = useState("");
	const [checkOut, setCheckOut] = useState("");
	const [guests, setGuests] = useState("1");
	const [errors, setErrors] = useState({});

	const handleEnquiry = () => {
		const newErrors = {};

		if (!checkIn) {
			newErrors.checkIn = "Please select a check-in date.";
		}

		if (!checkOut) {
			newErrors.checkOut = "Please select a check-out date.";
		}

		if (!guests) {
			newErrors.guests = "Please select the number of guests.";
		}

		if (checkIn && checkOut && checkOut <= checkIn) {
			newErrors.checkOut = "Check-out must be after check-in.";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// Only reached once validation passes. This is the handoff:
		// we save what the user picked into Redux, THEN navigate.
		// Order matters here — the dispatch has to happen before
		// navigate(), since navigate() unmounts this component.
		dispatch(
			setEnquiry({ propertyId: property.id, checkIn, checkOut, guests }),
		);

		navigate("/enquiry");
	};

	return (
		<aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
			<div className="flex items-baseline justify-between">
				<div>
					<span className="text-2xl font-semibold text-gray-900">
						₦{property.price}
					</span>

					<span className="ml-1 text-sm text-gray-500">/night</span>
				</div>
			</div>

			<div className="mt-6 space-y-4">
				{/* CHECK IN */}

				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Check in
					</label>

					<input
						type="date"
						value={checkIn}
						onChange={(event) => {
							setCheckIn(event.target.value);
							setErrors((current) => ({ ...current, checkIn: "" }));
						}}
						className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-700"
					/>

					{errors.checkIn && (
						<p className="mt-1 text-xs text-red-500">{errors.checkIn}</p>
					)}
				</div>

				{/* CHECK OUT */}

				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Check out
					</label>

					<input
						type="date"
						value={checkOut}
						min={checkIn || undefined}
						onChange={(event) => {
							setCheckOut(event.target.value);
							setErrors((current) => ({ ...current, checkOut: "" }));
						}}
						className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-700"
					/>

					{errors.checkOut && (
						<p className="mt-1 text-xs text-red-500">{errors.checkOut}</p>
					)}
				</div>

				{/* GUESTS */}

				<div>
					<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-500">
						Guests
					</label>

					<select
						value={guests}
						onChange={(event) => {
							setGuests(event.target.value);
							setErrors((current) => ({ ...current, guests: "" }));
						}}
						className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-700">
						<option value="">Select guests</option>
						<option value="1">1 guest</option>
						<option value="2">2 guests</option>
						<option value="4">4 guests</option>
						<option value="6">6 guests</option>
						<option value="8">8 guests</option>
					</select>

					{errors.guests && (
						<p className="mt-1 text-xs text-red-500">{errors.guests}</p>
					)}
				</div>
			</div>

			{/* ENQUIRY BUTTON */}

			<button
				type="button"
				onClick={handleEnquiry}
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
