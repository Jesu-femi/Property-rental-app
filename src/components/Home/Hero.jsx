import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";

import heroImage from "../../assets/images/hero.jpg";

function Hero() {
	return (
		<section
			className="relative flex min-h-screen items-center justify-center bg-cover bg-center mt-0"
			style={{ backgroundImage: `url(${heroImage})` }}>
			{/* Dark overlay */}

			<div className="absolute inset-0 bg-black/35"></div>

			{/* Content Container */}

			<div className="relative z-10 w-full max-w-7xl px-6">
				<HeroContent />

				<HeroSearch />
			</div>
		</section>
	);
}

export default Hero;
