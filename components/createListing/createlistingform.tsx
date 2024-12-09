"use client";
import "./createlisting.css";

import React, { useState } from "react";
import StepIndicator from "../registration/stepindicator";
import { IoMdArrowBack } from "react-icons/io";
import CreateListing from "@/app/(auth)/listings/create/page";
import ToggleButton from "../navbar/togglebutton";
import PhotoUploader from "./uploadphoto";

const CreateListingForm = ({}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsSize = 4;

  return (
    <div className="form-container">
      <div className="flex">
        <h3 className="flex-1 justify-center text-center">Create Listing</h3>
      </div>

      <StepIndicator
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={stepsSize}
      />

      <div className="steps-container">
        <div className={`step-content ${currentStep === 1 ? "active" : ""}`}>
          <div className="form-group">
            <div>
              <h3 className="font-bold flex-1 pt-5 mb-2">Listing Details</h3>
              <label htmlFor="name" className="label">
                Property Name
              </label>
              <input
                type="text"
                id="property-name"
                placeholder="Enter Property Name"
                className="input"
              />
              <div className="form-group">
                <label htmlFor="property-type" className="label">
                  Property Type
                </label>
              </div>
              <select
                id="property-type"
                name="property-type"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-5"
              >
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">
              {" "}
              Address{" "}
            </label>
          </div>

          <div className="form-group items-center">
            <div>
              <input
                type="state"
                id="state"
                placeholder="State / Province"
                className="input"
              />
            </div>

            <div>
              <input
                type="city"
                id="city"
                placeholder="City / Municipality"
                className="input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <input
                type="barangay"
                id="barangay"
                placeholder="Barangay"
                className="input"
              />
            </div>

            <div>
              <input
                type="street"
                id="street"
                placeholder="Street"
                className="input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="rab" className="label">
                Room and Beds
              </label>
              <input
                type="number"
                id="rab"
                placeholder="Number of Beds"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="bathrooms" className="label">
                Bathrooms
              </label>

              <input
                type="number"
                id="bathrooms"
                placeholder="Number of Bathrooms"
                className="input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="amenities" className="label">
              Amenities
            </label>
          </div>

          <div className="form-group items-center">
            <div className="flex">
              <input
                type="checkbox"
                id="wifi"
                name="wifi"
                className="checkbox mr-10"
              />
              <label htmlFor="wifi" className="checkbox-label">
                Wi-Fi
              </label>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                id="kitchen"
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
                id="washer"
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
                id="parking"
                name="parking"
                className="checkbox mr-10"
              />
              <label htmlFor="parking" className="checkbox-label">
                Parking
              </label>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                id="ac"
                name="ac"
                className="checkbox mr-10"
              />
              <label htmlFor="ac" className="checkbox-label">
                A/C
              </label>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                id="refrigerator"
                name="refrigerator"
                className="checkbox mr-10"
              />
              <label htmlFor="refrigerator" className="checkbox-label">
                Refrigerator
              </label>
            </div>
          </div>

          <div className="form-group items-center">
            <label htmlFor="others" className="label">
              Others
            </label>
          </div>

          <div className="form-group items-center">
            <label htmlFor="pets" className="label ml-5">
              Allow pets
            </label>
            <ToggleButton></ToggleButton>
          </div>
        </div>

        {/* Attach Photos Step */}
        <div className={`step-content ${currentStep === 2 ? "active" : ""}`}>
          <div className="pt-5">
            <label htmlFor="buildingpermit" className="font-bold">
              Attach Photos
            </label>
          </div>
          <div className="mt-5">
            <PhotoUploader></PhotoUploader>

            <label htmlFor="buildingpermit" className="label mt-5">
              {" "}
              Uploaded{" "}
            </label>
          </div>
        </div>

        {/* Create Description*/}
        <div className={`step-content ${currentStep === 3 ? "active" : ""}`}>
          <div className="pt-5">
            <label htmlFor="samplepicture" className="font-bold">
              Create Description
            </label>
          </div>
          <div className="relative mt-3">
            <textarea
              id="description"
              name="description"
              className="input"
              placeholder="Enter description"
            ></textarea>

            <input
              id="notes"
              className="input"
              placeholder="Special Rules / Notes"
            />
          </div>
        </div>

        {/* Pricing */}
        <div
          className={`step-content ${
            currentStep === stepsSize ? "active" : ""
          }`}
        >
          <div className="pt-5">
            <label htmlFor="pricing" className="font-bold mt-3">
              Pricing
            </label>
          </div>

          <label htmlFor="monthy-rate" className="label mt-2">
            Monthly Rate
          </label>

          <div className="relative w-full mb-6">
            <input
              type="number"
              id="monthly-rate"
              name="monthly-rate"
              className="bg-gray-200 border-none my-2 py-2.5 px-3.5 pl-7 mr-7 text-sm rounded-lg w-full focus:outline-none"
              placeholder="Enter monthly rate"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg">
              ₱
            </span>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg">
              /month
            </span>
          </div>

          <label htmlFor="add-fees" className="label">
            Additional Fees
          </label>

          <div className="flex space-x-6">
            <div className="flex items-center ">
              <input
                type="checkbox"
                id="wifi"
                name="wifi"
                className="mr-3 leading-tight"
              />
              <label htmlFor="wifi" className="mr-8">
                Wifi
              </label>

              <input
                type="checkbox"
                id="maintenance"
                name="maintenance"
                className="mr-3 leading-tight"
              />

              <label htmlFor="maintenance" className="mr-8">
                Maintenance
              </label>

              <input
                type="checkbox"
                id="water"
                name="water"
                className="mr-3 leading-tight"
              />
              <label htmlFor="water" className="mr-8">
                Water
              </label>

              <input
                type="checkbox"
                id="electricity"
                name="electricity"
                className="mr-3 leading-tight"
              />
              <label htmlFor="electricity" className="mr-8">
                Electricity
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {currentStep === stepsSize && (
          <button className="btn flex-1 bg-green-500">Create Listing</button>
        )}

        {currentStep !== stepsSize && (
          <button
            className="btn next mb-10"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateListingForm;
