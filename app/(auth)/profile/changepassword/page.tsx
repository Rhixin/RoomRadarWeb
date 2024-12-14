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
  Eye,
  EyeOff,
} from "lucide-react";

const ChangePassword = () => {
  const [activeSection, setActiveSection] = useState("password");
  const [profilePic, setProfilePic] = useState(
    "/images/landlord_placeholder.jpg"
  );
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="overflow-hidden h-screen">
     
        {/* Main Content */}
       
          <h2 className="text-2xl font-bold mb-4">Change Password</h2>
          <form>
            {/* Current Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmNewPassword"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmNewPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
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

export default ChangePassword;
