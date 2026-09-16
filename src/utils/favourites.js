const FAVOURITES_KEY = "luxury-rentals-favourites";

export function getFavourites() {
	try {
		const saved = localStorage.getItem(FAVOURITES_KEY);

		return saved ? JSON.parse(saved) : [];
	} catch (error) {
		console.error("Could not load favourites:", error);
		return [];
	}
}

export function saveFavourites(favouriteIds) {
	localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favouriteIds));
}

export function addFavourite(propertyId) {
	const favourites = getFavourites();

	if (!favourites.includes(propertyId)) {
		saveFavourites([...favourites, propertyId]);
	}
}

export function removeFavourite(propertyId) {
	const favourites = getFavourites();

	saveFavourites(favourites.filter((id) => id !== propertyId));
}

export function clearFavourites() {
	localStorage.removeItem(FAVOURITES_KEY);
}

export function isFavourite(propertyId) {
	return getFavourites().includes(propertyId);
}
