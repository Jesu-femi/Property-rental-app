// src/components/layout/Footer.jsx

import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaWhatsapp,
} from "react-icons/fa";

function Footer() {
	return (
		<footer
			className="
        bg-[#dfe4e8]
        px-5
        py-12

        sm:px-8
        sm:py-14

        lg:px-16
        lg:py-14
      ">
			{/* =====================================================
          MAIN FOOTER
      ====================================================== */}

			<div
				className="
          mx-auto
          max-w-5xl

          lg:grid
          lg:grid-cols-2
          lg:gap-20
        ">
				{/* ===================================================
            BRAND
        ==================================================== */}

				<div>
					<h2
						className="
              text-[13px]
              font-medium
              tracking-[0.25em]
              text-gray-800
            ">
						LUXURY RENTALS
					</h2>

					<p
						className="
              mt-4
              max-w-110
              text-[12px]
              leading-5
              text-gray-600
            ">
						We are a lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut
					</p>
				</div>

				{/* ===================================================
            CONNECT WITH US
        ==================================================== */}

				<div className="mt-9 lg:mt-0">
					<h3
						className="
              text-[13px]
              font-semibold
              text-gray-800
            ">
						Connect with us
					</h3>

					<p
						className="
              mt-4
              text-[12px]
              text-gray-600
            ">
						+00 000 00 00
					</p>

					<p
						className="
              mt-2
              text-[12px]
              text-gray-600
            ">
						info@luxuryrentals.com
					</p>

					{/* SOCIAL ICONS */}

					<div
						className="
              mt-4
              flex
              gap-4
              text-gray-600
            ">
						<FaFacebookF size={14} />

						<FaInstagram size={14} />

						<FaYoutube size={14} />

						<FaWhatsapp size={14} />
					</div>
				</div>
			</div>

			{/* =====================================================
          BOTTOM AREA
      ====================================================== */}

			<div
				className="
          mx-auto
          mt-10
          max-w-5xl
          border-t
          border-gray-300
          pt-5

          lg:mt-12
        ">
				{/* LINKS */}

				<div
					className="
            flex
            flex-wrap
            gap-x-8
            gap-y-3
            text-[11px]
            text-gray-600
          ">
					<a href="#" className="hover:text-gray-900">
						Terms & Conditions
					</a>

					<a href="#" className="hover:text-gray-900">
						Privacy Notice and Cookies
					</a>

					<a href="#" className="hover:text-gray-900">
						Imprint
					</a>
				</div>

				{/* COPYRIGHT */}

				<p
					className="
            h-65
    sm:h-67.5
    lg:h-65
          ">
					Luxury rentals. | © All rights reserved 2022–2023
				</p>
			</div>
		</footer>
	);
}

export default Footer;
