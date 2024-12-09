import React from "react";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import Message from "@/components/message/message";
import { CiSearch } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import ChatSystem from "../page";

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
        <Message
          messageType={1}
          content={"unsa man desisyon nimo?"}
          date={"9:55 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"Mo balhin naka aris akoang boardingg house dong????"}
          date={"9:59 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"unsa man desisyon nimo?"}
          date={"9:55 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"Mo balhin naka aris akoang boardingg house dong????"}
          date={"9:59 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"unsa man desisyon nimo?"}
          date={"9:55 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"Mo balhin naka aris akoang boardingg house dong????"}
          date={"9:59 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"unsa man desisyon nimo?"}
          date={"9:55 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={1}
          content={"Mo balhin naka aris akoang boardingg house dong????"}
          date={"9:59 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>

        <Message
          messageType={2}
          content={"Halo Good Morning Aling Merna"}
          date={"10:54 AM"}
          authorProfile={"/images/landlord_placeholder.jpg"}
        ></Message>
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
