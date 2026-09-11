function SearchBar({ searchTerm, onSearchChange }) {
	return (
		<div className="mx-auto mt-10 w-full max-w-3xl sm:mt-12 md:mt-14">
			<div className="flex h-12 items-center rounded-lg bg-white px-4 shadow-lg sm:h-14 sm:px-5">
				{/* SEARCH ICON */}

				<span className="mr-3 text-base text-gray-400 sm:text-lg">
					⌕
				</span>

				{/* SEARCH INPUT */}

				<input
					type="text"
					value={searchTerm}
					onChange={(event) => onSearchChange(event.target.value)}
					placeholder="Where to?"
					className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
				/>
			</div>
		</div>
	);
}

export default SearchBar;