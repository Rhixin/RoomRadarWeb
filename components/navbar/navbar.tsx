"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, User, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-8">
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
            <span className="text-base sm:text-lg font-bold">RoomRadar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/host"
              className="text-sm font-medium hover:text-gray-600"
            >
              RoomRadar your home
            </Link>
            <button className="flex items-center gap-2 rounded-full border px-4 py-2 hover:shadow-md transition">
              <Menu className="h-5 w-5" />
              <User className="h-5 w-5" />
              <p className="font-bold">Zian Rinzler Valles</p>
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
