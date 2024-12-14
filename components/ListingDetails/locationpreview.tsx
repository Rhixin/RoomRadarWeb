"use client";
import React, { useEffect, useState } from "react";
import StreetViewPanorama from "../panorama/streetviewpanorama";

const LocationPreview = () => {
  return (
    <div className="flex flex-col mt-14">
      <>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Where you'll be
        </h2>
        <div className="flex items-center justify-center">
          <StreetViewPanorama lat={10.293647} lng={123.867631} />
        </div>
      </>
    </div>
  );
};

export default LocationPreview;
