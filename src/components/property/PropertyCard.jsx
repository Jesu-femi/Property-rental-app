// src/components/property/PropertyCard.jsx
function PropertyCard({ property }) {
	return (
		<article className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
			{/* ==== PROPERTY IMAGE ==== */}

			<div className="relative h-64 w-full overflow-hidden">
				<img
					src={`/images/${property.image}`}
					alt={property.title}
					className="h-full w-full object-cover"
				/>

				{/* Price */}

				<div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2 shadow-md">
					<p className="text-sm font-semibold text-gray-800">
						€{property.price}
						<span className="ml-1 text-xs font-normal text-gray-500">
							/night
						</span>
					</p>
				</div>

				{/* Favourite */}

				<button
					type="button"
					aria-label={`Add ${property.title} to favourites`}
					className=" absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:scale-110">
					♡
				</button>
			</div>

			{/* ==== PROPERTY INFORMATION ==== */}

			<div className="p-5">
				{/* Country */}

				<p className="text-sm text-gray-500">{property.country}</p>

				{/* Location */}

				<p className="mt-1 text-sm text-gray-400">{property.location}</p>

				{/* Title */}

				<h3 className="mt-2 text-xl font-semibold text-gray-900">
					{property.title}
				</h3>

				{/* ==== PROPERTY FEATURES ==== */}

				<div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
					<span>{property.guests} Guests</span>

					<span>{property.bedrooms} Bedrooms</span>

					<span>{property.bathrooms} Bathrooms</span>

					<span>{property.size} m²</span>
				</div>
			</div>
		</article>
	);
}

export default PropertyCard;

{
	/* <PropertyCard property={property} />; */
}

// npm i lucide-react
// import { useState } from "react";

// import noImage from "../../assets/images/no-image.png";

// const PropertyCard = ({
// 	property: {
// 		title,
// 		country,
// 		location,
// 		price,
// 		guests,
// 		bedrooms,
// 		bathrooms,
// 		size,
// 		image,
// 	},
// }) => {
// 	const [isFav, setIsFav] = useState(false);

// 	return;
// 	<div className="w-full max-w-sm rounded-bl-[15px] rounded-tr-[15px] overflow-hidden shadow-lg bg-white">
// 		<div className="relative">
// 			<img src={image} alt={title} className="w-full h-52 object-cover" />
// 			<div className=" absolute top-0 left-0 w-full p-3 flex justify-between items-center bg-linesr-to-b from-black/40 to-transparent">
// 				<div className=" w-[10%] rounded-bl-[20px]">
// 					<p>from</p>
// 					<p className="text-white text-sm font-semibold">
// 						₩{price.toLowerString()}
// 					</p>
// 				</div>
// 				<button
// 					onClick={() => isFav(!isFav)}
// 					className=" p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition">
// 					<heart
// 						className={isFav ? "fill-red-500 text-red-500" : "text-white"}
// 					/>
// 				</button>
// 			</div>
// 		</div>

// 		<div className=" p-4">
// 			<p className=" text-gray-500 text-xs mb-2">
// 				{location}.{country}
// 			</p>
// 			<p className=" text-black text-3xl truncate">{title}</p>
// 			<div className="grid grid-cols-2 grid-rows-2 gap-2 text-center">
// 				<div>
// 					{/* try adding the text in front of the bedroom */}
// 					<p className=" text-sm font-bold text-gray-800">{bedrooms}</p>
// 					<p className=" font-xs text-gray-500">beds</p>
// 				</div>
// 				<div>
// 					{/* try adding the text in front of the bedroom */}
// 					<p className=" text-sm font-bold text-gray-800">{guests}</p>
// 					<p className=" font-xs text-gray-500">guests</p>
// 				</div>
// 				<div>
// 					{/* try adding the text in front of the bedroom */}
// 					<p className=" text-sm font-bold text-gray-800">{bathrooms}</p>
// 					<p className=" font-xs text-gray-500">bathrooms</p>
// 				</div>
// 				<div>
// 					{/* try adding the text in front of the bedroom */}
// 					<p className=" text-sm font-bold text-gray-800">{size}</p>
// 					<p className=" font-xs text-gray-500">size</p>
// 				</div>
// 			</div>
// 		</div>
// 	</div>;
// };

// export default PropertyCard;
