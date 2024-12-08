import React from "react";
import SearchBar from "@/components/searchbar/searchBar";
import ListingCard from "@/components/listingcard/listingCard";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
const Home = () => {
  const listings = [
    {
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
    },

    {
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
    },

    {
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
    },

    {
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
    },

    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },

    // Add more listings as needed
  ];

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
