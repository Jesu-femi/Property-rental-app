import { useRef, useState } from "react";

import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
	// CURRENT CAROUSEL POSITION on destop

	const [currentIndex, setCurrentIndex] = useState(0);

	// Number of cards displayed at each breakpoint
	const DESKTOP_CARDS = 3;
	const TABLET_CARDS = 2;

	// Reference to the mobile carousel
	const mobileCarouselRef = useRef(null);

	// Keeps track of which mobile card is currently visible
	const [mobileIndex, setMobileIndex] = useState(0);

	// Desktop shows 3 cards
	const desktopProperties = properties.slice(
		currentIndex,
		currentIndex + DESKTOP_CARDS,
	);

	// Tablet shows 2 cards
	const tabletProperties = properties.slice(
		currentIndex,
		currentIndex + TABLET_CARDS,
	);

	// NEXT BUTTON
	const handleNext = () => {
		/*
		  We don't want the carousel to go beyond the
		  available properties.
		*/
		setCurrentIndex((previousIndex) => {
			// Stop when the desktop carousel reaches
			// the final group of 3 properties.
			if (previousIndex >= properties.length - DESKTOP_CARDS) {
				return previousIndex;
			}

			return previousIndex + 1;
		});
	};

	// PREVIOUS BUTTON
	const handlePrevious = () => {
		setCurrentIndex((previousIndex) => {
			if (previousIndex <= 0) {
				return previousIndex;
			}

			return previousIndex - 1;
		});
	};

	const handleMobileScroll = () => {
		const carousel = mobileCarouselRef.current;

		// Make sure the carousel exists
		if (!carousel) return;

		// Get all the mobile cards
		const cards = carousel.children;

		if (!cards.length) return;

		// Get the width of the first card
		const cardWidth = cards[0].offsetWidth;

		// Get the gap between cards
		const gap = 16;

		// Calculate which card is currently closest
		// to the left side of the carousel
		const newIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));

		setMobileIndex(newIndex);
	};

	return (
		<section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-20 lg:py-28">
			{/* Main content container */}

			<div className="mx-auto max-w-7xl">
				{/* === SECTION HEADER === */}

				<div className="flex items-end justify-between gap-6">
					<div className="max-w-2xl">
						{/* Section title */}
						<h2 className=" text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xll">
							Top Pick Villas
						</h2>

						{/* Section description */}
						<p className=" mt-4 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 md:text-lg">
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
							className=" flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-700 transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
							←
						</button>

						{/* Next button */}

						<button
							type="button"
							aria-label="Next properties"
							onClick={handleNext}
							disabled={currentIndex >= properties.length - 3}
							className=" flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-700 transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
							→
						</button>
					</div>
				</div>

				{/* === PROPERTY CARDS ===*/}

				{/* === DESKTOP PROPERTY CARDS === */}

				<div className=" mt-10 hidden lg:grid lg:grid-cols-3 lg:gap-6 ">
					{desktopProperties.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>

				{/* === TABLET PROPERTY CARDS === */}

				<div className=" mt-10 hidden sm:grid sm:grid-cols-2 sm:gap-5 lg:hidden ">
					{tabletProperties.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>

				{/* == MOBILE CAROUSEL == */}

				<div
					ref={mobileCarouselRef}
					onScroll={handleMobileScroll}
					className=" mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide sm:hidden ">
					{properties.map((property) => (
						<div key={property.id} className=" min-w-[88%] snap-center">
							<PropertyCard property={property} />
						</div>
					))}
				</div>

				{/* === MOBILE SWIPE INDICATOR === */}

				<div className="mt-5 flex justify-center gap-2 sm:hidden">
					{Array.from({ length: Math.min(properties.length, 5) }).map(
						(_, index) => {
							// Calculate which indicator should be active.
							const indicatorIndex = Math.min(
								Math.floor((mobileIndex / properties.length) * 5),
								4,
							);

							return (
								<span
									key={index}
									className={`h-1.5 rounded-full transition-all duration-300 ${index === indicatorIndex ? "w-5 bg-gray-900" : "w-1.5 bg-gray-300"}`}
								/>
							);
						},
					)}
				</div>
			</div>
		</section>
	);
}

export default FeaturedProperties;
