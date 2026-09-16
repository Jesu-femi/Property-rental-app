import { Outlet } from "react-router-dom";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	);
}

export default Layout;
