import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Regions from "../components/Home/Regions";
import PropertySpecialties from "../components/Home/PropertySpecialties";
import BecomeHost from "../components/Home/BecomeHost";
import AboutUs from "../components/Home/AboutUs";
import ContactSection from "../components/Home/ContactSection";

function Home() {
	return (
		<main className="relative">
			<Hero />
			<FeaturedProperties />
			<Regions />
			<PropertySpecialties />
			<BecomeHost />
			<AboutUs />
			<ContactSection />
		</main>
	);
}

export default Home;
