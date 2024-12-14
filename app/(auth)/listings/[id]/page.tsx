"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import { Share, Heart, Star, MapPin, Image } from "lucide-react";
import { NavbarProvider } from "@/components/providers/navbarprovider";
import PhotoModal from "@/components/photoModal/photoModal";
import MainSectionTitle from "@/components/listingdetails/mainsectiontitle";
import AboutPlace from "@/components/listingdetails/aboutplace";
import PlaceAmenities from "@/components/listingdetails/placeamenities";
import LandlordDetails from "@/components/listingdetails/landlorddetails";
import LocationPreview from "@/components/listingdetails/locationpreview";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";

const ListingDetails = () => {
  const [showModal, setShowModal] = React.useState(false);
  const images = [
    "/images/testing-1.avif",
    "/images/testing-2.avif",
    "/images/testing-3.avif",
    "/images/testing-1.avif",
    "/images/testing-1.avif",
  ];
  const listing = {
    id: 9,
    propertyName: "Rizwill Apartelle",
    street: "Tres De Abril",
    barangay: "Labangon",
    municipality: "Cebu",
    province: "Cebu",
    country: "Philippines",
    postalCode: "6012",
    latitude: 10.293638797224038,
    longitude: 123.90174865722656,
    propertyType: "Condomminum",
    numOfBeds: 3,
    numOfBedrooms: 5,
    numOfBathrooms: 2,
    monthlyRate: 0,
    landLordId: 7,
    description: "",
  };

  return (
    <>
      <Navbar navbarType={2}></Navbar>

      <div className="py-8">
        <div className="max-w-[2520px] mx-auto px-4 sm:px-24">
          {/* Header Section */}

          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  {listing.propertyName}
                </h1>
                <div className="flex flex-row text-sm gap-8">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {listing.street +
                        ", " +
                        listing.barangay +
                        ", " +
                        listing.municipality +
                        ", " +
                        listing.province +
                        ", " +
                        listing.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>4.9</span>
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
                  onClick={() => setShowModal(true)}
                >
                  <Image className="w-4 h-4" />
                  <span>Show all photos</span>
                </button>
              </div>

              <PhotoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                images={images}
              />
            </div>
          </div>

          <div className="mt-28"></div>

          <LandlordDetails></LandlordDetails>

          <div className="mt-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                About this place
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex  gap-4 text-lg pt-4 flex-col text-tertiary ">
                <span className="flex gap-2 items-center">
                  <BsDoorOpenFill></BsDoorOpenFill>
                  <h1>{listing.numOfBedrooms} Rooms</h1>
                </span>
                <span className="flex gap-2 items-center">
                  <FaBed></FaBed>
                  <h1>{listing.numOfBeds} Beds</h1>
                </span>
                <span className="flex gap-2 items-center">
                  <FaShower></FaShower>
                  <h1>{listing.numOfBathrooms} Bathrooms</h1>
                </span>
              </div>
            </div>
          </div>

          <PlaceAmenities />

          <LocationPreview></LocationPreview>
          {/* <iframe
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8
    &q=Space+Needle,Seattle+WA"
            title="Embedded Google Map"
          ></iframe>

          <StreetViewPanorama lat={10.293647} lng={123.867631} /> */}
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
