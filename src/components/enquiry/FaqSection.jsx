import { useState } from "react";

function FaqSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "How do I make a reservation?",
			answer:
				"Browse our available properties, select the property you are interested in, and submit an enquiry through the contact form. Our team will get back to you with the next steps.",
		},
		{
			question: "What is included in the rental?",
			answer:
				"Each property has its own amenities and inclusions. You can find the relevant details on the property's information page or contact us for more information.",
		},
		{
			question: "What are the check-in and check-out times?",
			answer:
				"Check-in and check-out times may vary depending on the property. The exact times will be confirmed with you before your stay.",
		},
		{
			question: "Can I cancel or change my reservation?",
			answer:
				"Cancellation and change policies depend on the property and booking conditions. Please contact us as soon as possible if you need to make a change.",
		},
		{
			question: "Are pets allowed in the properties?",
			answer:
				"Pet policies vary between properties. Please check the property's details or contact us before making your reservation.",
		},
		{
			question: "How can I contact you during my stay?",
			answer:
				"You can contact our team using the contact details provided on this website. We will provide any additional contact information you need before your stay.",
		},
	];

	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24">
			<div className="mx-auto max-w-5xl">
				{/* SECTION HEADER */}

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-serif text-3xl font-semibold tracking-tight text-[#171d24] sm:text-4xl md:text-5xl">
						Frequently asked questions
					</h2>

					<p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
						Everything you need to know about our properties and rental process.
					</p>
				</div>

				{/* FAQ LIST */}

				<div className="mt-12 grid grid-cols-1 gap-x-10 md:grid-cols-2">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;

						return (
							<div key={faq.question} className="border-b border-gray-300 py-5">
								<button
									type="button"
									onClick={() => toggleFaq(index)}
									aria-expanded={isOpen}
									className="flex w-full items-center justify-between gap-5 text-left">
									<span className="text-sm font-medium text-gray-800">
										{faq.question}
									</span>

									<span
										className={`shrink-0 text-xl font-light text-gray-500 transition-transform duration-200 ${
											isOpen ? "rotate-45" : ""
										}`}>
										+
									</span>
								</button>

								{isOpen && (
									<div className="pt-4 pr-8 text-sm leading-6 text-gray-500">
										<p>{faq.answer}</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
export default FaqSection;
