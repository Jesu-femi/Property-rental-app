function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
				{/* Brand */}
				<div>
					<h2 className="text-xl font-bold">Property Rental</h2>
					<p className="mt-2 text-sm text-gray-400">
						Find your next dream home with ease.
					</p>
				</div>

				{/* Copyright */}
				<div className="text-sm text-gray-400">
					© {new Date().getFullYear()} Property Rental Platform. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
