import PropertyCard from "./PropertyCard";
import properties from "../../data/properties";

function RelatedProperties({ property }) {
	const relatedProperties = properties
		.filter((item) => item.id !== property.id)
		.slice(0, 3);

	return (
		<section className="border-t border-gray-200 px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
			<div className="mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">
						You may also like
					</h2>

					<p className="mt-2 text-sm text-gray-500">
						Discover more properties for your next stay
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{relatedProperties.map((item) => (
						<PropertyCard key={item.id} property={item} />
					))}
				</div>
			</div>
		</section>
	);
}

export default RelatedProperties;
