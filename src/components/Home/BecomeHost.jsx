// src/components/home/BecomeHost.jsx
import becomeHostImage from "../../assets/images/become-host.jpg";

function BecomeHost() {
	return (
		<section className=" relative min-h-135 overflow-hidden rounded-br-[70px] sm:min-h-145 lg:min-h-125 lg:rounded-br-[100px] ">
			{/* === BACKGROUND IMAGE === */}

			<img
				src={becomeHostImage}
				alt="Luxury villa suitable for hosting"
				className=" absolute inset-0 h-full w-full object-cover "
			/>

			{/* === DARK OVERLAY 
          This makes the background slightly darker and helps
          the white content card stand out.
      === */}

			<div className=" absolute inset-0 bg-black/20 " />

			{/* === CONTENT CONTAINER === */}

			<div className=" relative z-10 flex min-h-135 items-center justify-center px-5 sm:min-h-145 sm:px-8 lg:min-h-125 ">
				{/*=== WHITE / TRANSPARENT CONTENT CARD === */}

				<div className=" w-full max-w-95 rounded-[28px] bg-white/85 px-6 py-12 text-center backdrop-blur-[2px] sm:max-w-107.5 sm:px-10 sm:py-14 lg:max-w-100 lg:px-10 lg:py-12 ">
					{/* === SMALL LABEL === */}

					<p className=" text-xs font-semibold tracking-[0.18em] text-gray-500 ">
						BECOME A HOST
					</p>

					{/* === MAIN HEADING === */}

					<h2 className=" mt-2 font-serif text-4xl leading-tight text-gray-900 sm:text-5xl lg:text-4xl ">
						Become a host
					</h2>

					{/* === DESCRIPTION === */}

					<p className=" mx-auto mt-7 max-w-82.5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:text-sm lg:leading-6 ">
						Join the elite league of hosts specializing in luxury villas and
						unlock a world of exclusive opportunities.
					</p>

					{/* === CALL-TO-ACTION BUTTON === */}

					<button
						type="button"
						className=" mt-7 w-full rounded-lg bg-[#606b75] px-6 py-3.5 text-sm font-medium text-white transition duration-200 hover:bg-[#4f5962] active:scale-[0.98] sm:py-4 ">
						JOIN TODAY
					</button>
				</div>
			</div>
		</section>
	);
}

export default BecomeHost;
