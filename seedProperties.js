// seedProperties.js
//
// ONE-TIME SCRIPT — run this once with `node seedProperties.js` to push
// your real property data into MockAPI. This is NOT part of the React
// app; it's a standalone Node script that talks to the MockAPI REST
// endpoint directly, the same way any external client would.
//
// Requires Node 18+ (for the built-in global fetch — no extra
// packages needed). Check with `node --version` if unsure.

const MOCKAPI_URL = "https://6aa16b712703577aa1e3a9b0.mockapi.io/Properties";

// Real, Cloudinary-hosted image URLs — replacing the local Vite
// imports (villaMakarska, villaMexico, etc.) that only exist inside
// the React app's build. This script runs outside that build, so it
// needs plain string URLs it can send as JSON.
const imageUrls = {
	villaMakarska:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051593/Villa_Makarska.jpg",
	villaMexico:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051595/Villa_Mexico.png",
	villaLuna:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051597/Villa_luna.png",
	villaAphrodite:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051227/Villa_Aphrodite.avif",
	villaRoxane:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051594/Villa_Roxane.jpg",
	villaSunset:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051595/Villa_Sunset.avif",
	villaWhiteLady:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051596/Villa_White_Lady.jpg",
	villaThebes:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051596/Villa_Thebes.jpg",
	villaMarina:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051591/Villa_Marina.jpg",
	villaAurora:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051591/Villa_Aurora.jpg",
	villaBellavista:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051592/Villa_Bellavista.jpg",
	villaSol:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051595/Villa_Sol.jpg",
	villaMontBlanc:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051594/Villa_Mont_Blanc.png",
	villaOlive:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051594/Villa_Olive.jpg",
	villaSantorini:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051595/Villa_Santorini.jpg",
	villaVerona:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051596/Villa_Verona.avif",
	villaCapri:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051592/Villa_Capri.jpg",
	villaEmerald:
		"https://res.cloudinary.com/ljyhthgx/image/upload/v1789051592/Villa_Emerald.jpg",
};

const defaultAmenities = [
	"Swimming pool",
	"Wi-Fi",
	"Air conditioning",
	"Parking",
	"Fully equipped kitchen",
	"Outdoor dining",
];

const defaultHouseRules = [
	"No smoking",
	"No parties or events",
	"Pets allowed on request",
	"Check-in from 3:00 PM",
	"Check-out before 11:00 AM",
];

// This is your existing properties.js data, unchanged except:
// - "image" now points at a Cloudinary URL instead of an imported asset
// - the old hand-set "id: N" field is intentionally left OUT of each
//   object below, since MockAPI assigns its own id automatically when
//   a record is created. The app will use THAT id going forward.
const properties = [
	{
		title: "Villa Makarska",
		country: "Italy",
		location: "Mountains",
		price: 260,
		guests: 8,
		bedrooms: 8,
		bathrooms: 4,
		size: 460,
		image: imageUrls.villaMakarska,
		images: [
			imageUrls.villaMakarska,
			imageUrls.villaMakarska,
			imageUrls.villaMakarska,
		],
		description:
			"A charming mountain villa in Italy offering a peaceful escape surrounded by beautiful natural scenery. The spacious interior and comfortable bedrooms make it an excellent choice for families and groups.",
		amenities: defaultAmenities,
		address: "Name of the street, Italy",
		houseRules: defaultHouseRules,
	},
	{
		title: "Villa Mexico",
		country: "Mexico",
		location: "Beach",
		price: 260,
		guests: 8,
		bedrooms: 8,
		bathrooms: 6,
		size: 460,
		image: imageUrls.villaMexico,
	},
	{
		title: "Villa Luna",
		country: "Greece",
		location: "Seaside",
		price: 350,
		guests: 11,
		bedrooms: 6,
		bathrooms: 5,
		size: 120,
		image: imageUrls.villaLuna,
		description:
			"A beautiful seaside villa in Greece offering a relaxing coastal escape with spacious bedrooms, comfortable living areas, and stunning views. Perfect for families and groups looking for a peaceful Mediterranean holiday.",
	},
	{
		title: "Villa Mexico",
		country: "Mexico",
		location: "Beach",
		price: 260,
		guests: 8,
		bedrooms: 8,
		bathrooms: 6,
		size: 460,
		image: imageUrls.villaMexico,
		description:
			"A luxurious beach villa in Mexico surrounded by a warm tropical atmosphere. With generous living spaces, multiple bedrooms, and easy access to the beach, it is ideal for families and groups seeking a memorable getaway.",
	},
	{
		title: "Aphrodite",
		country: "Greece",
		location: "Seaside",
		price: 350,
		guests: 12,
		bedrooms: 6,
		bathrooms: 5,
		size: 460,
		image: imageUrls.villaAphrodite,
		description:
			"A spacious seaside retreat in Greece designed for large groups and families. Enjoy comfortable accommodation, beautiful coastal surroundings, and a peaceful Mediterranean atmosphere throughout your stay.",
	},
	{
		title: "Villa Makarska",
		country: "Italy",
		location: "Mountains",
		price: 280,
		guests: 8,
		bedrooms: 8,
		bathrooms: 4,
		size: 460,
		image: imageUrls.villaMakarska,
		description:
			"A charming mountain villa in Italy offering a peaceful escape surrounded by beautiful natural scenery. The spacious interior and comfortable bedrooms make it an excellent choice for families and groups.",
	},
	{
		title: "Villa Roxane",
		country: "Greece",
		location: "Seaside",
		price: 110,
		guests: 11,
		bedrooms: 6,
		bathrooms: 5,
		size: 120,
		image: imageUrls.villaRoxane,
		description:
			"A welcoming seaside villa in Greece offering comfortable accommodation at an attractive price. Enjoy the relaxing coastal environment, spacious bedrooms, and easygoing Mediterranean lifestyle.",
	},
	{
		title: "Villa Sunset",
		country: "Italy",
		location: "Mountains",
		price: 280,
		guests: 8,
		bedrooms: 8,
		bathrooms: 4,
		size: 460,
		image: imageUrls.villaSunset,
		description:
			"A peaceful Italian mountain villa perfect for enjoying nature and relaxing away from the busy city. Its spacious rooms and comfortable layout provide an ideal setting for families and groups.",
	},
	{
		title: "White Lady",
		country: "Greece",
		location: "Seaside",
		price: 110,
		guests: 11,
		bedrooms: 6,
		bathrooms: 5,
		size: 120,
		image: imageUrls.villaWhiteLady,
		description:
			"A bright and inviting seaside property in Greece offering a comfortable stay near the coast. With plenty of space for larger groups, it is a great choice for a relaxing Mediterranean vacation.",
	},
	{
		title: "Thebes",
		country: "Greece",
		location: "Seaside",
		price: 240,
		guests: 12,
		bedrooms: 6,
		bathrooms: 5,
		size: 460,
		image: imageUrls.villaThebes,
		description:
			"A spacious Greek seaside villa offering plenty of room for families and larger groups. Guests can enjoy a relaxing coastal setting combined with comfortable bedrooms and generous living spaces.",
	},
	{
		title: "Villa Marina",
		country: "Croatia",
		location: "Seaside",
		price: 420,
		guests: 10,
		bedrooms: 5,
		bathrooms: 4,
		size: 380,
		image: imageUrls.villaMarina,
		description:
			"A stylish seaside villa in Croatia offering a beautiful coastal retreat for families and friends. Relax in spacious surroundings while enjoying the charm and beauty of the Croatian coastline.",
	},
	{
		title: "Villa Aurora",
		country: "Spain",
		location: "Beach",
		price: 390,
		guests: 9,
		bedrooms: 5,
		bathrooms: 4,
		size: 320,
		image: imageUrls.villaAurora,
		description:
			"A beautiful Spanish beach villa created for guests who love the sun, sea, and relaxed coastal living. Its comfortable spaces and convenient beach location make it perfect for a memorable holiday.",
	},
	{
		title: "Villa Bellavista",
		country: "Italy",
		location: "Countryside",
		price: 310,
		guests: 7,
		bedrooms: 4,
		bathrooms: 3,
		size: 290,
		image: imageUrls.villaBellavista,
		description:
			"A peaceful countryside villa in Italy surrounded by beautiful landscapes and a relaxing rural atmosphere. It provides a comfortable home away from the city for families and small groups.",
	},
	{
		title: "Villa Sol",
		country: "Spain",
		location: "Village",
		price: 450,
		guests: 10,
		bedrooms: 5,
		bathrooms: 5,
		size: 410,
		image: imageUrls.villaSol,
		description:
			"A spacious Spanish villa located in a charming village setting. With elegant living areas, comfortable bedrooms, and a peaceful atmosphere, Villa Sol is ideal for families wanting an authentic Spanish escape.",
	},
	{
		title: "Villa Mont Blanc",
		country: "France",
		location: "Mountains",
		price: 520,
		guests: 12,
		bedrooms: 6,
		bathrooms: 5,
		size: 500,
		image: imageUrls.villaMontBlanc,
		description:
			"A luxurious mountain villa in France offering a spacious retreat surrounded by breathtaking alpine scenery. With room for large groups, it is perfect for relaxing, exploring nature, and enjoying a premium mountain holiday.",
	},
	{
		title: "Villa Olive",
		country: "Greece",
		location: "Countryside",
		price: 260,
		guests: 6,
		bedrooms: 3,
		bathrooms: 2,
		size: 240,
		image: imageUrls.villaOlive,
		description:
			"A cozy Greek countryside villa offering a quiet and relaxing escape. Surrounded by natural beauty, Villa Olive is perfect for couples, families, or small groups looking for a peaceful holiday.",
	},
	{
		title: "Villa Santorini",
		country: "Greece",
		location: "Seaside",
		price: 600,
		guests: 8,
		bedrooms: 4,
		bathrooms: 4,
		size: 350,
		image: imageUrls.villaSantorini,
		description:
			"An elegant seaside villa inspired by the beauty of Santorini. Enjoy a luxurious Mediterranean experience with comfortable accommodation, beautiful surroundings, and a relaxing coastal atmosphere.",
	},
	{
		title: "Villa Verona",
		country: "Italy",
		location: "Town",
		price: 330,
		guests: 7,
		bedrooms: 4,
		bathrooms: 3,
		size: 300,
		image: imageUrls.villaVerona,
		description:
			"A charming Italian villa located near the heart of town, offering convenient access to local attractions, restaurants, and culture. Its comfortable interior makes it a great choice for families and small groups.",
	},
	{
		title: "Villa Capri",
		country: "Italy",
		location: "Seaside",
		price: 480,
		guests: 10,
		bedrooms: 5,
		bathrooms: 4,
		size: 390,
		image: imageUrls.villaCapri,
		description:
			"A stunning seaside villa in Italy offering an elegant coastal retreat. With spacious rooms and beautiful surroundings, Villa Capri is perfect for guests looking to enjoy the relaxed lifestyle of the Italian coast.",
	},
	{
		title: "Villa Emerald",
		country: "Croatia",
		location: "Village",
		price: 370,
		guests: 8,
		bedrooms: 4,
		bathrooms: 3,
		size: 330,
		image: imageUrls.villaEmerald,
		description:
			"A comfortable Croatian villa situated in a peaceful village environment. Villa Emerald combines spacious accommodation with a quiet setting, making it ideal for families and friends looking for a relaxing getaway.",
	},
];

// POSTs one property at a time (not Promise.all) so requests hit
// MockAPI's free tier sequentially rather than all at once — safer
// against rate limits, and it makes the console log readable as a
// progress indicator instead of 20 lines appearing all at once.
async function seed() {
	console.log(`Seeding ${properties.length} properties to MockAPI...`);

	for (const property of properties) {
		try {
			const response = await fetch(MOCKAPI_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(property),
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`);
			}

			const created = await response.json();
			console.log(`✓ Created "${created.title}" with id ${created.id}`);
		} catch (error) {
			console.error(`✗ Failed to create "${property.title}":`, error.message);
		}
	}

	console.log("Done.");
}

seed();
