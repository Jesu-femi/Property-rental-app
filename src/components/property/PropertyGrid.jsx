import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{properties.map((property) => (
				<PropertyCard key={property.id} property={property} />
			))}
		</div>
	);
}

export default PropertyGrid;