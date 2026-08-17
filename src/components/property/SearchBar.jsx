function SearchBar({ searchTerm, onSearchChange }) {
	return (
		<div className="mx-auto mt-10 max-w-4xl">
			<div className="flex items-center rounded-lg bg-white px-4 py-3 shadow-sm">
				<span className="mr-3 text-gray-400">⌕</span>

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
