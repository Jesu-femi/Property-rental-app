function LoadMore({ onLoadMore, hasMore }) {
	if (!hasMore) return null;

	return (
		<div className="mt-12 flex justify-center">
			<button
				type="button"
				onClick={onLoadMore}
				className="rounded-md border border-[#606b75] px-8 py-3 text-xs font-medium uppercase tracking-wide text-[#606b75] transition hover:bg-[#606b75] hover:text-white">
				Load more
			</button>
		</div>
	);
}

export default LoadMore;
