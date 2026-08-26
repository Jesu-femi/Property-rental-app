function PropertyGallery({ property }) {
	const images = property.images?.length ? property.images : [property.image];

	return (
		<section className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:pt-10">
			<div className="mx-auto max-w-7xl">
				<div className="grid h-105 grid-cols-1 gap-2 overflow-hidden rounded-2xl sm:h-125 md:grid-cols-2 lg:h-140">
					{/* MAIN IMAGE */}

					<div className="overflow-hidden">
						<img
							src={images[0]}
							alt={property.title}
							className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
						/>
					</div>

					{/* SECONDARY IMAGES */}

					<div className="hidden grid-rows-2 gap-2 md:grid">
						<div className="overflow-hidden">
							<img
								src={images[1] || images[0]}
								alt={`${property.title} view`}
								className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
							/>
						</div>

						<div className="overflow-hidden">
							<img
								src={images[2] || images[0]}
								alt={`${property.title} interior`}
								className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PropertyGallery;