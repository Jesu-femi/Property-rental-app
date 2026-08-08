import { useState } from "react";

import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
	// CURRENT CAROUSEL POSITION

	const [currentIndex, setCurrentIndex] = useState(0);

	// NUMBER OF CARDS WE WANT TO DISPLAY
	const cardsToShow = 3;

	// NEXT BUTTON
	const handleNext = () => {
		/*
		  We don't want the carousel to go beyond the
		  available properties.
	
		*/

		setCurrentIndex((previousIndex) => {
			if (previousIndex >= properties.length - cardsToShow) {
				return previousIndex;
			}

			return previousIndex + 1;
		});
	};

	// PREVIOUS BUTTON
	const handlePrevious = () => {
		/*
      We don't want the index to become negative.

      Example:

      currentIndex = 0

      Clicking previous should keep it at 0.
    */

		setCurrentIndex((previousIndex) => {
			if (previousIndex <= 0) {
				return previousIndex;
			}

			return previousIndex - 1;
		});
	};

	// GET THE PROPERTIES TO DISPLAY

	const visibleProperties = properties.slice(
		currentIndex,
		currentIndex + cardsToShow,
	);

	return (
		<section className="bg-white px-5 py-20 md:px-8 lg:py-28">
			{/* Main content container */}

			<div className="mx-auto max-w-7xl">
				{/* === SECTION HEADER === */}

				<div className="flex items-end justify-between gap-6">
					<div className="max-w-2xl">
						{/* Section title */}
						<h2 className=" text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
							Top Pick Villas
						</h2>

						{/* Section description */}
						<p className=" mt-5 text-base leading-7 text-gray-500 md:text-lg">
							Discover our handpicked collection of beautiful villas, carefully
							selected to give you an unforgettable stay.
						</p>
					</div>

					{/* === CAROUSEL ARROWS === */}

					<div className="hidden items-center gap-3 md:flex">
						{/* Previous button */}

						<button
							type="button"
							onClick={handlePrevious}
							disabled={currentIndex === 0}
							aria-label="Previous properties"
							className=" flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-xl text-gray-700 transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
							←
						</button>

						{/* Next button */}

						<button
							type="button"
							aria-label="Next properties"
							onClick={handleNext}
							disabled={currentIndex >= properties.length - cardsToShow}
							className=" flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-xl text-gray-700 transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed
                disabled:opacity-30">
							→
						</button>
					</div>
				</div>

				{/* === PROPERTY CARDS ===*/}

				<div className=" mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{/*
					Loop through our property data.
		
					.slice(0, 3)
					----------------
					The Home page only displays the first
					three properties.
		
					.map()
					------
					Creates one PropertyCard for each property.
				  */}

					{properties.slice(0, 3).map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>
			</div>
		</section>
	);
}

export default FeaturedProperties;
