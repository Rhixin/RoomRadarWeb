"use client";
import "./navbar.css";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Globe, Menu, User, X } from "lucide-react";
import { GiFamilyHouse } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";
import { FaHouseSignal } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineSort } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import ToggleButton from "./togglebutton";
import { CiSearch } from "react-icons/ci";
import { NavbarContext } from "../providers/navbarprovider";
import CreateListingForm from "../createListing/createlistingform";
import MenuBar from "../menubar/menubar";
import FilterModal from "../filtermodal/filtermodal";

export default function Navbar({ navbarType: initialNavbarType }) {
  /* 
  Navbar Types
  1 -> Have Upper and Lower Navbar
  2 -> Upper Navbar only
  */
  const [navbarType, setNavbarType] = useState(initialNavbarType);

  //filter modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  //navbar context values for global accessibility
  const context = useContext(NavbarContext);

  if (!context) return null;

  const {
    isMenuOpen,
    setIsMenuOpen,
    isOn,
    setIsOn,
    isVisible,
    setIsVisible,
    //FILTERS
    radius,
    setRadius,
    selectedType,
    setSelectedType,
    selectedSortBy,
    setSelectedSortBy,
    isAllowPets,
    setIsAllowPets,
    //group filter modal
    priceRange,
    setPriceRange,
    amenities,
    setAmenities,
    additionalFees,
    setAdditionalFees,
    //Summary
    selectedFilters,
    setSelectedFilters,
  } = context;

  //Scrolling in property types
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        amenities={amenities}
        setAmenities={setAmenities}
        additionalFees={additionalFees}
        setAdditionalFees={setAdditionalFees}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        radius={radius}
        setRadius={setRadius}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedSortBy={selectedSortBy}
        setSelectedSortBy={setSelectedSortBy}
        isOn={isOn}
        setIsOn={setIsOn}
        isAllowPets={isAllowPets}
        setIsAllowPets={setIsAllowPets}
      />

      <div className="max-w-[2520px] mx-auto px-4 sm:px-24 border-b border-faded">
        {/* Upper Navbar Section */}
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="relative w-10 sm:w-14 h-7 sm:h-9">
              <Image
                src="/images/RoomRadarLogo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
            <span className="text-base sm:text-xl tracking-widest "></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search bar */}
            <div className="sticky w-[100%] py-2 pr-8 pl-2">
              <input
                type="text"
                placeholder="Search Boarding House..."
                className="w-full py-3 pl-12 pr-4 text-sm text-gray-800 bg-gray-100 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition duration-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <CiSearch className="text-2xl"></CiSearch>
              </svg>
            </div>
            {/* Messages Icon */}
            <span className="relative flex items-center justify-center w-8 h-8 text-white hover:scale-110 transition-transform duration-200 cursor-pointer">
              <RiMessage2Fill className="text-tertiary text-[1.5rem]"></RiMessage2Fill>
              <span className="absolute top-[-4] right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full">
                1
              </span>
            </span>

            {/* Notifications Icon */}
            <span className="relative flex items-center justify-center w-8 h-8 text-white hover:scale-110 transition-transform duration-200 cursor-pointer">
              <IoNotifications className="text-tertiary text-[1.5rem]"></IoNotifications>
              <span className="absolute top-[-4] right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full">
                4
              </span>
            </span>

            <button
              className="relative flex items-center gap-2 rounded-full border px-4 py-2 hover:shadow-md transition"
              onClick={() => setIsVisible(true)}
            >
              <Menu className="h-4 w-4" />

              {/* Profile Circle */}
              <span className="relative flex items-center justify-center w-8 h-8 bg-tertiary text-white font-bold rounded-full">
                Z{/* Notification Badge */}
                <span className="absolute top-[-4] right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full">
                  1
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <div className="px-4 py-2 flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </div>
          </div>
        )}
      </div>

      {/* Lower Navbar Section */}
      <div
        className={`max-w-[2520px] mx-auto px-4 sm:px-24 border-b border-faded ${
          navbarType == 2 ? "hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div
            className="relative flex flex-[40%] group hide-scrollbar scroll-smooth"
            id="boarding-house-types"
          >
            {/* Left Scroll Button */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 hover:opacity-100 transition z-10 border-2"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-12 overflow-x-auto scroll-smooth hide-scrollbar px-8"
            >
              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "apartment" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "apartment" ? null : "apartment"
                  )
                }
              >
                <FaHouseSignal className="type-icon" />
                <p
                  className={`${
                    selectedType === "apartment"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Apartment
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "house" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "house" ? null : "house"
                  )
                }
              >
                <BiBuildingHouse className="type-icon" />
                <p
                  className={`${
                    selectedType === "house"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  House
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "condominium" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "condominium" ? null : "condominium"
                  )
                }
              >
                <FaHouseSignal className="type-icon" />
                <p
                  className={`${
                    selectedType === "condominium"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Condominium
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "townhouse" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "townhouse" ? null : "townhouse"
                  )
                }
              >
                <FaHouseSignal className="type-icon" />
                <p
                  className={`whitespace-nowrap ${
                    selectedType === "townhouse"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Town House
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "sharedroom" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "sharedroom" ? null : "sharedroom"
                  )
                }
              >
                <FaHouseSignal className="type-icon" />
                <p
                  className={`whitespace-nowrap ${
                    selectedType === "sharedroom"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Shared Room
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "bedspace" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "bedspace" ? null : "bedspace"
                  )
                }
              >
                <BiBuildingHouse className="type-icon" />
                <p
                  className={`whitespace-nowrap ${
                    selectedType === "bedspace"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Bed Space
                </p>
              </div>

              <div
                className={`bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer ${
                  selectedType === "dormitory" ? "scale-125" : ""
                }`}
                onClick={() =>
                  setSelectedType((prevType: string) =>
                    prevType === "dormitory" ? null : "dormitory"
                  )
                }
              >
                <FaHouseSignal className="type-icon" />
                <p
                  className={`${
                    selectedType === "dormitory"
                      ? "selected-type"
                      : "not-selected-type"
                  }`}
                >
                  Dormitory
                </p>
              </div>
            </div>

            {/* Right Scroll Button */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 hover:opacity-100 transition z-10 border-2"
              onClick={scrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Show Nearby within this km radius filter */}
          <div className="flex-[45%] px-2 h-full flex items-center">
            <div className="relative flex items-center rounded-xl border hover:shadow-md transition text-sm w-full h-[60%] px-2">
              {/* Slider for selecting radius */}
              <div className="flex w-[70%] items-center px-2 h-full gap-2">
                <label className="text-sm">Radius (km):</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={radius}
                  className="flex-1 cursor-pointer"
                  id="radiusSlider"
                  onChange={(e) => setRadius(e.target.value)}
                />
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={radius}
                  className="w-14 border rounded-md text-center text-sm h-8"
                  onChange={(e) => {
                    const value = Math.min(Math.max(e.target.value, 1), 100); // Ensure the value stays within range
                    setRadius(value);
                  }}
                />
              </div>

              <div className="w-[30%] h-full flex items-center border-l px-2 justify-around">
                <span className="text-sm whitespace-nowrap">Enable Nearby</span>
                <ToggleButton isOn={isOn} setIsOn={setIsOn}></ToggleButton>
              </div>
            </div>
          </div>

          {/* Specfic Filters modal */}
          <div
            className="flex-[5%] px-2 h-full flex items-center"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <button className="relative flex items-center gap-2 rounded-xl border px-4 hover:shadow-md transition w-full h-[60%]">
              <VscSettings className="h-4 w-4" />
              <p className="text-sm">Filters</p>
            </button>
          </div>

          {/* Sort by filter */}
          <div className="flex-[10%] pl-2 h-full flex items-center">
            <select
              className="relative flex items-center gap-2 rounded-xl border px-4 hover:shadow-md transition text-sm w-full h-[60%]"
              value={selectedSortBy}
              onChange={(e) => setSelectedSortBy(e.target.value)}
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="none">None</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="distance">Distance</option>
            </select>
          </div>
        </div>
      </div>

      <MenuBar isVisible={isVisible} setIsVisible={setIsVisible}></MenuBar>
    </nav>
  );
}
