"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import { Share, Heart, Star, MapPin, Image } from "lucide-react";

const ListingDetails = () => {
  return (
    <>
      <Navbar navbarType={2} />

      <div className="py-8">
        <div className="max-w-[2520px] mx-auto px-4 sm:px-24">
          {/* Header Section */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-2">Rizwill Apartelle</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>4.9</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Makati, Metro Manila</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
                  <Share className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Image Grid Placeholder */}
            <div className="grid grid-cols-4 gap-2 h-[60vh]">
              <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
                <img
                  src="/images/testing-1.avif"
                  alt="Main property view"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative">
                <img
                  src="/images/testing-2.avif"
                  alt="Property view 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative rounded-tr-xl overflow-hidden">
                <img
                  src="/images/testing-3.avif"
                  alt="Property view 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative">
                <img
                  src="/images/testing-1.avif"
                  alt="Property view 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative rounded-br-xl overflow-hidden group">
                <img
                  src="/images/testing-1.avif"
                  alt="Property view 5"
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute bottom-4 right-4 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition"
                  onClick={() => {
                    /* Add your show all photos logic here */
                  }}
                >
                  <Image className="w-4 h-4" />
                  <span>Show all photos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
