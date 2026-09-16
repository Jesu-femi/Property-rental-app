import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
	if (properties.length === 0) {
		return (
			<div className="py-20 text-center">
				<h2 className="font-serif text-2xl text-gray-800">
					No properties found
				</h2>

				<p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
					Try changing your search or filters.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			{properties.map((property) => (
				<PropertyCard
					key={property.id}
					property={property}
				/>
			))}
		</div>
	);
}

export default PropertyGrid;