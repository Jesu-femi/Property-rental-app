// import VillaMakarska from "../../assets/images/villa-makarska.jpg";

const properties = [
	{
		id: 1,
		title: "Villa Makarska",
		country: "Italy",
		location: "Mountains",
		price: "€260",
		guests: 8,
		bedrooms: 8,
		bathrooms: 4,
		size: 460,
		image: "images/Villa Makarska.jpg",
	},

	{
		id: 2,
		title: "Villa Mexico",
		country: "Mexico",
		location: "Beach",
		price: "€260",
		guests: 8,
		bedrooms: 8,
		bathrooms: 6,
		size: 460,
		image: "images/Villa Mexico.png",
	},
    
];
const properties = [
  {
    id: 1,
    title: "Villa Luna",
    country: "Greece",
    location: "Seaside",
    price: "€350",
    guests: 11,
    bedrooms: 6,
    bathrooms: 5,
    size: 120,
    image: "/images/Villa Luna.png",
    description:
      "A beautiful seaside villa in Greece offering a relaxing coastal escape with spacious bedrooms, comfortable living areas, and stunning views. Perfect for families and groups looking for a peaceful Mediterranean holiday.",
  },

  {
    id: 2,
    title: "Villa Mexico",
    country: "Mexico",
    location: "Beach",
    price: "€260",
    guests: 8,
    bedrooms: 8,
    bathrooms: 6,
    size: 460,
    image: "/images/Villa Mexico.png",
    description:
      "A luxurious beach villa in Mexico surrounded by a warm tropical atmosphere. With generous living spaces, multiple bedrooms, and easy access to the beach, it is ideal for families and groups seeking a memorable getaway.",
  },

  {
    id: 3,
    title: "Aphrodite",
    country: "Greece",
    location: "Seaside",
    price: "€350",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    size: 460,
    image: "/images/Villa Aphrodite.jpg",
    description:
      "A spacious seaside retreat in Greece designed for large groups and families. Enjoy comfortable accommodation, beautiful coastal surroundings, and a peaceful Mediterranean atmosphere throughout your stay.",
  },

  {
    id: 4,
    title: "Villa Makarska",
    country: "Italy",
    location: "Mountains",
    price: "€280",
    guests: 8,
    bedrooms: 8,
    bathrooms: 4,
    size: 460,
    image: "/images/Villa Makarska.jpg",
    description:
      "A charming mountain villa in Italy offering a peaceful escape surrounded by beautiful natural scenery. The spacious interior and comfortable bedrooms make it an excellent choice for families and groups.",
  },

  {
    id: 5,
    title: "Villa Roxane",
    country: "Greece",
    location: "Seaside",
    price: "€110",
    guests: 11,
    bedrooms: 6,
    bathrooms: 5,
    size: 120,
    image: "/images/Villa Roxane.jpg",
    description:
      "A welcoming seaside villa in Greece offering comfortable accommodation at an attractive price. Enjoy the relaxing coastal environment, spacious bedrooms, and easygoing Mediterranean lifestyle.",
  },

  {
    id: 6,
    title: "Villa Sunset",
    country: "Italy",
    location: "Mountains",
    price: "€280",
    guests: 8,
    bedrooms: 8,
    bathrooms: 4,
    size: 460,
    image: "/images/Villa Sunset.jpg",
    description:
      "A peaceful Italian mountain villa perfect for enjoying nature and relaxing away from the busy city. Its spacious rooms and comfortable layout provide an ideal setting for families and groups.",
  },

  {
    id: 7,
    title: "White Lady",
    country: "Greece",
    location: "Seaside",
    price: "€110",
    guests: 11,
    bedrooms: 6,
    bathrooms: 5,
    size: 120,
    image: "/images/Villa White Lady.jpg",
    description:
      "A bright and inviting seaside property in Greece offering a comfortable stay near the coast. With plenty of space for larger groups, it is a great choice for a relaxing Mediterranean vacation.",
  },

  {
    id: 8,
    title: "Thebes",
    country: "Greece",
    location: "Seaside",
    price: "€240",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    size: 460,
    image: "/images/Villa Thebes.jpg",
    description:
      "A spacious Greek seaside villa offering plenty of room for families and larger groups. Guests can enjoy a relaxing coastal setting combined with comfortable bedrooms and generous living spaces.",
  },

  {
    id: 9,
    title: "Villa Marina",
    country: "Croatia",
    location: "Seaside",
    price: "€420",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    size: 380,
    image: "/images/Villa Marina.jpg",
    description:
      "A stylish seaside villa in Croatia offering a beautiful coastal retreat for families and friends. Relax in spacious surroundings while enjoying the charm and beauty of the Croatian coastline.",
  },

  {
    id: 10,
    title: "Villa Aurora",
    country: "Spain",
    location: "Beach",
    price: "€390",
    guests: 9,
    bedrooms: 5,
    bathrooms: 4,
    size: 320,
    image: "/images/Villa Aurora.jpg",
    description:
      "A beautiful Spanish beach villa created for guests who love the sun, sea, and relaxed coastal living. Its comfortable spaces and convenient beach location make it perfect for a memorable holiday.",
  },

  {
    id: 11,
    title: "Villa Bellavista",
    country: "Italy",
    location: "Countryside",
    price: "€310",
    guests: 7,
    bedrooms: 4,
    bathrooms: 3,
    size: 290,
    image: "/images/Villa Bellavista.jpg",
    description:
      "A peaceful countryside villa in Italy surrounded by beautiful landscapes and a relaxing rural atmosphere. It provides a comfortable home away from the city for families and small groups.",
  },

  {
    id: 12,
    title: "Villa Sol",
    country: "Spain",
    location: "Village",
    price: "€450",
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    size: 410,
    image: "/images/Villa Sol.jpg",
    description:
      "A spacious Spanish villa located in a charming village setting. With elegant living areas, comfortable bedrooms, and a peaceful atmosphere, Villa Sol is ideal for families wanting an authentic Spanish escape.",
  },

  {
    id: 13,
    title: "Villa Mont Blanc",
    country: "France",
    location: "Mountains",
    price: "€520",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    size: 500,
    image: "/images/Villa Mont Blanc.jpg",
    description:
      "A luxurious mountain villa in France offering a spacious retreat surrounded by breathtaking alpine scenery. With room for large groups, it is perfect for relaxing, exploring nature, and enjoying a premium mountain holiday.",
  },

  {
    id: 14,
    title: "Villa Olive",
    country: "Greece",
    location: "Countryside",
    price: "€260",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    size: 240,
    image: "/images/Villa Olive.jpg",
    description:
      "A cozy Greek countryside villa offering a quiet and relaxing escape. Surrounded by natural beauty, Villa Olive is perfect for couples, families, or small groups looking for a peaceful holiday.",
  },

  {
    id: 15,
    title: "Villa Santorini",
    country: "Greece",
    location: "Seaside",
    price: "€600",
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    size: 350,
    image: "/images/Villa Santorini.jpg",
    description:
      "An elegant seaside villa inspired by the beauty of Santorini. Enjoy a luxurious Mediterranean experience with comfortable accommodation, beautiful surroundings, and a relaxing coastal atmosphere.",
  },

  {
    id: 16,
    title: "Villa Verona",
    country: "Italy",
    location: "Town",
    price: "€330",
    guests: 7,
    bedrooms: 4,
    bathrooms: 3,
    size: 300,
    image: "/images/Villa Verona.jpg",
    description:
      "A charming Italian villa located near the heart of town, offering convenient access to local attractions, restaurants, and culture. Its comfortable interior makes it a great choice for families and small groups.",
  },

  {
    id: 17,
    title: "Villa Capri",
    country: "Italy",
    location: "Seaside",
    price: "€480",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    size: 390,
    image: "/images/Villa Capri.jpg",
    description:
      "A stunning seaside villa in Italy offering an elegant coastal retreat. With spacious rooms and beautiful surroundings, Villa Capri is perfect for guests looking to enjoy the relaxed lifestyle of the Italian coast.",
  },

  {
    id: 18,
    title: "Villa Emerald",
    country: "Croatia",
    location: "Village",
    price: "€370",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    size: 330,
    image: "/images/Villa Emerald.jpg",
    description:
      "A comfortable Croatian villa situated in a peaceful village environment. Villa Emerald combines spacious accommodation with a quiet setting, making it ideal for families and friends looking for a relaxing getaway.",
  },
];

export default properties;