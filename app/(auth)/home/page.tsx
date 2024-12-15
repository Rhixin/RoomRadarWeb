"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/searchbar/searchBar";
import ListingCard from "@/components/listingcard/listingcard";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import { NavbarProvider } from "@/components/providers/navbarprovider";
import { getAllListings } from "@/lib/listings";
const Home = () => {
  const listingsFake = [
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },

    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },

    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },

    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },

    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: false,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: false,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: true,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },
    {
      propertyName: "Rizwill Apartelle",
      location: "Cebu City, Philippines",
      distance: "5 kilometers away",
      price: "2,225",
      rating: 4.9,
      images: [
        "/images/testing-1.avif",
        "/images/testing-2.avif",
        "/images/testing-3.avif",
      ],
      isFavorite: false,
      landlord: "Aling Merna",
      landlordContactDetails: "09271935386",
    },

    // Add more listings as needed
  ];

  // Use state to manage listings
  const [listings, setListings] = useState([]);

  // Transform server data to props
  const transformServerDataToProps = (serverData: any) => {
    return {
      boardingHouseId: serverData.boardingHouseId,
      propertyName: serverData.BoardingHouseName,
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
      <Navbar navbarType={1}></Navbar>
      <div className="max-w-[2520px] mx-auto px-4 sm:px-24 pb-8 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {listings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
      <ShowMapFooter footerType={1}></ShowMapFooter>
    </>
  );
};

export default Home;
