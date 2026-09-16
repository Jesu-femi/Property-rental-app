function PropertyAmenities({ property }) {
	const amenities = property.amenities || [
		"Swimming pool",
		"Wi-Fi",
		"Air conditioning",
		"Parking",
		"Fully equipped kitchen",
		"Outdoor dining",
	];

	return (
		<section className="border-t border-gray-200 py-10">
			<h2 className="text-2xl font-semibold text-gray-900">Amenities</h2>

			<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{amenities.map((amenity) => (
					<div
						key={amenity}
						className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-4">
						<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e5df] text-sm">
							✓
						</span>

						<span className="text-sm text-gray-700">{amenity}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default PropertyAmenities;