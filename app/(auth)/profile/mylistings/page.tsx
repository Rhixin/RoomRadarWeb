"use client";
import Navbar from "@/components/navbar/navbar";
import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Lock,
  House,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

const MyListings = () => {
  const [activeSection, setActiveSection] = useState("listings");

  const sections = [
    {
      name: "profile",
      label: "Edit Profile",
      icon: <User className="mr-2 w-5 h-5" />,
    },
    {
      name: "password",
      label: "Change Password",
      icon: <Lock className="mr-2 w-5 h-5" />,
    },
    {
      name: "listings",
      label: "My Listings",
      icon: <House className="mr-2 w-5 h-5" />,
    },
    {
      name: "reviews",
      label: "My Reviews",
      icon: <Star className="mr-2 w-5 h-5" />,
    },
    {
      name: "settings",
      label: "Settings",
      icon: <Settings className="mr-2 w-5 h-5" />,
    },
    {
      name: "logout",
      label: "Log Out",
      icon: <LogOut className="mr-2 w-5 h-5" />,
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Cozy 1-Bedroom Apartment",
      location: "Quezon City",
      price: "$350/month",
      imageUrl: "/images/listing1.jpg",
    },
    {
      id: 2,
      title: "Spacious 2-Bedroom Condo",
      location: "Makati",
      price: "$600/month",
      imageUrl: "/images/listing2.jpg",
    },
    {
      id: 3,
      title: "Modern Studio Apartment",
      location: "Taguig",
      price: "$450/month",
      imageUrl: "/images/listing3.jpg",
    },
  ];

  return (
    <div className="overflow-hidden h-screen">
     
   
          <h2 className="text-2xl font-bold mb-4">My Listings</h2>

          <div className="grid grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{listing.title}</h3>
                  <p className="text-gray-700">{listing.location}</p>
                  <p className="text-blue-500 font-bold">{listing.price}</p>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    
  );
};

export default MyListings;
