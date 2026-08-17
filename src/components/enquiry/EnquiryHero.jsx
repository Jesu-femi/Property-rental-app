import herobg from "../../assets/images/About bg.jpg";
import EnquiryImg from "../../assets/images/Enquiryy img 1.jpg";

import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";

function EnquiryHero() {
	return (
		<section className="relative overflow-hidden bg-[#e8e5df] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 md:px-10 lg:px-16 lg:pb-28 lg:pt-28">
			{/* Background blur / atmosphere */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-0 h-80 w-full -translate-x-1/2 bg-linear-to-b from-[#b8c8d0]/50 via-[#d8d4ce]/30 to-transparent blur-3xl" />
			</div>

			{/* Main content */}
			<div className="relative mx-auto max-w-6xl">
				{/* ===== PAGE INTRO ===== */}

				<div className="mx-auto max-w-2xl text-center">
					<h1 className="font-serif text-4xl font-semibold tracking-tight text-[#171d24] sm:text-5xl md:text-6xl">
						Contact Us
					</h1>

					<p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
						We're always here to answer your questions. Reach out and we'll get
						back to you as soon as possible.
					</p>
				</div>

				{/* ===== IMAGE + CONTACT DETAILS ===== */}

				<div className="mx-auto mt-12 flex max-w-5xl flex-col overflow-hidden rounded-b-[45px] bg-white sm:mt-16 md:flex-row md:rounded-br-[55px]">
					{/* IMAGE */}

					<div className="h-64 w-full sm:h-80 md:h-auto md:w-[58%]">
						<img
							src= {EnquiryImg}
							alt="Luxury rental surroundings"
							className="h-full w-full object-cover"
						/>
					</div>

					{/* CONTACT INFORMATION */}

					<div className="flex w-full flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 md:w-[42%] md:px-9 lg:px-10">
						<h2 className="font-serif text-3xl font-semibold leading-tight text-[#171d24] sm:text-4xl">
							Connect
							<br className="sm:hidden" /> with us
						</h2>

						<div className="mt-7 space-y-4 text-xs text-gray-700 sm:text-sm">
							<div className="flex gap-5">
								<span className="min-w-10 font-serif text-gray-900">Phone</span>

								<span>+00 000 00 00</span>
							</div>

							<div className="flex gap-5">
								<span className="min-w-10 font-serif text-gray-900">Email</span>

								<span>info@luxuryrentals.com</span>
							</div>

							<div className="flex gap-5">
								<span className="min-w-10 font-serif text-gray-900">
									Address
								</span>

								<span>
									Name of the street
									<br />
									10 000 City of Somewhere
								</span>
							</div>
						</div>

						<button
							type="button"
							className="mt-4 w-fit text-xs text-gray-400 transition hover:text-gray-700">
							Open in Google maps
						</button>

						{/* SOCIAL ICONS */}

						<div className="mt-8 flex items-center gap-4 text-gray-700">
							<a
								href={socialLinks.facebook}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								className="transition hover:text-gray-400">
								<FaFacebookF size={14} />
							</a>

							<a
								href={socialLinks.youtube}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="transition hover:text-gray-400">
								<FaYoutube size={14} />
							</a>

							<a
								href={socialLinks.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="transition hover:text-gray-400">
								<FaWhatsapp size={14} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default EnquiryHero;
