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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-24 border-b border-faded">
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

      <div className="max-w-[2520px] mx-auto px-4 sm:px-24 border-b border-faded">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div
            className="flex flex-[80%] gap-12 group"
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
          <div className="flex-[10%] flex items-center justify-center">
            <div className="hidden md:flex items-center gap-6">
              <button className="relative flex items-center gap-2 rounded-xl border px-4 py-4 hover:shadow-md transition">
                <VscSettings className="h-4 w-4" />
                <p className="text-sm">Filters</p>
              </button>
            </div>
          </div>
          <div className="flex-[10%]">
            <div className="hidden md:flex items-center gap-6">
              <select
                className="relative flex items-center gap-2 rounded-xl border py-4 px-4 hover:shadow-md transition w-full text-sm"
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
      </div>
    </nav>
  );
}
