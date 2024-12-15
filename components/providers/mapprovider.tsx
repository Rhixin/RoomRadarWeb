"use client";
import { LoadScript } from "@react-google-maps/api";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import LoadingPlaceholder from "../loading/loading";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        currentLocation,
        setCurrentLocation,
        isMapLoaded,
        setIsMapLoaded,
      }}
    >
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API}
        libraries={["geometry", "places", "streetView"]}
        onLoad={() => setIsMapLoaded(true)} // When the map is loaded
        loadingElement={<LoadingPlaceholder></LoadingPlaceholder>} // Show custom loading screen
      >
        {children}
      </LoadScript>
    </MapContext.Provider>
  );
};
