"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Circle,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import { NavbarContext } from "@/components/providers/navbarprovider";
import BoardingHouseMapView, {
  BoardingHouseMapViewProps,
} from "../boardinghousemapview/boardinghousemapview";

const containerStyle = {
  width: "100%",
  height: "80.5vh",
};

const MapComponent = ({ arrayListings }) => {
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [clickedLocation, setClickedLocation] = useState<LatLng | null>(null); // Track clicked location
  const [distance, setDistance] = useState<number | null>(null); // Store the computed distance

  const context = useContext(NavbarContext);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null);

  if (!context) return null;
  const { radius, setRadius } = context;

  const firstRenderRef = useRef(true);

  const handleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    const renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(mapInstance); // Attach DirectionsRenderer to the map
    setDirectionsRenderer(renderer);
  };

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

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API}
        libraries={["geometry"]}
      >
        {currentLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentLocation}
            zoom={12}
            onLoad={handleMapLoad}
          >
            {/* Marker for user's current location */}
            <Marker position={currentLocation} />

            {/* Circle rendered dynamically */}
            {currentLocation && (
              <Circle
                key={1}
                center={currentLocation}
                radius={parseInt(radius, 10) * 1000}
                options={{
                  fillColor: firstRenderRef.current ? "transparent" : "#30cff2",
                  strokeWeight: firstRenderRef.current ? "0" : "0",
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
                key={index}
                {...listing}
                handleMarkerClick={handleMarkerClick}
              ></BoardingHouseMapView>
            ))}
          </GoogleMap>
        ) : (
          <div className="flex justify-center items-center">
            <img
              src="images/roomradar_loading.gif"
              alt="Loading logo roomradar placeholder"
              className="w-[30rem] h-[17rem]"
            />
          </div>
        )}
      </LoadScript>
      <ShowMapFooter footerType={2}></ShowMapFooter>

      {/* Display computed distance */}
      {distance !== null && clickedLocation && (
        <div className="absolute bottom-4 left-4 bg-white p-4 shadow-md rounded-md">
          <p>Distance to clicked location: {(distance / 1000).toFixed(2)} km</p>
        </div>
      )}
    </>
  );
};

export default MapComponent;
