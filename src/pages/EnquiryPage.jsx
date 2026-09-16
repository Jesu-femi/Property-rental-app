import { useSelector } from "react-redux";

import properties from "../Data/properties";

import EnquiryContact from "../components/enquiry/EnquiryContact";
import EnquiryHero from "../components/enquiry/EnquiryHero";
import FaqSection from "../components/enquiry/FaqSection";

import { selectEnquiryPropertyId } from "../redux/slices/enquirySlice";

function Enquiry() {
	// Pull just the propertyId out of Redux — this is the "read" half
	// of the handoff BookingCard set up with dispatch(setEnquiry(...)).
	const propertyId = useSelector(selectEnquiryPropertyId);

	// propertyId is null when someone lands here without coming from a
	// property (e.g. the navbar's plain "Enquiry" link). In that case
	// we skip the lookup entirely rather than searching for `null` in
	// the properties array.
	const property = propertyId
		? properties.find((item) => item.id === propertyId)
		: null;

	return (
		<main>
			<EnquiryHero />
			<FaqSection />
			<EnquiryContact property={property} />
		</main>
	);
}

export default Enquiry;
