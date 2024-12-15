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
import { TbBackground } from "react-icons/tb";

const MenuBar = ({ isVisible, setIsVisible }) => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { name: "profile", label: "Edit Profile", icon: <User className="mr-2" /> },
    {
      name: "password",
      label: "Change Password",
      icon: <Lock className="mr-2" />,
    },
    {
      name: "listings",
      label: "My Listings",
      icon: <House className="mr-2" />,
    },
    { name: "reviews", label: "My Reviews", icon: <Star className="mr-2" /> },
    {
      name: "settings",
      label: "Settings",
      icon: <Settings className="mr-2" />,
    },
    { name: "logout", label: "Log Out", icon: <LogOut className="mr-2" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            {/* Profile editing form */}
          </div>
        );
      case "password":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            {/* Password change form */}
          </div>
        );
      case "listings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Listings</h2>
            {/* Listings management */}
          </div>
        );
      case "reviews":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
            {/* Review management */}
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            {/* Account settings */}
          </div>
        );
      case "logout":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Log Out</h2>
            {/* Logout functionality */}
          </div>
        );
      default:
        return null;
    }
  };

  const userSession = JSON.parse(localStorage.getItem("userSession") || "null");

  return (
    <div
      className={`absolute top-0 right-0 h-screen w-[20vw] bg-white shadow-md rounded-l-lg transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ArrowLeft
        className="text-blue-500 cursor-pointer mx-4 mt-12"
        onClick={() => setIsVisible(false)}
      />
      <div className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/landlord_placeholder.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
            <h1 className="text-2xl font-bold">
              {userSession.data.profile.firstName +
                " " +
                userSession.data.profile.lastName}
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => {
                setActiveSection(section.name);

                if (section.name == "logout") {
                  localStorage.removeItem("userSession");
                  window.location.href = "/";
                }
              }}
              className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                activeSection === section.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {section.icon}
              <span className="flex-1 text-left">{section.label}</span>
              {activeSection === section.name && (
                <ArrowLeft className="rotate-180 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
