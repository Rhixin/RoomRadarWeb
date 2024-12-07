import React from "react";
import SearchBar from "@/components/searchbar/searchBar";
import ListingCard from "@/components/listingCard/listingCard";
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

    // Add more listings as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-8 pt-20 pb-8">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Welcome to Room Radar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your ideal Boarding House
          </p>
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
