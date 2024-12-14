import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //FILTERS
  const [radius, setRadius] = useState(20);
  const [selectedType, setSelectedType] = useState("");
  //Allow Pets modal
  const [isAllowPets, setIsAllowPets] = useState(false);
  //Group Filter in modal
  const [priceRange, setPriceRange] = useState(0);
  const [amenities, setAmenities] = useState([]);
  const [additionalFees, setAdditionalFees] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("");
  //Summary
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: "",
    radius: 0,
    priceRange: 0,
    amenities: [],
    allowPets: false,
    additionalFees: [],
    sortBy: "",
  });

  return (
    <NavbarContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isOn,
        setIsOn,
        isVisible,
        setIsVisible,
        //Filters
        radius,
        setRadius,
        selectedType,
        setSelectedType,
        selectedSortBy,
        setSelectedSortBy,
        isAllowPets,
        setIsAllowPets,
        //group filter modal
        priceRange,
        setPriceRange,
        amenities,
        setAmenities,
        additionalFees,
        setAdditionalFees,
        //Summary
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
