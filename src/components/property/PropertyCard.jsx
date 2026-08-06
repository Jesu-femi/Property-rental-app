<PropertyCard property={property} />;

import React from "react";

import noImage from "../../assets/images/no-image.png";

const PropertyCard = ({
	property: {
		title,
		country,
		location,
		price,
		guests,
		bedrooms,
		bathrooms,
		size,
		image,
	},
}) => {
	return;
	<div className="relative">
		<div className="w-ful absolute top-0 left-0 flex justify-between items-center text-center ">
			<span>From {price}/Daily</span>
		</div>
		<img src={image ? `${image}` : `${noImage}`} alt={title} />
		<div className="mt-4">
			<div className="w-full flex gap-0.5 items-start ">
				<p>{country}</p>
				<span>•</span>
				<p>{location}</p>
			</div>
			<h3>{title}</h3>
			<div className="content">
				<p>{guests}guests</p>
				<p>{bedrooms}bedrooms</p>
				<p>{size}Size</p>
				<p>{bathrooms}bathrooms</p>
			</div>
		</div>
	</div>;
};

export default PropertyCard;
