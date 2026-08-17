import { createContext, useContext, useState } from "react";
import properties from "../data/properties";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  // ============================================
  // PROPERTIES
  // ============================================

  // All properties from properties.js
  const [propertiesList] = useState(properties);

  // Currently selected property
  const [selectedProperty, setSelectedProperty] = useState(null);

  // ============================================
  // SEARCH BAR
  // ============================================

  const [search, setSearch] = useState({
    location: "",
    dates: "",
    guests: "",
    price: "",
  });

  // ============================================
  // FILTERS
  // ============================================

  const [filters, setFilters] = useState({
    location: [],
    wellness: [],
    outdoor: [],
    activity: [],
    amenities: [],
  });

  // ============================================
  // LOCATION FILTERS
  // ============================================

  const locationFilters = [
    "Seaside",
    "Countryside",
    "Village",
    "Town",
    "Mountains",
  ];

  // ============================================
  // WELLNESS FILTERS
  // ============================================

  const wellnessFilters = [
    "Swimming pool",
    "Indoor pool",
    "Jacuzzi",
    "Fitness/Gym",
    "Sauna",
  ];

  // ============================================
  // OUTDOOR FILTERS
  // ============================================

  const outdoorFilters = [
    "Outdoor dining table",
    "Outdoor grill",
    "Boat mooring",
    "Electric car charger",
    "Private parking",
  ];

  // ============================================
  // ACTIVITY FILTERS
  // ============================================

  const activityFilters = [
    "Playground",
    "PlayStation",
    "Satellite/Cable",
    "Table tennis",
  ];

  // ============================================
  // AMENITIES FILTERS
  // ============================================

  const amenitiesFilters = [
    "Fireplace",
    "Air conditioning",
    "Feeding chair",
    "Iron & Board",
  ];

  // ============================================
  // SEARCH FUNCTIONS
  // ============================================

  const updateSearch = (field, value) => {
    setSearch((previousSearch) => ({
      ...previousSearch,
      [field]: value,
    }));
  };

  const clearSearch = () => {
    setSearch({
      location: "",
      dates: "",
      guests: "",
      price: "",
    });
  };

  // ============================================
  // FILTER FUNCTIONS
  // ============================================

  const toggleFilter = (category, value) => {
    setFilters((previousFilters) => {
      const currentCategory = previousFilters[category];

      // Remove filter if already selected
      if (currentCategory.includes(value)) {
        return {
          ...previousFilters,
          [category]: currentCategory.filter(
            (item) => item !== value
          ),
        };
      }

      // Add filter if not selected
      return {
        ...previousFilters,
        [category]: [...currentCategory, value],
      };
    });
  };

  // ============================================
  // CLEAR ALL FILTERS
  // ============================================

  const clearFilters = () => {
    setFilters({
      location: [],
      wellness: [],
      outdoor: [],
      activity: [],
      amenities: [],
    });
  };

  // ============================================
  // CHECK IF FILTER IS SELECTED
  // ============================================

  const isFilterSelected = (category, value) => {
    return filters[category].includes(value);
  };

  // ============================================
  // COUNT ACTIVE FILTERS
  // ============================================

  const activeFilterCount =
    filters.location.length +
    filters.wellness.length +
    filters.outdoor.length +
    filters.activity.length +
    filters.amenities.length;

  // ============================================
  // CONTEXT VALUE
  // ============================================

  const value = {
    // Properties
    properties: propertiesList,

    // Selected property
    selectedProperty,
    setSelectedProperty,

    // Search
    search,
    setSearch,
    updateSearch,
    clearSearch,

    // Filters
    filters,
    setFilters,
    toggleFilter,
    clearFilters,
    isFilterSelected,
    activeFilterCount,

    // Filter options
    locationFilters,
    wellnessFilters,
    outdoorFilters,
    activityFilters,
    amenitiesFilters,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

// ============================================
// CUSTOM HOOK
// ============================================

export const useProperty = () => {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error(
      "useProperty must be used inside PropertyProvider"
    );
  }

  return context;
};

export default PropertyContext;