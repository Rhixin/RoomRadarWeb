"use client";
import React, { useEffect } from "react";

const StreetViewPanorama = ({ lat, lng }) => {
  useEffect(() => {
    // Ensure window.google is loaded when the script is ready
    if (typeof window !== "undefined" && window.google) {
      const position = { lat, lng };

      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById("street-view") as HTMLElement,
        {
          position: position,
          pov: {
            heading: 34,
            pitch: 10,
          },
          zoom: 1,
        }
      );
    } else {
      console.error("Google Maps JavaScript API not loaded.");
    }
  }, [lat, lng]); // Watch the lat/lng dependencies

  return (
    <div
      id="street-view"
      style={{
        width: "100%",
        height: "400px",
      }}
    ></div>
  );
};

export default StreetViewPanorama;
