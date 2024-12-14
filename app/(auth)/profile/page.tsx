// Profile Page (app/(auth)/profile/page.tsx)
'use client';

import { useState } from 'react';
import ChangePassword from './changepassword/page';
import EditProfile from './edit/page';
import MyListings from './mylistings/page';
import Navbar from '@/components/navbar/navbar'; // Ensure Navbar only includes the sidebar once
import {
  ArrowLeft,
  User,
  Lock,
  House,
  Star,
  Settings,
  LogOut,
} from 'lucide-react';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profilePic, setProfilePic] = useState('/images/landlord_placeholder.jpg');

  const sections = [
    {
      name: 'profile',
      label: 'Edit Profile',
      icon: <User className="mr-2 w-5 h-5" />,
    },
    {
      name: 'password',
      label: 'Change Password',
      icon: <Lock className="mr-2 w-5 h-5" />,
    },
    {
      name: 'listings',
      label: 'My Listings',
      icon: <House className="mr-2 w-5 h-5" />,
    },
    {
      name: 'reviews',
      label: 'My Reviews',
      icon: <Star className="mr-2 w-5 h-5" />,
    },
    {
      name: 'settings',
      label: 'Settings',
      icon: <Settings className="mr-2 w-5 h-5" />,
    },
    {
      name: 'logout',
      label: 'Log Out',
      icon: <LogOut className="mr-2 w-5 h-5" />,
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'password':
        return <ChangePassword />;
      case 'edit':
        return <EditProfile />;
      case 'listings':
        return <MyListings />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="overflow-hidden h-screen">
      
      <div className="flex h-full bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-md h-full px-4 py-6">
          {/* Profile Header */}
          <div className="text-center mb-6">
            <button
              className="text-blue-500 hover:text-blue-700 absolute top-6 left-6"
              onClick={() => console.log('Go Back')}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img
              src={profilePic}
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
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {section.icon}
                <span className="flex-grow text-left">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 bg-white shadow-md rounded-lg p-8 m-6 overflow-y-auto">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
