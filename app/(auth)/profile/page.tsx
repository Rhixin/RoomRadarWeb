"use client";
import Navbar from "@/components/navbar/navbar";
import React, { useState } from "react";
import { ArrowLeft, User, Lock, House, Star, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profilePic, setProfilePic] = useState("/images/landlord_placeholder.jpg");

  const sections = [
    { name: "profile", label: "Edit Profile", icon: <User className="mr-2 w-5 h-5" /> },
    { name: "password", label: "Change Password", icon: <Lock className="mr-2 w-5 h-5" /> },
    { name: "listings", label: "My Listings", icon: <House className="mr-2 w-5 h-5" /> },
    { name: "reviews", label: "My Reviews", icon: <Star className="mr-2 w-5 h-5" /> },
    { name: "settings", label: "Settings", icon: <Settings className="mr-2 w-5 h-5" /> },
    { name: "logout", label: "Log Out", icon: <LogOut className="mr-2 w-5 h-5" /> },
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Optional chaining to ensure files exists
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfilePic(reader.result as string); // Ensure result is a string
        }
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  };

  return (
    <div>
      <Navbar navbarType={2}></Navbar>

      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-md h-screen px-4 py-6">
          {/* Profile Header */}
          <div className="text-center mb-6">
            <button
              className="text-blue-500 hover:text-blue-700 absolute top-6 left-6"
              onClick={() => console.log("Go Back")}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img
              src={profilePic} // Show dynamic profile picture
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300 mx-auto mb-2"
            />
            <h1 className="text-lg font-bold">Mingyu Kim</h1>
          </div>
          {/* Navigation */}
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
                  activeSection === section.name
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {section.icon}
                <span className="flex-grow text-left">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Edit Profile Section */}
        <div className="w-3/4 bg-white shadow-md rounded-lg p-8 m-6">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form>
            {/* Edit Profile Picture */}
          <div className="mb-4 flex flex-col items-center justify-center">
            {/* Profile Picture */}
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

            {/* Change Profile Picture Text */}
            <label className="block text-gray-700 font-bold" htmlFor="profilePicture">
              Edit Profile Picture
            </label>
          </div>


            {/* Other form fields */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                type="tel"
                placeholder="661-724-7734"
              />
            </div>

            {/* Address Section */}
            <div className="mb-4">
              <h3 className="text-gray-700 font-bold mb-2">Address</h3>
              <div className="flex space-x-4">
                {/* Street */}
                <div className="w-1/3">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="street">
                    Street
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="street"
                    type="text"
                    placeholder="123 Main Street"
                  />
                </div>

                {/* Barangay */}
                <div className="w-1/3">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="barangay">
                    Barangay
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="barangay"
                    type="text"
                    placeholder="Barangay Santo Niño"
                  />
                </div>

                {/* Municipality */}
                <div className="w-1/3">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="municipality">
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
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
