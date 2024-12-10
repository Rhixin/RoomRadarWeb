import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [radius, setRadius] = useState(20);
  const [isOn, setIsOn] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        radius,
        setRadius,
        isOn,
        setIsOn,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
