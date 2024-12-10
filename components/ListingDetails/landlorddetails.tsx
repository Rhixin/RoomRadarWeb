import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";

const LandlordDetails = () => {
  return (
    <div className="mt-8 border-y border-faded py-6 flex flex-row justify-between">
      <div className="flex gap-4 flex-row items-center">
        <img
          className="w-16 rounded-full cursor-pointer"
          src="/images/landlord_placeholder.jpg"
          alt="profile"
        />

        <span>
          <p className="text-2xl font-bold">Aling Merna</p>
          <p className="text-sm">Landlord</p>
        </span>
      </div>
      <span className="mx-8 flex items-center gap-6">
        <RiMessage2Fill className="text-3xl hover:scale-110 transition  text-tertiary cursor-pointer" />
        <IoCallSharp className="text-3xl hover:scale-110 transition  text-tertiary cursor-pointer" />
      </span>
    </div>
  );
};

export default LandlordDetails;
