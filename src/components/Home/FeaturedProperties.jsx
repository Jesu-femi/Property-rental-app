import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
	return (
		<section>
			<h2>Top Pick Villas</h2>

			<p>Curabitur efficitur...</p>

			<div>
				{properties.map((property) => (
					<PropertyCard key={property.id} property={property} />
				))}
			</div>
		</section>
	);
}

export default FeaturedProperties;
