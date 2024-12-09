import React from "react";
import { Wifi, Refrigerator, Wind, Home, ParkingSquare, Cat, CookingPot } from "lucide-react";

const PlaceAmenities = () => {
  const amenities = [
    { icon: <Wifi size={24} />, label: "Wi-Fi" },
    { icon: <CookingPot size={24} />, label: "Washer" },
    { icon: <Wind size={24} />, label: "A/C" },
    { icon: <Home size={24} />, label: "Kitchen" },
    { icon: <ParkingSquare size={24} />, label: "Parking" },
    { icon: <Refrigerator size={24} />, label: "Refrigerator" },
    { icon: <Cat size={24} />, label: "Allow pets" }
  ];

  return (
    <div className="mt-8 ">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-gray-600">
              {item.icon}
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceAmenities;