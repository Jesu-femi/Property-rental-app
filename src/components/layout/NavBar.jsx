import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	// MOBILE MENU STATE

	// Keeps track of whether the mobile navigation menu is open.
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// NAVBAR VISIBILITY STATE

	// true  = navbar is visible
	// false = navbar slides upward and hides
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);

	// Keeps track of the previous scroll position.
	const [lastScrollY, setLastScrollY] = useState(0);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Browse Properties", path: "/browse" },
		{ name: "Enquiry", path: "/enquiry" },
	];

	// ===  NAVBAR SCROLL BEHAVIOR ===

	useEffect(() => {
		// Timer used to hide the navbar after a period of inactivity.
		let hideTimer;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// WHEN USER IS AT THE VERY TOP

			// Always keep the navbar visible at the top of the page.
			if (currentScrollY <= 10) {
				setIsNavbarVisible(true);
				setLastScrollY(currentScrollY);

				// Clear any existing timer.
				clearTimeout(hideTimer);

				return;
			}

			// USER SCROLLING DOWN

			// If the current position is greater than the previous
			// position, the user is moving down the page.
			if (currentScrollY > lastScrollY) {
				setIsNavbarVisible(false);
			}

			// USER SCROLLING UP

			// If the current position is smaller than the previous
			// position, the user is moving back up.
			else if (currentScrollY < lastScrollY) {
				setIsNavbarVisible(true);
			}

			// UPDATE THE PREVIOUS SCROLL POSITION

			setLastScrollY(currentScrollY);

			// HIDE AFTER SCROLLING STOPS

			// If the user stops scrolling for 2.5 seconds,
			// hide the navbar.
			clearTimeout(hideTimer);

			hideTimer = setTimeout(() => {
				setIsNavbarVisible(false);
			}, 2500);
		};

		// Listen for page scrolling.
		window.addEventListener("scroll", handleScroll);

		// Clean up when the Navbar component is removed.
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(hideTimer);
		};
	}, [lastScrollY]);

	return (
		<nav
			className={` fixed top-0 left-0 z-50 w-full bg-[#173654]/60 backdrop-blur-[2px] transition-transform duration-500 ease-in-out ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}
			`}>
			{/* 
				This container controls the spacing inside
				the navbar.
			*/}
			<div className="flex items-center justify-between px-5 py-5 md:px-8">
				{/* ======= LOGO ======= */}

				<NavLink
					to="/"
					onClick={() => setIsMenuOpen(false)}
					className="text-sm font-medium uppercase tracking-[0.35em] text-white md:text-base">
					LUXURY RENTALS
				</NavLink>

				{/* ======= DESKTOP NAVIGATION ======= */}

				<ul className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<li key={link.path}>
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									`text-xs uppercase tracking-wide transition duration-300
									${isActive ? "text-white" : "text-white/70 hover:text-white"}`
								}>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>

				{/* ======= MOBILE HAMBURGER BUTTON ======= */}

				<button
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle navigation menu"
					aria-expanded={isMenuOpen}
					className="text-2xl text-white md:hidden">
					{isMenuOpen ? "✕" : "☰"}
				</button>
			</div>

			{/* ======= MOBILE NAVIGATION MENU ======= */}

			{isMenuOpen && (
				<div
					className="border-t border-white/20
					bg-black/80 px-5 py-6 backdrop-blur-md md:hidden">
					<ul className="flex flex-col gap-5">
						{navLinks.map((link) => (
							<li key={link.path}>
								<NavLink
									to={link.path}
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										`block text-sm uppercase tracking-widest transition
										${isActive ? "text-white" : "text-white/70 hover:text-white"}`
									}>
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
