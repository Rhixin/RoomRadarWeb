import React from "react";
import SearchBar from "@/components/searchbar/searchBar";
<<<<<<< HEAD
import ListingCard from "@/components/listingcard/listingcard";

=======
import ListingCard from "@/components/listingcard/listingCard";
import Navbar from "@/components/navbar/navbar";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import { NavbarProvider } from "@/components/providers/navbarprovider";
>>>>>>> master
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        <div
          className="text-center mb-12 py-32 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/images/testing-3.avif')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Welcome to Room Radar
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Find your ideal Boarding House
            </p>
            <div className="max-w-3xl mx-auto w-full px-4">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 max-w-[2520px] mx-auto px-2 sm:px-8">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </div>
=======
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
>>>>>>> master
  );
};

export default Home;
