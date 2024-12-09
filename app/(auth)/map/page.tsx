"use client";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import { NavbarProvider } from "@/components/providers/navbarprovider";

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

  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

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
            {/* Marker */}
            <Marker
              position={currentLocation}
              onClick={() => setInfoWindowOpen(true)} // Show InfoWindow on marker click
            />

            {/* InfoWindow */}
            {infoWindowOpen && (
              <InfoWindow
                position={currentLocation}
                onCloseClick={() => setInfoWindowOpen(false)} // Hide InfoWindow when closed
              >
                <div>
                  <h4>Current Location</h4>
                  <p>This is your pinned marker's location.</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <div className="flex justify-center items-center  ">
            <img
              src="images/roomradar_loading.gif"
              alt="Your GIF"
              className="w-[30rem] h-[17rem]"
            />
          </div>
        )}
      </LoadScript>
      <ShowMapFooter footerType={2}></ShowMapFooter>
    </>
  );
};

export default Map;
