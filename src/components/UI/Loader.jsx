// src/components/ui/Loader.jsx
//
// Shared loading indicator. fullScreen=true is used once, at the App
// level, while property data is being fetched for the first time —
// inline (fullScreen=false) is available for later if any individual
// page ever needs a smaller, in-place spinner instead of taking over
// the whole viewport.
function Loader({ fullScreen = false, label = "Loading..." }) {
	return (
		<div
			className={
				fullScreen
					? "flex min-h-screen w-full flex-col items-center justify-center bg-[#f8f7f4]"
					: "flex w-full flex-col items-center justify-center py-16"
			}>
			{/* A plain CSS spinner: a circle with a mostly-transparent
			    border and one solid-colored edge, spun with Tailwind's
			    animate-spin. No extra dependency needed for something
			    this simple. */}
			<div className="h-10 w-10 animate-spin rounded-full border-2 border-[#606b75]/20 border-t-[#606b75]" />

			{label && (
				<p className="mt-4 font-serif text-sm text-gray-500">{label}</p>
			)}
		</div>
	);
}

export default Loader;
