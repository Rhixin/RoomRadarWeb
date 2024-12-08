import Navbar from "@/components/navbar/navbar";
import React from "react";
import { CiSearch } from "react-icons/ci";
import ConvoPreview from "@/components/convopreview/convopreview";
import { IoMdCall } from "react-icons/io";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar navbarType={2}></Navbar>

      <div className="h-[90vh] px-4 sm:px-24 flex flex-col overflow-y-hidden">
        <div className="flex-1 w-full flex flex-row pt-2 overflow-y-hidden">
          <div className="w-[30%] overflow-y-hidden">
            <div className="sticky w-[100%] py-2 pr-8 pl-2">
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

            <div className="h-[82vh] flex items-center flex-col overflow-y-auto">
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
              <ConvoPreview></ConvoPreview>
            </div>
          </div>

          <div className="w-[70%] pl-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ChatLayout;
