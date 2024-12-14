"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import {
  Share,
  Heart,
  Star,
  MapPin,
  Image,
  Wifi,
  CookingPot,
  Wind,
  Home,
  ParkingSquare,
  Refrigerator,
  Cat,
  Droplet,
  Droplets,
  Construction,
  Zap,
} from "lucide-react";
import { NavbarProvider } from "@/components/providers/navbarprovider";
import PhotoModal from "@/components/photoModal/photoModal";
import MainSectionTitle from "@/components/listingdetails/mainsectiontitle";
import AboutPlace from "@/components/listingdetails/aboutplace";
import PlaceAmenities from "@/components/listingdetails/placeamenities";
import LandlordDetails from "@/components/listingdetails/landlorddetails";
import LocationPreview from "@/components/listingdetails/locationpreview";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { FaShower } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import StreetViewPanorama from "@/components/panorama/streetviewpanorama";


const ListingDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    monthlyRate: 4500,
    landLordId: 7,
    description:
      "Sunny Stay Boarding House offers a comfortable and affordable living experience perfect for students, professionals, and travelers. Located in the heart of the city, it provides easy access to schools, workplaces, and shopping centers. The boarding house features clean and spacious rooms, each equipped with a bed, desk, and closet. Common areas include a fully furnished kitchen, a cozy living room, and a rooftop area with a stunning city view. High-speed Wi-Fi and 24/7 security ensure a convenient and safe stay for all residents. Flexible lease terms are available to suit your needs.",
    rulesArray: [
      "Dili puydi magdala uyab",
      "Bawal mag tagay",
      "Additional Fee sa late mobayad",
      "Di puydi magdala ug barkada",
      "Curfew is 11PM",
    ],
    isAllowPets: true,
    checkedAmenities: ["wifi", "kitchen", "washer"],
    checkedAdditionalFees: ["water", "electricity", "maintenance"],
  };

  const ammenitiesIcons = {
    wifi: { icon: <Wifi size={24} />, label: "WiFi" },
    washer: { icon: <CookingPot size={24} />, label: "Washer" },
    ac: { icon: <Wind size={24} />, label: "Air Conditioning" },
    kitchen: { icon: <Home size={24} />, label: "Kitchen" },
    parking: { icon: <ParkingSquare size={24} />, label: "Parking" },
    refrigerator: { icon: <Refrigerator size={24} />, label: "Refrigerator" },
    pet: { icon: <Cat size={24} />, label: "Pets Allowed" },
  };

  const additionalFees = {
    wifi: { icon: <Wifi size={24} />, label: "WiFi" },
    water: { icon: <Droplets size={24} />, label: "Water" },
    maintenance: { icon: <Construction size={24} />, label: "Maintenance" },
    electricity: { icon: <Zap size={24} />, label: "Electric" },
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        


        <div className="mt-28 flex flex-row justify-between">
            <div>
              <h1 className="text-[25px] font-bold">
                {listing.propertyType + " in " + listing.barangay + ", " + listing.municipality}
              </h1>
            <section className="mt-5">
              <div className="mr-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/landlord_placeholder.jpg"
                      alt="Landlord"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                      <div>
                        <h3 className="text-xl font-semibold">Aling Merna</h3>
                        <p className="text-gray-600">Landlord</p>
                      </div>
                  </div>
                  <div className="flex space-x-4">
                    <RiMessage2Fill className="text-2xl text-tertiary cursor-pointer hover:scale-110 transition" />
                    <IoCallSharp className="text-2xl text-tertiary cursor-pointer hover:scale-110 transition" />
                  </div>
                </div>
                <hr className="mt-5"></hr>
                <h1 className="text-m font-bold mt-3">House Rules</h1>
                  {listing.rulesArray.map((rule, index) => (
                    <div key={index} className="flex flex-row my-4 gap-2">
                      <span className="font-semibold text-primary">{index + 1}.</span>
                      <span>{rule}</span>
                    </div>
                  ))}

                <hr className="mt-5"></hr>

                {/* description */}
                <div className="mt-5">
                  <p className="w-full">
                    {listing.description
                      .split(' ') 
                      .slice(0, 35) 
                      .join(' ') 
                      + (listing.description.split(' ').length > 20 ? '...' : '')} 
                  </p>
                  ...
                  <br></br>
                  {listing.description.split(" ").length > 35 && (
                    <button
                      onClick={toggleModal}
                      className="mt-2 font-bold underline"
                    >
                      Show More >
                    </button>
                  )}
                </div>

                <hr className="mt-5"></hr>

                {isModalOpen && (
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-1/2 max-w-lg relative">
                      {/* Close Button (X) */}
                      <button
                        onClick={toggleModal}
                        className="absolute top-2 right-2 text-2xl font-bold text-black hover:text-red-500"
                      >
                        x
                      </button>

                      <h2 className="text-2xl font-semibold mb-4">About this space</h2>
                      <p className="text-justify">{listing.description}</p>
                      </div>
                  </div>
                )}

                {/* LOCATION */}
                <div className="mt-12">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    Location
                  </h2>
                      <iframe
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8&q=${listing.latitude},${listing.longitude}`}
                        title="Embedded Google Map"
                      ></iframe>
                </div>

                
              </div>
            </section>
        </div>

        <div className="border border-gray-300 rounded-[12px] p-6 w-full md:w-3/4 h-fit shadow-lg sticky top-60 bg-white h-full">
          <div className="justify-between items-center">
              <div>
                <span className="text-4xl font-bold text-primary">
                ₱ {listing.monthlyRate}
                </span>
                <span className="text-gray-600"> / month</span>
              </div>
              <div className="flex space-x-4 text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                  <BsDoorOpenFill />
                  <span>{listing.numOfBedrooms} Rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBed />
                  <span>{listing.numOfBeds} Beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShower />
                  <span>{listing.numOfBathrooms} Bathrooms</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-8">
              {/* AMMENETIES */}
              <div className="flex-1">
                <h2 className="text-sm font-semibold mb-4">
                What this place offers
                </h2>
                <div>
                  {listing.checkedAmenities.map((item) => (
                    <div key={item} className="flex flex-row my-4 gap-2">
                      {ammenitiesIcons[item].icon} {ammenitiesIcons[item].label}
                    </div>
                  ))}
                </div>

                {listing.isAllowPets && (
                  <div className="flex flex-row my-4 gap-2">
                    {ammenitiesIcons.pet.icon} {ammenitiesIcons.pet.label}
                  </div>
                )}
              </div>

              {/* ADDITIONAL COSTS */}
              <div className="flex-1">
                <h2 className="sm:text font-semibold mb-4">
                  Additional Fees
                </h2>
                <div>
                  {listing.checkedAdditionalFees.map((item) => (
                    <div key={item} className="flex flex-row my-4 gap-2">
                      {additionalFees[item].icon} {additionalFees[item].label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
                   
          

          {/* PANORMA */}
          <div className="flex flex-col mt-24 mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Where you'll be
            </h2>
            <div className="flex items-center justify-center">
              <StreetViewPanorama
                lat={listing.latitude}
                lng={listing.longitude}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
