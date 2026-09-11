import ContactForm from "../common/ContactForm";

function EnquiryContact({ property = null }) {
	return (
		<section className="bg-[#dfe4e8] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24">
			<div className="mx-auto w-full max-w-5xl">
				<ContactForm className="w-full" property={property} />
			</div>
		</section>
	);
}

export default EnquiryContact;