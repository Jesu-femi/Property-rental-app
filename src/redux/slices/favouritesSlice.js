// src/redux/slices/favouritesSlice.js
//
// This slice owns the list of favourited property IDs.
// It replaces components calling getFavourites()/addFavourite()/etc.
// directly — instead, components will read from the Redux store
// (useSelector) and trigger changes through dispatch(action).
//
// We still use localStorage under the hood for persistence (so
// favourites survive a page refresh) — Redux state alone lives only
// in memory and would reset on reload. We import your existing
// helpers and alias the ones whose names would clash with our own
// action names.
import { createSlice } from "@reduxjs/toolkit";
import {
	getFavourites,
	saveFavourites,
	clearFavourites as clearFavouritesStorage,
} from "../../utils/favourites";

const favouritesSlice = createSlice({
	name: "favourites",

	// Initial state is read from localStorage ONCE, when the app first
	// loads (when this module is first imported). This is what makes
	// favourites "persist" — on refresh, the store rehydrates from
	// whatever was last saved.
	initialState: {
		ids: getFavourites(), // e.g. [1, 4, 7]
	},

	reducers: {
		// Adds a property ID if it isn't already favourited.
		// Note: Redux Toolkit uses Immer internally, so we can write
		// "mutating" code like state.ids.push(...) — it's not actually
		// mutating the real state, Immer produces a new state object
		// behind the scenes based on this code.
		addFavourite(state, action) {
			const propertyId = action.payload;
			if (!state.ids.includes(propertyId)) {
				state.ids.push(propertyId);
				saveFavourites(state.ids); // side effect: persist to localStorage
			}
		},

		// Removes a property ID.
		removeFavourite(state, action) {
			const propertyId = action.payload;
			state.ids = state.ids.filter((id) => id !== propertyId);
			saveFavourites(state.ids);
		},

		// This is the one most components will actually use — the ♡/♥
		// click handler doesn't know or care whether it's currently
		// favourited, it just wants to "flip" it.
		toggleFavourite(state, action) {
			const propertyId = action.payload;
			if (state.ids.includes(propertyId)) {
				state.ids = state.ids.filter((id) => id !== propertyId);
			} else {
				state.ids.push(propertyId);
			}
			saveFavourites(state.ids);
		},

		clearFavourites(state) {
			state.ids = [];
			clearFavouritesStorage(); // removes the localStorage key entirely
		},
	},
});

// Action creators — components dispatch these, e.g.
// dispatch(toggleFavourite(property.id))
export const {
	addFavourite,
	removeFavourite,
	toggleFavourite,
	clearFavourites,
} = favouritesSlice.actions;

// Selector — the Redux equivalent of your old isFavourite(id) check.
// Usage in a component: const favouriteIds = useSelector(selectFavouriteIds);
export const selectFavouriteIds = (state) => state.favourites.ids;

export default favouritesSlice.reducer;
