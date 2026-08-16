branch // src/components/home/AboutUs.jsx

import aboutImage from "../../assets/images/about-us-1.jpg";
import poolImage from "../../assets/images/about-us-2.jpg";

function AboutUs() {
	return (
		<section className=" bg-[#f8f7f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">
			{/* MAIN CONTAINER 
          This keeps the content from becoming too wide on
          very large desktop screens.*/}

			<div className=" mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:gap-16 ">
				{/*=== TITLE === */}

				<h2 className=" order-1 font-serif text-4xl leading-tight text-gray-900 sm:text-5xl lg:col-start-1 lg:row-start-1 lg:text-5xl">
					About Us
				</h2>

				{/* === IMAGE COLLAGE === */}

				<div className=" order-2 relative mt-8 h-100 sm:h-125 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:h-125">
					{/* TOP / LEFT IMAGE */}

					<img
						src={aboutImage}
						alt="Guests enjoying a luxury rental"
						className=" absolute left-0 top-0 h-47.5 w-[58%] rounded-sm object-cover sm:h-65 lg:h-80 lg:w-[58%]"
					/>

					{/* BOTTOM / RIGHT IMAGE */}

					<img
						src={poolImage}
						alt="Guest relaxing beside a luxury pool"
						className=" absolute bottom-0 right-0 h-69 w-[78%] rounded-tl-[40px] rounded-br-sm object-cover sm:h-80 lg:h-103.75 lg:w-[72%]"
					/>
				</div>

				{/* === DESCRIPTION === */}

				<div className=" order-3 mt-8 space-y-4 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:col-start-1 lg:row-start-2 lg:mt-6 lg:max-w-117.5 lg:text-sm lg:leading-6">
					<p>
						Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
						Morbi nec tempus dui, sit amet facilisis nisl.
					</p>

					<p>
						Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris
						eleifend, id tempor purus ultricies.
					</p>

					<p>
						Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
						venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
						feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna.
						Praesent congue nibh in dolor rutrum, et euismod quam elementum.
					</p>

					<p>
						<strong>Mauris justo felis, iaculis quis sagittis</strong> sit amet,
						feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis
						egestas viverra. Quisque at libero purus.
					</p>
				</div>

				{/*=== BOTTOM MESSAGE === */}

				<div className=" order-4 mt-6 rounded-sm bg-[#e1e5e9] px-5 py-3 text-center sm:py-4 lg:col-start-1 lg:row-start-3 lg:mt-10 lg:max-w-117.5">
					<p className=" font-serif text-base text-gray-800 sm:text-lg">
						We strive to offer you best possible homes to stay.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
