"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import { Share, Heart, Star, MapPin, Image } from "lucide-react";
import { NavbarProvider } from "@/components/providers/navbarprovider";
import PhotoModal from "@/components/photoModal/photoModal";
import MainSectionTitle from "@/components/listingdetails/mainsectiontitle";
import AboutPlace from "@/components/listingdetails/aboutplace";
import PlaceAmenities from "@/components/listingdetails/placeamenities";
import StreetViewPanorama from "@/components/panorama/streetviewpanorama";

const ListingDetails = () => {
  const [showModal, setShowModal] = React.useState(false);
  const images = [
    "/images/testing-1.avif",
    "/images/testing-2.avif",
    "/images/testing-3.avif",
    "/images/testing-1.avif",
    "/images/testing-1.avif",
  ];
  return (
    <>
      <Navbar navbarType={2}></Navbar>

      <script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8&callback=initialize`}
        async
        defer
      ></script>

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

          <MainSectionTitle
            title="Room in Cebu City, Philippines"
            beds={2}
            bathrooms={2}
            hostName="Justin Barro"
            hostType="RoomRadar"
            hostingYears={10}
            hostImage="/images/test-justin.jpg"
          />

          <AboutPlace />
          <PlaceAmenities />
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
          ></iframe> */}

          <StreetViewPanorama lat={10.293647} lng={123.867631} />
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
