// src/components/home/Regions.jsx

import mountainsImage from "../../assets/images/mountain.jpg";
import coastlineImage from "../../assets/images/coastline.jpg";

function Regions() {
	return (
		<section className=" bg-[#c9beaa] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-16 rounded-br-[80px] lg:rounded-br-[100px] ">
			{/* === MAIN CONTENT CONTAINER === */}

			<div className="mx-auto max-w-5xl">
				{/* === SECTION HEADER === */}

				<div className="mx-auto max-w-2xl text-center">
					{/* Section title */}

					<h2 className=" font-serif text-4xl leading-tight text-gray-900 sm:text-5xl lg:text-5xl ">
						OUR REGIONS
					</h2>

					{/* Section description */}

					<p className=" mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 ">
						Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus.
						Quisque feugiat felis a quam volutpat, non scelerisque nibh
						scelerisque.
					</p>
				</div>

				{/* === REGION CARDS === */}

				<div className=" mt-10 grid grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-2 ">
					{/* === MOUNTAINS === */}

					<div className=" relative h-75 overflow-hidden rounded-tl-[40px] rounded-br-sm sm:h-90 lg:h-85 ">
						{/* Background image */}

						<img
							src={mountainsImage}
							alt="Mountains region"
							className=" absolute inset-0 h-full w-full object-cover "
						/>

						{/* Dark overlay */}

						<div className=" absolute inset-0 bg-black/10 " />

						{/* Text */}

						<div className=" absolute bottom-7 left-5 text-white sm:bottom-8 sm:left-7 ">
							<h3 className=" font-serif text-4xl leading-none sm:text-5xl ">
								Mountains
							</h3>

							<p className=" mt-1 text-xs sm:text-sm ">87 properties</p>
						</div>
					</div>

					{/* === COASTLINE ===*/}

					<div className=" relative h-75 overflow-hidden rounded-tl-[40px] rounded-br-[40px] sm:h-90 lg:h-85 ">
						{/* Background image */}

						<img
							src={coastlineImage}
							alt="Coastline region"
							className=" absolute inset-0 h-full w-full object-cover "
						/>

						{/* Dark overlay */}

						<div className=" absolute inset-0 bg-black/10 " />

						{/* Text */}

						<div className=" absolute bottom-7 left-5 text-white sm:bottom-8 sm:left-7 ">
							<h3 className=" font-serif text-4xl leading-none sm:text-5xl ">
								Coastline
							</h3>

							<p className=" mt-1 text-xs sm:text-sm ">64 properties</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Regions;
