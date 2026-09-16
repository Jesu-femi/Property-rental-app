import contactBg from "../../assets/images/contact-bg.jpg";
import ContactForm from "../common/ContactForm";
import ContactInfo from "../common/ContactInfo";

function BrowseContactSection() {
	return (
		<section className="bg-[#dfe4e8]">
			<div className="relative h-105 sm:h-115 lg:h-105">
				{/* BACKGROUND IMAGE */}

				<img
					src={contactBg}
					alt="Woman relaxing beside a swimming pool"
					className="h-full w-full object-cover object-center"
				/>

				{/* CONTACT CARDS */}

				<div className="absolute bottom-0 left-1/2 z-10 w-[calc(100%-40px)] -translate-x-1/2 translate-y-1/2">
					<div className="mx-auto flex w-full max-w-183.75 flex-col md:flex-row">
						<ContactInfo />
						<ContactForm />
					</div>
				</div>
			</div>

			{/* SPACE FOR FLOATING CONTACT CARDS */}

			{/* <div className="h-72 sm:h-76 lg:h-44" /> */}
			<div className="h-80 sm:h-30 lg:h-47.5" />
		</section>
	);
}

export default BrowseContactSection;
