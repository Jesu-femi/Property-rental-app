import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import HostApply from "./pages/HostApply";

import Loader from "./components/UI/Loader";
import {
	fetchProperties,
	selectPropertiesStatus,
	selectPropertiesError,
} from "./redux/slices/propertiesSlice";

function App() {
	const dispatch = useDispatch();
	const status = useSelector(selectPropertiesStatus);
	const error = useSelector(selectPropertiesError);

	// Fetch the property list exactly once, the moment the app boots —
	// here in App, not in any individual page, because App is the one
	// component guaranteed to mount exactly once for the whole session,
	// no matter which route the user lands on first. The empty
	// dependency array means this effect runs on mount only.
	useEffect(() => {
		dispatch(fetchProperties());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Every page in this app depends on property data existing — there's
	// no page worth showing before it's ready — so we gate the ENTIRE
	// router behind one loading screen rather than adding loading logic
	// to each page individually.
	if (status === "idle" || status === "loading") {
		return <Loader fullScreen label="Loading properties..." />;
	}

	// A genuine fetch failure (MockAPI down, network issue) gets its own
	// plain error screen, rather than silently rendering pages that
	// would all break trying to read an empty properties array.
	if (status === "failed") {
		return (
			<div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#f8f7f4] px-5 text-center">
				<h1 className="font-serif text-3xl text-[#171d24]">
					Something went wrong
				</h1>
				<p className="mt-3 max-w-md text-sm text-gray-600">
					We couldn't load property data right now
					{error ? `: ${error}` : "."} Please try refreshing the page.
				</p>
			</div>
		);
	}

	// status === "succeeded" — properties are loaded, render the app.
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
					<Route path="/host/apply" element={<HostApply />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
