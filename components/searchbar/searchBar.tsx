"use client";
import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Mock suggestions - replace with actual API call
  const mockLocations = ["CIT, Cebu", "SM Cebu City"];

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = mockLocations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full relative">
      <div className="flex items-center border rounded-full shadow-sm hover:shadow-md transition bg-white">
        <div className="flex-grow px-6 py-3">
          <input
            type="text"
            placeholder="Search locations..."
            className="w-full outline-none text-gray-900"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <button className="bg-[#063D98] text-white p-3 rounded-full mr-2">
          <Search className="h-4 w-4" />
        </button>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute w-full bg-white mt-1 rounded-xl shadow-md border z-50 ">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer rounded-xl"
              onClick={() => {
                setSearchTerm(suggestion);
                setIsOpen(false);
              }}
            >
              <MapPin className="h-5 w-5 text-gray-400" />
              <span>{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}