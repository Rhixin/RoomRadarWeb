"use client";
import React, { useContext, useRef, useState } from "react";
import { MapContext } from "../providers/mapprovider";
import { NavbarContext } from "../providers/navbarprovider";
import CustomMap from "./custommap";
import { Circle } from "@react-google-maps/api";
import ShowMapFooter from "../showmapfooter/showmapfooter";
import BoardingHouseMapView from "../boardinghousemapview/boardinghousemapview";

const containerStyle = {
  width: "100%",
  height: "80.1vh",
};

const RoomRadarMap = ({ arrayListings }) => {
  // Context or Values from Map Context Provider Component for global Accessibility
  const mapContext = useContext(MapContext);
  if (!mapContext) return null;
  const {
    map,
    setMap,
    currentLocation,
    setCurrentLocation,
    isMapLoaded,
    setIsMapLoaded,
  } = mapContext;

  // Context or Values from Navbar Context Provider for global Accessibility
  const navContext = useContext(NavbarContext);
  if (!navContext) return null;
  const { radius, setRadius, isOn, setIsON } = navContext;

  //Additional states for this unique type of map
  const [clickedLocation, setClickedLocation] = useState<LatLng | null>(null); // Track clicked location
  const [distance, setDistance] = useState<number | null>(null); // Store the computed distance
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null); //for the directions renderer

  //TODO: Temporary fix for duplicate Cricle
  const firstRenderRef = useRef(true);

  // Function to calculate distance and request route
  const handleMarkerClick = (location: LatLng) => {
    if (!map || !directionsRenderer) return;

    const directionsService = new google.maps.DirectionsService();
    const originLatLng = new google.maps.LatLng(
      currentLocation?.lat || 0,
      currentLocation?.lng || 0
    );
    const destinationLatLng = new google.maps.LatLng(
      location.lat,
      location.lng
    );

    //Calculate distance
    const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(
      originLatLng,
      destinationLatLng
    );

    setDistance(distanceInKm);

    directionsService.route(
      {
        origin: originLatLng,
        destination: destinationLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result); // Render the route on the map
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  // Load map with direction finder
  const handleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    setIsMapLoaded(true); // Map has loaded
    const renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(mapInstance); // Attach DirectionsRenderer to the map
    setDirectionsRenderer(renderer);
  };

  return (
    <CustomMap
      onClickHandler={null}
      containerStyle={containerStyle}
      onLoadMapHandler={handleMapLoad}
      options={{
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Replace with the desired color
          scaledSize: new google.maps.Size(40, 40), // Adjust size (optional)
        },
      }}
    >
      {/* Circle rendered dynamically */}
      {currentLocation && (
        <Circle
          key={1}
          center={currentLocation}
          radius={parseInt(radius, 10) * 1000}
          options={{
            fillColor:
              firstRenderRef.current || !isOn ? "transparent" : "#30cff2",
            strokeWeight: firstRenderRef.current || !isOn ? "0" : "0",
            fillOpacity: 0.3,
          }}
          onLoad={() => {
            if (firstRenderRef.current) {
              firstRenderRef.current = false;
            }
          }}
        />
      )}

      {/* Display all data components */}
      {arrayListings.map((listing, index) => (
        <BoardingHouseMapView
          key={listing.boardingHouseId}
          {...listing}
          handleMarkerClick={handleMarkerClick}
          setClickedLocation={setClickedLocation}
        ></BoardingHouseMapView>
      ))}

      {/* Display computed distance and panorama */}
      {clickedLocation && (
        <div className="absolute bottom-4 left-4 bg-white p-4 shadow-md rounded-md">
          <p>Distance to clicked location: {(distance / 1000).toFixed(2)} km</p>
        </div>
      )}
    </CustomMap>
  );
};

export default RoomRadarMap;
