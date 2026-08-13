import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Regions from "../components/Home/Regions";
import PropertySpecialties from "../components/Home/PropertySpecialties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeaturedProperties />
      <Regions />
      <PropertySpecialties />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}

export default Home;