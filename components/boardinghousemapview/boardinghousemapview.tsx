"use client";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useState } from "react";
import ListingCard from "../listingcard/listingcard";
import { FaDirections } from "react-icons/fa";

export type LatLng = { lat: number; lng: number };

export type BoardingHouseMapViewProps = {
  mapLocation: LatLng; // The latitude and longitude of the marker location
  propertyName: string; // The name of the property
  location: string; // The location of the boarding house (e.g., city or address)
  distance: string; // The distance of the boarding house from a reference point
  price: string | DoubleRange; // The price of the boarding house
  rating: number; // The rating of the boarding house
  images?: string[]; // Array of image URLs for the boarding house, optional
  isFavorite: boolean; // Indicates whether the boarding house is marked as favorite
  landlord: string; // The name of the landlord
  landlordContactDetails: string; // The contact details of the landlord (e.g., phone number or email)
  handleMarkerClick: (param: LatLng) => void;
  setClickedLocation: (location: LatLng) => void;
};

const BoardingHouseMapView = ({
  boardingHouseId,
  mapLocation,
  location,
  propertyName,
  distance,
  price,
  rating,
  images,
  isFavorite,
  landlord,
  landlordContactDetails,
  handleMarkerClick,
  setClickedLocation,
}) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const listing = {
    boardingHouseId: boardingHouseId,
    propertyName: propertyName,
    mapLocation: mapLocation,
    location: location,
    distance: distance,
    price: price,
    rating: rating,
    images: images,
    isFavorite: isFavorite,
    landlord: landlord,
    landlordContactDetails: landlordContactDetails,
  };

  function seeDetails() {
    // alert(boardingHouseId);
    window.location.href = `/listings/${boardingHouseId}`;
  }

  return (
    <div>
      {/* Marker */}
      {/* Marker with custom icon */}
      <Marker
        position={listing.mapLocation}
        onMouseOver={() => setInfoWindowOpen(true)} // Open InfoWindow on hover
      />

      {/* InfoWindow */}
      {infoWindowOpen && (
        <div>
          <InfoWindow
            position={listing.mapLocation}
            onCloseClick={() => setInfoWindowOpen(false)}
          >
            <div style={{ pointerEvents: "auto" }} className="flex flex-col">
              <ListingCard {...listing} />
              <div className="h-auto py-2 flex flex-row text-center items-center justify-between">
                <p
                  className="text-secondary cursor-pointer"
                  onClick={seeDetails}
                >
                  See More
                </p>
                <FaDirections
                  className=" rounded-full w-6 h-6 text-tertiary hover:scale-110 m-1 transition cursor-pointer"
                  onClick={() => {
                    handleMarkerClick?.(mapLocation);
                    setClickedLocation(mapLocation);
                  }}
                />
              </div>
            </div>
          </InfoWindow>
        </div>
      )}
    </div>
  );
};

export default BoardingHouseMapView;
