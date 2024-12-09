import React from "react";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import Message from "@/components/message/message";
import { CiSearch } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import ChatSystem from "../page";
import { FaExclamationTriangle } from "react-icons/fa";

const messages = [
  {
    messageType: 1,
    content: "Unsa man desisyon nimo?",
    date: "9:55 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Halo, Good Morning Aling Merna.",
    date: "10:00 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 1,
    content: "Balhin naka diri sa akong boarding house?",
    date: "10:05 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Nagplano pa ko, pero murag okay man ang imong place.",
    date: "10:10 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 1,
    content: "Akoang lugar limpyo ug naa’y maayong security.",
    date: "10:15 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Pila gani ang monthly rent, Aling Merna?",
    date: "10:20 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 1,
    content: "3,500 ra, apil na tubig ug kuryente.",
    date: "10:25 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Mura’g fair deal ra siya. Pwede nako tanawon ang room?",
    date: "10:30 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 1,
    content: "Oo, available ko unya hapon. Adto lang diri.",
    date: "10:35 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Salamat, magkita lang ta unya!",
    date: "10:40 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Salamat, magkita lang ta unya!",
    date: "10:40 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Salamat, magkita lang ta unya!",
    date: "10:40 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
  {
    messageType: 2,
    content: "Salamat, magkita lang ta unya!",
    date: "10:40 AM",
    authorProfile: "/images/landlord_placeholder.jpg",
  },
];

const Conversation = () => {
  return (
    <ChatSystem>
      <div className="w-full px-8 flex items-center gap-3 border-b border-faded py-2">
        <div className="w-14">
          <Image
            src="/images/landlord_placeholder.jpg"
            alt="chatmate"
            width={48}
            height={48}
            className="object-cover w-full h-full cursor-pointer hover:scale-110 transition rounded-full"
          />
        </div>

        <div className="flex-1">
          <p className="text-[1.5rem] font-semibold leading-tight">
            Aling Merna
          </p>
          <p className="text-[.8rem] leading-3">Active now</p>
        </div>

        <div>
          <IoMdCall className="text-3xl"></IoMdCall>
        </div>
      </div>

      <div className="h-[80%] overflow-y-auto px-8">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-[100%]">
            <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-md text-center text-sm text-gray-700">
              <div className="mb-4 flex justify-center items-center">
                <FaExclamationTriangle className="text-[5rem] text-primary" />
              </div>
              <p className="mb-2 font-medium">No conversations yet?</p>
              <p className="text-sm text-gray-600">
                Connect with landlords using our chat messaging feature.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message
              key={index} // Use a unique `key`, preferably an ID if available
              messageType={message.messageType}
              content={message.content}
              date={message.date}
              authorProfile={message.authorProfile}
            />
          ))
        )}
      </div>

      <div className="sticky w-[100%] py-2 pl-8 h-auto">
        <div className="flex">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-[90%] py-3 pl-12 pr-4 text-sm text-gray-800 bg-gray-100 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition duration-300"
          />
          <div className="flex justify-center items-center flex-1">
            <IoSendSharp className="text-[2rem] text-tertiary hover:scale-110 transition cursor-pointer" />
          </div>
        </div>
      </div>
    </ChatSystem>
  );
};

export default Conversation;
