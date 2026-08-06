import { NavLink } from "react-router-dom";

function Navbar() {
	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Browse Properties", path: "/browse" },
		{ name: "Enquiry", path: "/enquiry" },
	];

	return (
		<nav className="sticky top-0 z-50 bg-black/60 shadow-md mx-auto flex w-full items-center justify-between px-6 py-4">
			{/* Logo */}
			<div>
				<h1 className="text-2xl font-bold text-white">LUXURY Rental</h1>
			</div>

			{/* Navigation Links */}
			<ul className="flex items-center gap-8">
				{navLinks.map((link) => (
					<li key={link.path}>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								isActive
									? "font-semibold text-blue-600"
									: "text-black-700 transition hover:text-blue-600"
							}>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
