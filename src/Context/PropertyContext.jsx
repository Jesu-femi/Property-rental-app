import { createContext, useContext, useState } from "react";
import properties from "../data/properties";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  // ============================================
  // PROPERTIES
  // ============================================

  // All villas from properties.js
  const [propertiesList] = useState(properties);

  // Currently selected villa
  const [selectedProperty, setSelectedProperty] = useState(null);

  // ============================================
  // SEARCH BAR
  // ============================================

 
  // Location | Dates | Guests | Price | Search

  const [search, setSearch] = useState({
    location: "",
    dates: "",
    guests: "",
    price: "",
  });

 

  const [filters, setFilters] = useState({
    location: [],
    wellness: [],
    outdoor: [],
    activity: [],
    amenities: [],
  });


  const locationFilters = [
    "Seaside",
    "Countryside",
    "Village",
    "Town",
    "Mountains",
  ];


  const wellnessFilters = [
    "Swimming pool",
    "Indoor pool",
    "Jacuzzi",
    "Fitness/Gym",
    "Sauna",
  ];

  // Outdoor
  const outdoorFilters = [
    "Outdoor dining table",
    "Outdoor grill",
    "Boat mooring",
    "Electric car charger",
    "Private parking",
  ];

  // Activity
  const activityFilters = [
    "Playground",
    "PlayStation",
    "Satellite/Cable",
    "Table tennis",
  ];

  // Amenities
  const amenitiesFilters = [
    "Fireplace",
    "Air conditioning",
    "Feeding chair",
    "Iron & Board",
  ];


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

  
  const toggleFilter = (category, value) => {
    setFilters((previousFilters) => {
      const currentCategory = previousFilters[category];

      
      if (currentCategory.includes(value)) {
        return {
          ...previousFilters,
          [category]: currentCategory.filter(
            (item) => item !== value
          ),
        };
      }

     
      return {
        ...previousFilters,
        [category]: [...currentCategory, value],
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      location: [],
      wellness: [],
      outdoor: [],
      activity: [],
      amenities: [],
    });
  };
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

  

  const value = {
    // -------------------------
    // Properties
    // -------------------------
    properties: propertiesList,

    // -------------------------
    // Selected property
    // -------------------------
    selectedProperty,
    setSelectedProperty,

    // -------------------------
    // Search
    // -------------------------
    search,
    setSearch,
    updateSearch,
    clearSearch,

  
    filters,
    setFilters,
    toggleFilter,
    clearFilters,
    isFilterSelected,
    activeFilterCount,

    // -------------------------
    // Filter options
    // -------------------------
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