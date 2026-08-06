import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}

export default Home;