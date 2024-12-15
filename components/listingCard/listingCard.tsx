"use client";
import "./listingcard.css";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { IoCall } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ListingCard = ({
  boardingHouseId,
  propertyName,
  location,
  distance,
  price,
  rating,
  images = ["/images/testing-1.avif"],
  isFavorite,
  landlord,
  landlordContactDetails,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  function seeDetails() {
    // alert(boardingHouseId);
    window.location.href = `/listings/${boardingHouseId}`;
  }

  return (
    <div className="group">
      <div
        className="relative cursor-pointer"
        onClick={() => {
          seeDetails();
        }}
      >
        <div className="w-full aspect-square rounded-xl overflow-hidden relative">
          <Image
            src={images[currentImageIndex]}
            alt={location}
            fill
            className="object-cover w-full h-full group-hover:scale-110 transition"
          />
          {/* Lanlord Holder */}
          <div
            className={`absolute left-4 top-[75%] flex flex-row w-[80%]  bg-transparent rounded-full landlord-holder ${
              showDetails ? "landlord-expand" : ""
            }`}
          >
            <img
              className="w-[20%] rounded-full cursor-pointer"
              src="/images/landlord_placeholder.jpg"
              alt="profile"
              onMouseEnter={() => setShowDetails(true)}
              onMouseLeave={() => setShowDetails(false)}
            />

            {/* Animated details */}
            <div
              className={`ml-[4%] mr-6 text-tertiary flex-col justify-center items-start ${
                showDetails ? "showDetails" : "hideDetails"
              }`}
            >
              <h4 className="text-[80%] font-semibold">{landlord}</h4>

              <div className="flex flex-row">
                <IoCall className="text-[80%] mr-1" />
                <p className="text-[70%] text-gray-700">
                  {landlordContactDetails}
                </p>
              </div>
            </div>
          </div>
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-70 hover:opacity-100 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-70 hover:opacity-100 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
          {/* Image Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition 
                  ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          )}
          <button className="absolute top-3 right-3 hover:scale-110 transition">
            <Heart className="w-6 h-6  fill-black/40 stroke-[0]" />
          </button>
        </div>

        <div className="mt-2">
          <h3 className="text-[1rem] font-semibold">{propertyName}</h3>
          <div className="flex justify-between items-center gap-8">
            <h3 className="text-[.8rem] text-gray-500">{location}</h3>
            <div className="flex items-center">
              <FaStar className="text-yellow-300" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          <p className="text-[.8rem] text-gray-500">{distance}</p>

          <p className="font-semibold mt-1 text-sm">
            ₱{price} <span className="font-normal">per month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
