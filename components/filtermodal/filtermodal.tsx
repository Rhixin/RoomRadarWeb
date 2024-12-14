import React, { useState } from "react";
import ToggleButton from "../navbar/togglebutton";

const FilterModal = ({ isOpen, onClose }) => {
  const [selectedFilteredPrice, setSelectedFilteredPrice] = useState(1);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-1/3 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        {/* Modal Content */}
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
        <div className="flex flex-col gap-4">
          {/* Slider for selecting radius */}
          <div className="flex flex-col w-full items-start h-full gap-2">
            <label className="text-sm">Price:</label>
            <div className="w-full flex gap-4">
              <input
                type="range"
                min="1"
                max="100000"
                step="1"
                value={selectedFilteredPrice} // Fixed here (removed the extra closing brace)
                className="cursor-pointer flex-1"
                onChange={(e) => setSelectedFilteredPrice(e.target.value)}
              />
              <div className="flex flex-row gap-2 items-center">
                <p>Php</p>
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={selectedFilteredPrice}
                  className="w-24 border rounded-md text-center text-sm h-8"
                  onChange={(e) => {
                    const value = Math.min(Math.max(e.target.value, 1), 100000); // Ensure the value stays within range
                    setSelectedFilteredPrice(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm mt-8 mb-2">Ammenities:</p>
            <div className="form-group items-center">
              <div className="flex">
                <input
                  type="checkbox"
                  name="wifi"
                  className="checkbox mr-10 "
                />
                <label htmlFor="wifi" className="checkbox-label">
                  Wi-Fi
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="kitchen"
                  className="checkbox mr-10"
                />
                <label htmlFor="kitchen" className="checkbox-label">
                  Kitchen
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="washer"
                  className="checkbox mr-10"
                />
                <label htmlFor="washer" className="checkbox-label">
                  Washer
                </label>
              </div>
            </div>

            <div className="form-group items-center">
              <div className="flex">
                <input
                  type="checkbox"
                  name="parking"
                  className="checkbox mr-10"
                />
                <label htmlFor="parking" className="checkbox-label">
                  Parking
                </label>
              </div>

              <div className="flex">
                <input type="checkbox" name="ac" className="checkbox mr-10" />
                <label htmlFor="ac" className="checkbox-label">
                  A/C
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="refrigerator"
                  className="checkbox mr-10"
                />
                <label htmlFor="refrigerator" className="checkbox-label">
                  Refrigerator
                </label>
              </div>
            </div>

            <div className="form-group justify-start mt-8 mb-4 flex flex-row items-center">
              <p className="text-sm ">Allow Pets</p>
              <ToggleButton isOn={undefined} setIsOn={undefined}></ToggleButton>
            </div>
          </div>
          <div>
            <p className="text-sm mt-4 mb-2">Additional Fees:</p>
            <div className="flex items-center ">
              <input
                type="checkbox"
                name="wifi"
                className="mr-3 leading-tight"
              />
              <label htmlFor="wifi" className="mr-8">
                Wifi
              </label>

              <input
                type="checkbox"
                name="maintenance"
                className="mr-3 leading-tight"
              />

              <label htmlFor="maintenance" className="mr-8">
                Maintenance
              </label>

              <input
                type="checkbox"
                name="water"
                className="mr-3 leading-tight"
              />
              <label htmlFor="water" className="mr-8">
                Water
              </label>

              <input
                type="checkbox"
                name="electricity"
                className="mr-3 leading-tight"
              />
              <label htmlFor="electricity" className="mr-8">
                Electricity
              </label>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-500 hover:text-gray-700 cursor-pointer">
            Clear All
          </p>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-tertiary"
            onClick={onClose}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
