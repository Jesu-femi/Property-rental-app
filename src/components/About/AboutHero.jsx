import aboutbg from "../../assets/images/About bg.jpg";
import aboutimg1 from "../../assets/images/About page img 1.jpg";

// import React from "react";

const AboutHero = () => {
	return (
		<main className="relative min-h-screen overflow-hidden">
			{/* ================= BACKGROUND IMAGE ================= */}
			<div
				className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
				style={{ backgroundImage: `url(${aboutbg})` }}
			/>

			{/* Background overlay */}
			<div className="absolute inset-0 bg-white/30" />

			{/* ================= SECTION CONTENT ================= */}
			<section className="relative z-10 px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pt-48">
				<div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
					{/* ================= IMAGE ================= */}
					<div className="overflow-hidden rounded-t-md rounded-br-[70px]">
						<img
							src={aboutimg1}
							alt="Luxury coastal villa"
							className="h-full w-full object-cover"
						/>
					</div>

					{/* ================= TEXT ================= */}
					<div>
						<h1 className="font-serif text-5xl font-medium leading-[1.05] text-gray-900 md:text-5xl lg:text-6xl">
							Your peace of mind,
							<br className="hidden md:block" />
							our priority
						</h1>

						<div className="mt-8 space-y-5 text-sm leading-6 text-gray-800 md:text-base md:leading-7">
							<p>
								Curabitur efficitur ante vel mi bibendum, et maximus nisl
								ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
							</p>

							<p>
								Curabitur efficitur luctus enim nec sollicitudin. Fusce
								venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae
								odio porttitor feugiat. Sed quis sem elementum, viverra ligula
								at, lobortis magna. Praesent congue nibh in dolor rutrum, et
								euismod quam elementum.
							</p>

							<p>
								<strong>Mauris justo felis, iaculis quis sagittis</strong> sit
								amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum
								turpis egestas viverra. Quisque at libero purus.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutHero;
