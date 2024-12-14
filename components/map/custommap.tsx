"use client";
import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../providers/mapprovider";

const CustomMap = ({
  onClickHandler,
  containerStyle,
  onLoadMapHandler,
  children,
}) => {
  // Context or Values from Map Context Provider Component for easy access
  const context = useContext(MapContext);
  if (!context) return null;
  const {
    map,
    setMap,
    currentLocation,
    setCurrentLocation,
    isMapLoaded,
    setIsMapLoaded,
  } = context;

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching current location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={12}
        onLoad={onLoadMapHandler}
        onClick={onClickHandler}
        options={{
          gestureHandling: "greedy", // Enables scrolling with the mouse wheel without holding Ctrl
        }}
      >
        {/* Marker for user's current location */}
        <Marker position={currentLocation} />
        {children}
      </GoogleMap>
    </>
  );
};

export default CustomMap;
