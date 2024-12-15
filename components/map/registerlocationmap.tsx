import React, { useContext, useState } from "react";
import CustomMap from "./custommap";
import { LatLng } from "../boardinghousemapview/boardinghousemapview";
import { MapContext } from "../providers/mapprovider";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "33rem",
};

const RegisterLocationMap = ({ setlistingLocation }) => {
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
  const [clickedLocation, setClickedLocation] = useState<LatLng | null>(null); // Track clicked location

  //Click the map to put marker
  // Handle map click
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const location = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      setClickedLocation(location); // Update marker position
      setlistingLocation(location); // Save location to passed prop function
    }
  };

  // Load map
  const handleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    setIsMapLoaded(true); // Map has loaded
  };

  return (
    <CustomMap
      containerStyle={containerStyle}
      onClickHandler={handleMapClick}
      onLoadMapHandler={handleMapLoad}
      options={null}
    >
      {clickedLocation && <Marker position={clickedLocation} />}
    </CustomMap>
  );
};

export default RegisterLocationMap;
