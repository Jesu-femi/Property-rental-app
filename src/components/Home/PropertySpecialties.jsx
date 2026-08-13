// src/components/home/PropertySpecialties.jsx
import { Waves, PawPrint, Car, Dumbbell, Ship } from "lucide-react";

function PropertySpecialties() {
	// ==========================================================
	// SPECIALTIES DATA
	// ==========================================================
	//
	// Keeping the information in an array makes the component
	// easier to maintain. If we want to add another specialty
	// later, we only need to add another object here.
	//

	const specialties = [
		{ title: "Seafront", description: "have a look", icon: Waves },
		{ title: "Pet friendly", description: "pets allowed", icon: PawPrint },
		{ title: "Electric car", description: "charge your car", icon: Car },
		{ title: "Fitness/Gym", description: "work out", icon: Dumbbell },
		{ title: "Boat mooring", description: "take a trip", icon: Ship },
	];

	return (
		<section className=" bg-[#f8f7f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 ">
			{/* === SECTION CONTAINER === */}

			<div className="mx-auto max-w-6xl">
				{/*=== SECTION TITLE ===  */}

				<h2 className=" text-center font-serif text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl ">
					Our properties specialties
				</h2>

				{/*=== SPECIALTIES LIST ===  */}

				<div className=" mx-auto mt-10 max-w-5xl lg:mt-12 lg:grid lg:grid-cols-5 ">
					{specialties.map((specialty, index) => {
						const Icon = specialty.icon;

						return (
							<div
								key={specialty.title}
								className={` flex items-start gap-4 py-5 lg:flex-col lg:gap-3 lg:px-5 lg:py-0 
                                ${index !== 0 ? "border-t border-[#ded8cd] lg:border-l lg:border-t-0" : ""} `}>
								{/* Icon */}
								<div className="mt-1 shrink-0 text-[#cbbb9f]">
									<Icon size={24} strokeWidth={1.2} />
								</div>

								{/* Text */}
								<div className="min-w-0">
									<h3 className=" font-serif text-lg leading-tight text-gray-900 lg:text-xl ">
										{" "}
										{specialty.title}
									</h3>
									<p className=" mt-1 flex items-center gap-1 text-xs text-gray-500 lg:text-[11px] ">
										{specialty.description}
										<span aria-hidden="true">→</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default PropertySpecialties;
