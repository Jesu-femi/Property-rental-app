import becomeHostImage from "../assets/images/become-host.jpg";
import { Link } from "react-router-dom";

function BecomeHost() {
	return (
		<main className="bg-[#f8f7f4]">
			{/* HERO */}
			<section className="relative min-h-[70vh] overflow-hidden">
				<img
					src={becomeHostImage}
					alt="Luxury villa"
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<div className="absolute inset-0 bg-black/35" />

				<div className="relative z-10 flex min-h-[70vh] items-center justify-center px-5 py-24 text-center text-white sm:px-8">
					<div className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
							Become a host
						</p>

						<h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
							Share your villa.
							<br />
							Create exceptional stays.
						</h1>

						<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
							Join our community of luxury property hosts and connect your villa
							with guests looking for unforgettable places to stay.
						</p>

						<Link
							to="/host/apply"
							className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
							Start hosting
						</Link>
					</div>
				</div>
			</section>

			{/* WHY HOST */}
			<section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
				<div className="mx-auto max-w-6xl">
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#606b75]">
							Why host with us
						</p>

						<h2 className="mt-3 font-serif text-4xl text-[#171d24] sm:text-5xl">
							Designed for exceptional properties
						</h2>

						<p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
							We help property owners showcase their spaces to guests who value
							quality, comfort and memorable experiences.
						</p>
					</div>

					<div className="mt-12 grid gap-5 md:grid-cols-3">
						<div className="rounded-2xl bg-white p-7 shadow-sm">
							<h3 className="font-serif text-2xl text-gray-900">
								Reach more guests
							</h3>

							<p className="mt-3 text-sm leading-6 text-gray-600">
								Showcase your property to travellers searching for beautiful and
								unique places to stay.
							</p>
						</div>

						<div className="rounded-2xl bg-white p-7 shadow-sm">
							<h3 className="font-serif text-2xl text-gray-900">
								Showcase your property
							</h3>

							<p className="mt-3 text-sm leading-6 text-gray-600">
								Present your villa with detailed information, beautiful images
								and the features guests care about.
							</p>
						</div>

						<div className="rounded-2xl bg-white p-7 shadow-sm">
							<h3 className="font-serif text-2xl text-gray-900">
								Grow your bookings
							</h3>

							<p className="mt-3 text-sm leading-6 text-gray-600">
								Connect with guests and turn your property into an attractive
								rental opportunity.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-[#dfe4e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="font-serif text-4xl text-[#171d24] sm:text-5xl">
						Ready to become a host?
					</h2>

					<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
						Take the first step towards sharing your property with our
						community.
					</p>

					<Link
						to="/host/apply"
						className="mt-7 inline-block rounded-lg bg-[#606b75] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4f5962]">
						Join today
					</Link>
				</div>
			</section>
		</main>
	);
}

export default BecomeHost;
