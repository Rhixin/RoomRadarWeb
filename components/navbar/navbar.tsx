"use client";
import "./navbar.css";

import React, { useState } from "react";
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

export default function Navbar({ navbarType }) {
  /* 
  Navbar Types
  1 -> Have Upper and Lower Navbar
  2 -> Upper Navbar only
  */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [radius, setRadius] = useState(20);

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
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

            <button className="relative flex items-center gap-2 rounded-full border px-4 py-2 hover:shadow-md transition">
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
            className="flex flex-[40%] gap-12 group"
            id="boarding-house-types"
          >
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 hover:opacity-100 transition z-10 border-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 hover:opacity-100 transition z-10 border-2">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Dormitory</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <BiBuildingHouse className="type-icon"></BiBuildingHouse>
              <p>Condo</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Apartment</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Bed Space</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Dormitory</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <BiBuildingHouse className="type-icon"></BiBuildingHouse>
              <p>Condo</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Apartment</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Bed Space</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Dormitory</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <BiBuildingHouse className="type-icon"></BiBuildingHouse>
              <p>Condo</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Apartment</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <GiFamilyHouse className="type-icon"></GiFamilyHouse>
              <p>Bed Space</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Dormitory</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <BiBuildingHouse className="type-icon"></BiBuildingHouse>
              <p>Condo</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Apartment</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <GiFamilyHouse className="type-icon"></GiFamilyHouse>
              <p>Bed Space</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Dormitory</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <BiBuildingHouse className="type-icon"></BiBuildingHouse>
              <p>Condo</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <FaHouseSignal className="type-icon"></FaHouseSignal>
              <p>Apartment</p>
            </div>

            <div className="bhouse-type hover:scale-110 transition-transform duration-200 cursor-pointer">
              <GiFamilyHouse className="type-icon"></GiFamilyHouse>
              <p>Bed Space</p>
            </div>
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
                  max="40"
                  step="1"
                  value={radius}
                  className="flex-1 cursor-pointer"
                  id="radiusSlider"
                  onChange={(e) => setRadius(e.target.value)}
                />
                <input
                  type="number"
                  min="1"
                  max="40"
                  step="1"
                  value={radius}
                  className="w-14 border rounded-md text-center text-sm h-8"
                  onChange={(e) => {
                    const value = Math.min(Math.max(e.target.value, 1), 40); // Ensure the value stays within range
                    setRadius(value);
                  }}
                />
              </div>

              <div className="w-[30%] h-full flex items-center border-l px-2 justify-around">
                <span className="text-sm whitespace-nowrap">Enable Nearby</span>
                <ToggleButton></ToggleButton>
              </div>
            </div>
          </div>

          {/* Specfic Filters modal */}
          <div className="flex-[5%] px-2 h-full flex items-center">
            <button className="relative flex items-center gap-2 rounded-xl border px-4 hover:shadow-md transition w-full h-[60%]">
              <VscSettings className="h-4 w-4" />
              <p className="text-sm">Filters</p>
            </button>
          </div>

          {/* Sort by filter */}
          <div className="flex-[10%] pl-2 h-full flex items-center">
            <select
              className="relative flex items-center gap-2 rounded-xl border px-4 hover:shadow-md transition text-sm w-full h-[60%]"
              defaultValue=""
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
