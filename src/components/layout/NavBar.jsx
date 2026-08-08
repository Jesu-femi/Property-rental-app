import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Browse Properties", path: "/browse" },
		{ name: "Enquiry", path: "/enquiry" },
	];

	return (
		<nav className="absolute top-0 left-0 z-50 w-full">
			{/* 
		This container controls the spacing inside
		the navbar.
	  */}

			<div className="flex items-center justify-between px-5 py-5 md:px-8">
				{/* ======= LOGO======= */}

				<NavLink
					to="/"
					onClick={() => setIsMenuOpen(false)}
					className=" text-sm font-medium uppercase tracking-[0.35em] text-white md:text-base">
					LUXURY RENTALS
				</NavLink>

				{/*  DESKTOP NAVIGATION*/}

				<ul className=" hidden items-center gap-8 md:flex ">
					{navLinks.map((link) => (
						<li key={link.path}>
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									` text-xs uppercase tracking-wide transition duration-300 
					${isActive ? "text-white" : "text-white/70 hover:text-white"}
				  `
								}>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>

				{/* MOBILE HAMBURGER BUTTON  */}

				<button
					type="button"
					// When clicked, change the menu state.
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle navigation menu"
					aria-expanded={isMenuOpen}
					className=" text-2xl text-white md:hidden ">
					{/* If the menu is open: show X If the menu is closed: show hamburger*/}
					{isMenuOpen ? "✕" : "☰"}
				</button>
			</div>

			{/* === MOBILE NAVIGATION MENU === */}

			{isMenuOpen && (
				<div
					className=" border-t border-white/20
			bg-black/80 px-5 py-6 backdrop-blur-md md:hidden ">
					<ul className="flex flex-col gap-5">
						{navLinks.map((link) => (
							<li key={link.path}>
								<NavLink
									to={link.path}
									// Close the menu after clicking a link.
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										` block text-sm uppercase tracking-widest transition ${isActive ? "text-white" : "text-white/70  :text-white"}`
									}>
									{" "}
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
