import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";

function ContactInfo() {
	// const socialLinks = {
	// 	facebook: "https://facebook.com/your-page",
	// 	youtube: "https://youtube.com/@your-channel",
	// 	whatsapp: "https://wa.me/00000000000",
	// };

	return (
		<div className="relative w-full min-h-68.75 rounded-t-[35px] bg-[#171d24] px-7 py-8 text-white sm:px-9 sm:py-9 md:min-h-68.75 md:w-[50%] md:rounded-br-sm md:px-8 lg:w-72 lg:px-11">
			<h2 className="font-serif text-3xl text-[#f3eadf]">Let’s connect</h2>

			<div className="mt-5 space-y-3 text-xs">
				<div className="flex gap-5">
					<span className="min-w-11.25 font-serif">Phone</span>

					<span className="text-gray-300">+385 91 322 8444</span>
				</div>

				<div className="flex gap-5">
					<span className="min-w-11.25 font-serif">Email</span>

					<span className="text-gray-300">prospect@prospekt.hr</span>
				</div>

				<div className="flex gap-4 sm:gap-4">
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

			<div className="absolute bottom-8 left-11 flex gap-4 text-white">
				<a
					href={socialLinks.facebook}
					aria-label="Facebook"
					className="transition hover:text-gray-900">
					<FaFacebookF size={14} />
				</a>
				<a
					href={socialLinks.youtube}
					aria-label="YouTube"
					className="transition hover:text-gray-900">
					<FaYoutube size={14} />
				</a>
				<a
					href={socialLinks.WhatsApp}
					aria-label="WhatsApp"
					className="transition hover:text-gray-900">
					<FaWhatsapp size={14} />
				</a>
			</div>
		</div>
	);
}

export default ContactInfo;
