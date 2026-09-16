function PropertyLocation({ property }) {
	return (
		<section className="border-t border-gray-200 py-10">
			<h2 className="text-2xl font-semibold text-gray-900">Location</h2>

			<p className="mt-3 text-sm text-gray-600">
				{property.address || `${property.location}, ${property.country}`}
			</p>

			{/* MAP PLACEHOLDERs */}

			<div className="mt-6 flex h-72 items-center justify-center rounded-2xl bg-[#e8e5df]">
				<div className="text-center">
					<div className="text-3xl">⌖</div>

					<p className="mt-2 text-sm font-medium text-gray-700">
						Property location
					</p>

					<p className="mt-1 text-xs text-gray-500">Map will be added later</p>
				</div>
			</div>
		</section>
	);
}

export default PropertyLocation;
