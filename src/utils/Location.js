// src/utils/locations.js
//
// Single source of truth for "which countries can someone filter by."
// Previously, FilterPanel, FilterModal, and HeroSearch each hardcoded
// their own list of countries, and those lists had drifted out of
// sync with each other AND with what's actually in the property data
// (e.g. some lists were missing "France" or "Mexico" entirely).
//
// Deriving this from the real properties array means it's always
// accurate — add a property with a new country, and every filter UI
// picks it up automatically, with nothing to remember to update.
import properties from "../Data/properties";

// Set() removes duplicates, then we sort alphabetically for a
// predictable, readable dropdown order.
export const locationOptions = [
	...new Set(properties.map((property) => property.country)),
].sort();
