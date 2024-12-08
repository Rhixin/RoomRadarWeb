"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import "./listingcard.css";
const ListingCard = ({
  location,
  distance,
  price,
  rating,
  images = ["/images/testing-1.avif"],
  isFavorite,
  owner,
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

  return (
    <div className="group">
      <div className="relative cursor-pointer">
        <div className="w-full aspect-square rounded-xl overflow-hidden relative">
          <Image
            src={images[currentImageIndex]}
            alt={location}
            fill
            className="object-cover w-full h-full group-hover:scale-110 transition"
          />
          s{/* Lanlord Holder */}
          <div
            className={`absolute left-4 top-[70%] flex flex-row  bg-white rounded-full landlord-holder ${
              showDetails ? "landlord-expand" : ""
            }`}
          >
            <img
              className="w-14 h-14 rounded-full cursor-pointer"
              src="/images/landlord_placeholder.jpg"
              alt="profile"
              onMouseEnter={() => setShowDetails(true)}
              onMouseLeave={() => setShowDetails(false)}
            />

            {/* Animated details */}
            <div
              className={`ml-4 mr-6 text-tertiary flex-col justify-center items-center ${
                showDetails ? "showDetails" : "hideDetails"
              }`}
            >
              <h4 className="text-[.9rem] font-semibold">Aling Merna</h4>
              <p className="text-[.7rem] text-gray-700">📞09271935386</p>
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
          <div className="flex justify-between items-center">
            <h3 className="text-sm">{location}</h3>
            <div className="flex items-center gap-1">
              <span>★</span>
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
