import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import BrowseProperties from "./pages/BrowseProperties";
import PropertyDetails from "./pages/PropertyDetails";
import Enquiry from "./pages/EnquiryPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Favourites from "./pages/Favourites";
import BecomeHost from "./pages/BecomeHost";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/browse" element={<BrowseProperties />} />
					<Route path="/property/:id" element={<PropertyDetails />} />
					<Route path="/enquiry" element={<Enquiry />} />
					<Route path="/favourites" element={<Favourites />} />
					<Route path="/host" element={<BecomeHost />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
