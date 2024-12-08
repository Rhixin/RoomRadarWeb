"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Replace with your Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8";

const containerStyle = {
  width: "100%",
  height: "80.5vh", // Makes the map take up the entire viewport height
};

const center = {
  lat: 37.7749, // Latitude for San Francisco
  lng: -122.4194, // Longitude for San Francisco
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker for the map */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
