import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";

import heroImage from "../../assets/images/hero.jpg";

function Hero() {
	return (
		<section
			className=" relative min-h-162.5 overflow-hidden rounded-br-[80px] bg-cover bg-center md:min-h-screen md:rounded-br-[100px]"
			style={{ backgroundImage: `url(${heroImage})` }}>
			{/* Dark overlay */}

			<div className="absolute inset-0 bg-black/25"></div>

			{/* Content Container */}

			<div className=" relative z-10 flex min-h-162.5 flex-col items-center justify-center px-4 md:min-h-screen md:px-8">
				<HeroContent />

				<HeroSearch />
			</div>
		</section>
	);
}

export default Hero;
