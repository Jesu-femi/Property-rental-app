import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
	return (
		<section className="w-full flex flex-col gap-2 justify-center items-center ">
			<h2 className="text-center text-black text-bold text-5xl">
				Top Pick Villas
			</h2>

			<p className="text-center text-black text-2x1">Curabitur efficitur...</p>

			<div className="gird 2xl: xl: lg:grid-rows-4 md:grid-rows-3 sm:grid-rows-1">
				{properties.map((property) => (
					<PropertyCard key={property.id} property={property} />
				))}
			</div>
		</section>
	);
}

export default FeaturedProperties;
