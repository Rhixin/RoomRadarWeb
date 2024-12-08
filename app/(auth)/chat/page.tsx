import "./chat.css";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
const Chat = () => {
  return (
    <>
      <Navbar navbarType={2}></Navbar>

      <div className="h-[90vh] px-4 sm:px-24 flex flex-col">
        <div className="flex justify-start py-4 border-b">
          <div className="relative w-[30%] flex py-2">
            <input
              type="text"
              placeholder="Search conversation..."
              className="w-full py-3 pl-12 pr-4 text-sm text-gray-800 bg-gray-100 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition duration-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <CiSearch className="text-2xl"></CiSearch>
            </svg>
          </div>
          <div className="w-[70%] px-8">
            <div className="w-14">
              <Image
                src="/images/landlord_placeholder.jpg"
                alt="chatmate"
                width={48}
                height={48}
                className="object-cover w-full h-full cursor-pointer hover:scale-110 transition rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-row overflow-y-auto">
          <div className="w-[30%] h-full flex items-center flex-col overflow-y-auto">
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>

            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>

            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>

            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>

            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
            <div className="w-[100%] min-h-16 rounded-md hover:bg-gray-200 transition cursor-pointer">
              sadasda
            </div>
          </div>

          <div className="w-[70%] h-full"></div>
        </div>
      </div>
    </>
  );
};

export default Chat;
