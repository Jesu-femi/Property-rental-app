import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}

export default Home;