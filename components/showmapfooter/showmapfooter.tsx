"use client";
import { FaMapMarked } from "react-icons/fa";

import React from "react";

const ShowMapFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center py-8">
      <button className="relative flex items-center gap-2 bg-tertiary rounded-full px-5 py-5 hover:scale-110 transition-transform duration-200 text-white">
        <p className="text-sm">Map View</p>
        <FaMapMarked className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ShowMapFooter;
