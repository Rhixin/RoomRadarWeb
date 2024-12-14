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

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profilePic, setProfilePic] = useState(
    "/images/landlord_placeholder.jpg"
  );

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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfilePic(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col">
      
        {/* Main Content */}
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form>
            {/* Edit Profile Picture */}
            <div className="mb-4 flex flex-col items-center justify-center">
              <div className="relative mb-4">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-2 border-gray-300"
                />
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
              <label
                className="block text-gray-700 font-bold"
                htmlFor="profilePicture"
              >
                Edit Profile Picture
              </label>
            </div>

            {/* Other form fields */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Thomas"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Hardison"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="thomas@dayrep.com"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="contactNumber"
              >
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                type="tel"
                placeholder="661-724-7734"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-gray-700 font-bold mb-2">Address</h3>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="street"
                  >
                    Street
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="street"
                    type="text"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="w-1/3">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="barangay"
                  >
                    Barangay
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="barangay"
                    type="text"
                    placeholder="Barangay Santo Niño"
                  />
                </div>

                <div className="w-1/3">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="municipality"
                  >
                    Municipality
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="municipality"
                    type="text"
                    placeholder="Quezon City"
                  />
                </div>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-end m-12">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            </div>

          </form>
        </div>
  );
};

export default Profile;
