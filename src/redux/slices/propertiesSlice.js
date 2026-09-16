// src/redux/slices/propertiesSlice.js
//
// Owns the property list itself, fetched from MockAPI instead of the
// old static import (`import properties from "../data/properties"`).
// This is the first ASYNC slice in the app — favourites/enquiry/filters
// all deal with data that's already available instantly (localStorage,
// user input). Fetching over the network means there's a real gap in
// time where we don't have the data yet, so this slice has to track
// three states instead of just the data itself: are we loading, did it
// succeed, did it fail.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const MOCKAPI_URL = "https://6aa16b712703577aa1e3a9b0.mockapi.io/Properties";

// createAsyncThunk wraps an async function and automatically dispatches
// three action types as it runs: fetchProperties.pending (right when
// it starts), fetchProperties.fulfilled (on success, with the data),
// and fetchProperties.rejected (on failure, with the error). We handle
// all three below in extraReducers — this is the standard Redux
// Toolkit pattern for "go get this data from somewhere."
export const fetchProperties = createAsyncThunk(
	"properties/fetchProperties",
	async () => {
		const response = await fetch(MOCKAPI_URL);

		if (!response.ok) {
			// Throwing here is what makes createAsyncThunk dispatch
			// .rejected instead of .fulfilled — fetch() does NOT throw
			// on its own for HTTP error statuses like 404/500, only on
			// actual network failure, so this check is necessary.
			throw new Error(`Failed to fetch properties (${response.status})`);
		}

		const data = await response.json();

		// MockAPI assigns each record's id as a STRING (e.g. "1"). Every
		// other part of this app — routes, favourites, the enquiry
		// slice, RelatedProperties filtering — compares ids as NUMBERS.
		// Converting once, right here, means nothing downstream needs
		// to know or care that the id ever came from an API at all.
		return data.map((property) => ({ ...property, id: Number(property.id) }));
	},
);

const propertiesSlice = createSlice({
	name: "properties",
	initialState: {
		items: [],
		status: "idle", // "idle" | "loading" | "succeeded" | "failed"
		error: null,
	},
	reducers: {
		// No manual reducers needed yet — everything here happens via
		// the thunk's lifecycle below, not direct user actions like
		// toggleFavourite was.
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProperties.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchProperties.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchProperties.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// Selectors — components read through these rather than reaching into
// state.properties directly, so if the shape ever changes, only these
// need updating.
export const selectAllProperties = (state) => state.properties.items;
export const selectPropertiesStatus = (state) => state.properties.status;
export const selectPropertiesError = (state) => state.properties.error;
// Replaces utils/locations.js entirely. This used to be a plain array
// computed once, at import time, from the static properties.js file —
// that's no longer possible now that property data arrives
// asynchronously from MockAPI. As a selector, this recomputes from
// whatever's currently in the store, which is safe here because App.jsx
// already gates every page behind the loading screen until properties
// have actually loaded — by the time any component calls this, real
// data is guaranteed to be there.
export const selectLocationOptions = (state) =>
	[
		...new Set(state.properties.items.map((property) => property.country)),
	].sort();

export default propertiesSlice.reducer;
