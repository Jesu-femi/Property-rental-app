// src/redux/slices/filtersSlice.js
//
// Owns every Browse-page filter/sort/pagination value: searchTerm,
// location, guests, price, bedrooms, sortBy, and visibleCount.
// This replaces six separate useState calls that used to live inside
// BrowseProperties — moving them here means the state exists outside
// any single component, so (in theory) something like a search box on
// the Home page could later set searchTerm without prop-drilling
// through BrowseProperties.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTerm: "",
	location: "",
	guests: "",
	price: "",
	bedrooms: "",
	sortBy: "recommended",
	visibleCount: 6,
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		// Each "set X" reducer also resets visibleCount to 6, same as
		// your original handlers did with two calls (setSearchTerm +
		// setVisibleCount). Bundling both into one reducer means each
		// component handler only needs one dispatch.
		setSearchTerm(state, action) {
			state.searchTerm = action.payload;
			state.visibleCount = 6;
		},
		setLocation(state, action) {
			state.location = action.payload;
			state.visibleCount = 6;
		},
		setGuests(state, action) {
			state.guests = action.payload;
			state.visibleCount = 6;
		},
		setPrice(state, action) {
			state.price = action.payload;
			state.visibleCount = 6;
		},
		setBedrooms(state, action) {
			state.bedrooms = action.payload;
			state.visibleCount = 6;
		},
		setSortBy(state, action) {
			state.sortBy = action.payload;
			state.visibleCount = 6;
		},

		loadMoreVisible(state) {
			state.visibleCount += 3;
		},

		// Runs once when BrowseProperties mounts, replicating what your
		// useState(searchParams.get("search") || "") initializers used to
		// do automatically. This is necessary because Redux state is
		// GLOBAL and doesn't reset itself just because a component
		// mounted — useState's initializer only ran because each mount
		// created a brand-new piece of local state. We now have to seed
		// it explicitly, on purpose, every time.
		//
		// This intentionally resets ALL fields (including bedrooms/sortBy,
		// which were never URL-driven) to match your original behavior:
		// every fresh visit to /browse reset every filter, not just the
		// ones present in the URL.
		hydrateFromParams(state, action) {
			const { searchTerm, location, guests, price } = action.payload;
			state.searchTerm = searchTerm;
			state.location = location;
			state.guests = guests;
			state.price = price;
			state.bedrooms = "";
			state.sortBy = "recommended";
			state.visibleCount = 6;
		},

		clearFilters(state) {
			state.searchTerm = "";
			state.location = "";
			state.guests = "";
			state.price = "";
			state.bedrooms = "";
			state.sortBy = "recommended";
			state.visibleCount = 6;
		},
	},
});

export const {
	setSearchTerm,
	setLocation,
	setGuests,
	setPrice,
	setBedrooms,
	setSortBy,
	loadMoreVisible,
	hydrateFromParams,
	clearFilters,
} = filtersSlice.actions;

// One selector for the whole slice — BrowseProperties needs almost
// every field anyway, so there's little value in six separate tiny
// selectors here (unlike favourites, where components only ever
// needed the ids array).
export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
