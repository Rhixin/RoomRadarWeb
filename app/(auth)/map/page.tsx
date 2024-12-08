"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";

// Replace with your Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8";

const containerStyle = {
  width: "100%",
  height: "80.5vh", // Makes the map take up the entire viewport height
};

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

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
      <Navbar navbarType={1}></Navbar>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        {currentLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentLocation}
            zoom={12}
          >
            {/* Optional: Add a marker at user's current location */}
            <Marker position={currentLocation} />
          </GoogleMap>
        ) : (
          <div>
            <img src="images/rooomradar_loading.gif" alt="Your GIF" />
          </div>
        )}
      </LoadScript>
      <ShowMapFooter></ShowMapFooter>
    </>
  );
};

export default Map;
