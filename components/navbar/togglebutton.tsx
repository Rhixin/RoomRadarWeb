"use client";
import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button
      onClick={toggleHandler}
      className={`relative w-12 h-6 rounded-full border-2 transition ${
        isOn ? "bg-primary border-primary" : "bg-gray-300 border-gray-300"
      }`}
    >
      <div
        className={`left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
