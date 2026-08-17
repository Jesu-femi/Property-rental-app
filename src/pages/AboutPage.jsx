// import AboutHero from "../components/About/AboutHero";
// import AboutUs from "../components/Home/AboutUs";
// import ContactInfo from "../components/common/ContactInfo";
// import ContactForm from "../components/common/ContactForm";

// function AboutPage() {
// 	return (
// 		<main>
// 			<AboutHero />

// 			<AboutUs />

// 			<section className="relative bg-[#dfe4e8] px-5 pt-0 sm:px-8 md:px-10 md:pt-15 lg:px-16">
// 				<div className="relative z-20 mx-auto max-w-5xl -translate-y-20">
// 					<div className="mx-auto flex w-full max-w-183.75 flex-col md:flex-row">
// 						<ContactInfo />
// 						<ContactForm />
// 					</div>
// 				</div>

// 				{/* Space reserved for the floating cards */}
// 				{/* <div className="h-10 sm:h-24 md:h-18 lg:h-32" /> */}
// 			</section>
// 		</main>
// 	);
// }

// export default AboutPage;

import AboutHero from "../components/About/AboutHero";
import AboutUs from "../components/Home/AboutUs";
import ContactInfo from "../components/common/ContactInfo";
import ContactForm from "../components/common/ContactForm";

function AboutPage() {
	return (
		<main>
			<AboutHero />

			<AboutUs />

			<section className="relative bg-[#dfe4e8] px-5 pb-32 pt-0 sm:px-8 sm:pb-36 md:px-10 md:pb-40 lg:px-16 lg:pb-44">
				<div className="relative z-20 mx-auto max-w-5xl -translate-y-10 sm:-translate-y-14 md:-translate-y-16 lg:-translate-y-20">
					<div className="mx-auto flex w-full max-w-183.75 flex-col md:flex-row">
						<ContactInfo />
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	);
}

export default AboutPage;