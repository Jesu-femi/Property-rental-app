// src/redux/store.js
//
// This file creates the single Redux store for the whole app.
// Redux Toolkit's configureStore() replaces the old, verbose
// createStore() + combineReducers() + manually wiring devtools/middleware.
// It does all three for you, with good defaults.
import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesSlice";
import enquiryReducer from "./slices/enquirySlice";
import filtersReducer from "./slices/filtersSlice";
import propertiesReducer from "./slices/propertiesSlice";

export const store = configureStore({
	// "reducer" is a map of "slice name" -> "slice reducer function".
	// It's empty right now on purpose — we have no slices yet.
	// In the next step we'll add: favourites: favouritesReducer
	// Then later: filters: filtersReducer
	reducer: {
		favourites: favouritesReducer, // state.favourites.ids
		enquiry: enquiryReducer,
		filters: filtersReducer,
		properties: propertiesReducer,
	},
});
