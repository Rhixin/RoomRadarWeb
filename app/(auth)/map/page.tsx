"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import RoomRadarMap from "@/components/map/roomradarmap";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import { getAllListings } from "@/lib/listings";

// Transform server data to props
const transformServerDataToProps = (serverData: any) => {
  return {
    boardingHouseId: serverData.boardingHouseId,
    propertyName: serverData.propertyName,
    mapLocation: {
      lat: serverData.latitude,
      lng: serverData.longitude,
    },
    location: "Cebu, Philippines", // Placeholder location, update as needed
    distance: "5 kilometers away", // Placeholder, to be calculated
    price: serverData.price.toString(), // Convert price to string
    rating: serverData.truncatedAverageRating, // Rating from the server
    images: ["/images/testing-1.avif", "/images/testing-2.avif"], // Placeholder images
    isFavorite: false, // Placeholder value, adjust based on requirements
    landlord: `${serverData.landLordFirstName}`, // Concatenate first and last name
    landlordContactDetails: serverData.landLordContactNumber, // Landlord contact number
  };
};

const Map = () => {
  // Use state to manage listings
  const [listings, setListings] = useState([]);

  // Fetch listings from the API
  const fetchListings = async () => {
    try {
      const response = await getAllListings();

      // Check if response and response.data are valid
      if (response && response.data && Array.isArray(response.data)) {
        // Convert the listings from the server to props format
        const convertedListings = response.data.map((listing: any) =>
          transformServerDataToProps(listing)
        );

        // Update the state with the transformed listings
        setListings(convertedListings);
        console.log("Fetched listings:", convertedListings);
      } else {
        console.error(
          "Error: response.data is either null, undefined, or not an array."
        );
      }
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  // Use useEffect to call fetchListings only once when the component mounts
  useEffect(() => {
    fetchListings();
  }, []); // Empty dependency array means it runs only on component mount

  return (
    <>
      <Navbar navbarType={1} />
      <RoomRadarMap arrayListings={listings} />
      <ShowMapFooter footerType={2} />
    </>
  );
};

export default Map;
