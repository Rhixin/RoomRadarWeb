"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, User, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-14">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="relative w-12 sm:w-16 h-8 sm:h-10">
              <Image
                src="/images/RoomRadarLogo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
            <Link
              href="/host"
              className="block px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              RoomRadar your home
            </Link>
            <div className="px-4 py-2 flex items-center gap-2">
              <User className="h-5 w-5" />
              <p className="font-bold">Zian Rinzler Valles</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
