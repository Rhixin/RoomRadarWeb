import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //FILTERS
  const [radius, setRadius] = useState(20);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

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
        //Summary
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
