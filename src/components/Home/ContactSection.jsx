// src/components/home/ContactSection.jsx

import contactBg from "../../assets/images/contact-bg.jpg";

import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
	return (
		<section className="bg-[#dfe4e8]">
			{/* BACKGROUND IMAGE AREA 
          The image is deliberately separate from the
          contact cards and footer. */}

			<div className=" relative h-115 sm:h-125 lg:h-115">
				{/* BACKGROUND IMAGE */}

				<img
					src={contactBg}
					alt="Woman relaxing beside a swimming pool"
					className=" h-full w-full object-cover object-center"
				/>

				{/* CONTACT CARDS 
            They sit near the bottom of the image and overlap
            the transition into the section underneath. */}

				<div className=" absolute bottom-0 left-1/2 z-10 flex w-[calc(100%-40px)] max-w-183.75 -translate-x-1/2 translate-y-1/2 flex-col md:flex-row">
					{/* === LET'S CONNECT CARD === */}

					<div className=" w-full min-h-68.75 rounded-t-[35px] bg-[#171d24] px-7 py-8 text-white sm:px-9 sm:py-9 md:h-68.75 md:min-h-0 md:w-[38%] md:rounded-br-sm md:px-8 lg:w-67.5 lg:px-11">
						<h2 className=" font-serif text-3xl text-[#f3eadf]">
							Let’s connect
						</h2>

						<div className="mt-6 space-y-4 text-xs">
							<div className="flex gap-5">
								<span className="min-w-11.25 font-serif">Phone</span>

								<span className="text-gray-300">+385 91 322 8444</span>
							</div>

							<div className="flex gap-5">
								<span className="min-w-11.25 font-serif">Email</span>

								<span className="text-gray-300">prospect@prospekt.hr</span>
							</div>

							<div className="flex gap-5">
								<span className="min-w-11.25 font-serif">Address</span>

								<span className="text-gray-300">
									Prospekt Ltd
									<br />
									Drazice 138, 51 000 Rijeka
									<br />
									Croatia
								</span>
							</div>
						</div>

						{/* SOCIAL ICONS */}

						<div className="mt-7 flex gap-4 text-white">
							<FaFacebookF size={14} />

							<FaYoutube size={14} />

							<FaWhatsapp size={14} />
						</div>
					</div>

					{/* === CONTACT FORM CARD === */}

					<div className=" w-full min-h-68.75 rounded-br-[40px] bg-white px-7 py-8 sm:px-10 sm:py-9 md:h-68.75 md:min-h-0 md:w-[62%] md:rounded-br-[60px] md:px-8 lg:w-116.25 lg:px-11">
						<h2 className=" font-serif text-3xl leading-tight text-gray-900">
							We’d love to hear from you
						</h2>

						{/* FORM */}

						<form className="mt-6">
							{/* NAME + EMAIL */}

							<div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
								<input
									type="text"
									placeholder="Your Name"
									className=" w-full border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
								/>

								<input
									type="email"
									placeholder="Email"
									className=" w-full border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
								/>
							</div>

							{/* MESSAGE */}

							<textarea
								rows="2"
								placeholder="Message"
								className=" mt-5 w-full resize-none border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
							/>

							{/* TERMS */}

							<label className=" mt-3 flex items-center gap-2 text-[10px] text-gray-600">
								<input type="checkbox" className="h-3 w-3" />I accept the Terms
								and conditions
							</label>

							{/* SEND */}

							<button
								type="submit"
								className=" mt-4 rounded-md bg-[#606b75] px-7 py-2.5 text-[10px] font-medium text-white transition hover:bg-[#4f5962]">
								SEND
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* SPACE FOR THE OVERLAPPING CARDS 
          Because the cards extend below the image, we need
          to reserve that space before the footer begins. */}

			<div className=" h-80 sm:h-82.5 lg:h-47.5" />
		</section>
	);
}

export default ContactSection;
