"use client";
import { FaMapMarked } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";

import React, { useState } from "react";
import CreateListingForm from "../createlisting/createlistingform";

const ShowMapFooter = ({ footerType }) => {
  const [showModal, setShowModal] = useState(false);
  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleToggleFooter = () => {
    if (footerType === 1) {
      window.location.href = "/map";
    } else {
      window.location.href = "/home";
    }
  };

  return (
    <>
      <CreateListingForm
        showModal={showModal}
        setShowModal={setShowModal}
      ></CreateListingForm>

      <div className="fixed bottom-0 left-0 w-full flex justify-center py-8">
        {/* Map View Button */}
        <button
          className="relative flex items-center gap-2 bg-tertiary rounded-full px-5 py-5 hover:scale-110 transition-transform duration-200 text-white"
          onClick={handleToggleFooter}
        >
          <p className="text-sm">
            {footerType === 1 ? "Map View" : "List View"}
          </p>

          {footerType === 1 ? (
            <FaMapMarked className="h-5 w-5" />
          ) : (
            <FaListUl className="h-5 w-5" />
          )}
        </button>

        <div>
          {/* Your button to toggle the modal */}
          <button
            className="absolute right-6 bottom-8 flex items-center gap-2 bg-tertiary rounded-full p-6 hover:scale-110 transition-transform duration-200 text-white"
            onClick={toggleModal} // Handle button click
          >
            <IoAdd className="text-[2rem]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowMapFooter;
