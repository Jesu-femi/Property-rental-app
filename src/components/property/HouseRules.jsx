function HouseRules({ property }) {
	const rules = property.houseRules || [
		"No smoking",
		"No parties or events",
		"Pets allowed on request",
		"Check-in from 3:00 PM",
		"Check-out before 11:00 AM",
	];

	return (
		<section className="border-t border-gray-200 py-10">
			<h2 className="text-2xl font-semibold text-gray-900">House rules</h2>

			<div className="mt-6 grid gap-4 sm:grid-cols-2">
				{rules.map((rule) => (
					<div
						key={rule}
						className="flex items-center gap-3 text-sm text-gray-600">
						<span className="text-gray-900">•</span>
						{rule}
					</div>
				))}
			</div>
		</section>
	);
}

export default HouseRules;
