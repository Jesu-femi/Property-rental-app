import EnquiryContact from "../components/enquiry/EnquiryContact";
import EnquiryHero from "../components/enquiry/EnquiryHero";
import FaqSection from "../components/enquiry/FaqSection";

function Enquiry() {
	return (
		<main>
			<EnquiryHero />
			<FaqSection />
			<EnquiryContact />
		</main>
	);
}

export default Enquiry;
