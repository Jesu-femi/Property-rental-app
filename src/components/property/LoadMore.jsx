function LoadMore({ onLoadMore, hasMore }) {
	if (!hasMore) return null;

	return (
		<div className="mt-14 flex justify-center sm:mt-16 lg:mt-20">
			<button
				type="button"
				onClick={onLoadMore}
				className="min-w-36 rounded-md border border-[#606b75] px-8 py-3 text-xs font-medium uppercase tracking-[0.08em] text-[#606b75] transition duration-200 hover:bg-[#606b75] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#606b75]/30 focus:ring-offset-2">
				Load more
			</button>
		</div>
	);
}

export default LoadMore;
