// src/components/home/Hero.jsx

// Import the child components that will live inside the hero.
import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";

// Import your hero image.
// Replace this path with the actual image you save in src/assets/images/
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
	return (
		

		<section
			className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
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