// src/redux/slices/enquirySlice.js
//
// This slice holds the "draft" enquiry context: which property (if any)
// the user was looking at, plus any booking details they'd already
// entered on BookingCard, at the moment they navigated to /enquiry.
//
// Why this needs Redux and not just component state: BookingCard and
// the Enquiry page are two completely separate components rendered on
// two different routes. There's no parent/child relationship between
// them to pass props through, and a route change (navigate("/enquiry"))
// unmounts BookingCard entirely — any local state it had is gone. Redux
// state lives outside any single component, so it survives the
// navigation.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	propertyId: null, // null = general enquiry, no property context
	checkIn: "",
	checkOut: "",
	guests: "",
};

const enquirySlice = createSlice({
	name: "enquiry",
	initialState,
	reducers: {
		// Called by BookingCard right before navigating to /enquiry.
		// Takes one object so we set everything in a single dispatch/render,
		// rather than four separate actions.
		setEnquiry(state, action) {
			const { propertyId, checkIn, checkOut, guests } = action.payload;
			state.propertyId = propertyId;
			state.checkIn = checkIn;
			state.checkOut = checkOut;
			state.guests = guests;
		},

		// Resets back to a general (no property) enquiry. We'll use this
		// for the "Send another message" reset, and for the navbar's plain
		// "Enquiry" link, so an old booking attempt doesn't linger and
		// wrongly show "Enquiring about: Villa X" on a general visit.
		clearEnquiry(state) {
			state.propertyId = null;
			state.checkIn = "";
			state.checkOut = "";
			state.guests = "";
		},
	},
});

export const { setEnquiry, clearEnquiry } = enquirySlice.actions;

// One selector per piece of state that components actually need,
// rather than one big object selector — keeps re-renders targeted to
// only what changed.
export const selectEnquiryPropertyId = (state) => state.enquiry.propertyId;
export const selectEnquiryDetails = (state) => state.enquiry;

export default enquirySlice.reducer;
