import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [radius, setRadius] = useState(20);

  return (
    <NavbarContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        radius,
        setRadius,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
