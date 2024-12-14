"use client";
import "./createlisting.css";

import React, { useContext, useState } from "react";
import StepIndicator from "../registration/stepindicator";
import { IoMdArrowBack } from "react-icons/io";
import CreateListing from "@/app/(auth)/listings/create/page";
import ToggleButton from "../navbar/togglebutton";
import PhotoUploader from "./uploadphoto";
import { NavbarContext } from "../providers/navbarprovider";
import { IoClose } from "react-icons/io5";
import MapSolo from "../map/mapsolo";
import { LatLng } from "../boardinghousemapview/boardinghousemapview";
import CustomMap from "../map/custommap";
import RegisterLocationMap from "../map/registerlocationmap";
const containerStyle = {
  width: "100%",
  height: "20rem",
};

const CreateListingForm = ({ showModal, setShowModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsSize = 5;

  //NAVBAR CONETEXT NEEDED
  const context = useContext(NavbarContext);
  if (!context) return null;
  const { isOn, setIsOn } = context;

  //DATA TO BE POSTED
  const [listingLocation, setlistingLocation] = useState<LatLng | null>(null);
  const [inputData, setInputData] = useState({
    //TODO: Landlord ID
    propertyName: "",
    street: "",
    barangay: "",
    municipality: "",
    province: "",
    country: "",
    postalCode: "",
    latitude: 0,
    longitude: 0,
    propertyType: "",
    numOfBeds: 0,
    numOfBedrooms: 0,
    numOfBathrooms: 0,
    monthlyRate: 0,
    landLordId: 7,
    description: "",
  });

  const [rulesArray, setRulesArray] = useState<string[]>([]);

  const [isAlllowPets, setIsAlllowPets] = useState(false);

  const [checkedAmenities, setCheckedAmenities] = useState({
    wifi: false,
    kitchen: false,
    washer: false,
    parking: false,
    ac: false,
    refrigerator: false,
  });

  const [checkedAdditionalFees, setCheckedAdditionalFees] = useState({
    wifi: false,
    maintenance: false,
    water: false,
    electricity: false,
  });

  //HANDLERS FOR CHANGIN INPUTS
  const handleChangeAmenities = (e) => {
    const { name, checked } = e.target;
    setCheckedAmenities((prev) => ({ ...prev, [name]: checked }));
  };

  const handleChangeAdditionalFees = (e) => {
    const { name, checked } = e.target;
    setCheckedAdditionalFees((prev) => ({ ...prev, [name]: checked }));
  };

  const handleChangeRules = (e) => {
    const value = e.target.value; // Get the input string
    const rulesArray = value.split(",").map((rule) => rule.trim()); // Split and trim
    setRulesArray(rulesArray); // Update state
  };

  // Handle form input changes
  const handleChangeInputs = (e) => {
    const { name, value } = e.target;

    // Parse only for specific input names
    const parsedValue = [
      "numOfBeds",
      "numOfBedrooms",
      "numOfBathrooms",
      "monthlyRate",
    ].includes(name)
      ? value === ""
        ? ""
        : parseInt(value, 10)
      : value;

    setInputData({
      ...inputData,
      [name]: parsedValue,
    });
  };

  const showTrialData = () => {
    const activeAmenities = Object.keys(checkedAmenities).filter(
      (key) => checkedAmenities[key]
    );

    const activeAdditionalFees = Object.keys(checkedAdditionalFees).filter(
      (key) => checkedAdditionalFees[key]
    );

    const payload = {
      id: inputData.id,
      propertyName: inputData.propertyName,
      street: inputData.street,
      barangay: inputData.barangay,
      municipality: inputData.municipality,
      province: inputData.province,
      country: inputData.country,
      postalCode: inputData.postalCode,
      latitude: listingLocation?.lat,
      longitude: listingLocation?.lng,
      propertyType: inputData.propertyType,
      rulesArray: rulesArray,
      numOfBeds: inputData.numOfBeds,
      numOfBedrooms: inputData.numOfBedrooms,
      numOfBathrooms: inputData.numOfBedrooms,
      monthlyRate: inputData.monthlyRate,
      landLordId: inputData.landLordId,
      description: inputData.description,
      amenitiesArray: activeAmenities,
      allowPets: isAlllowPets,
      additionalFeesArray: activeAdditionalFees,
    };

    console.log(payload);
  };

  return (
    <div
      className={`modal-container transition-all duration-300 ease-in-out transform ${
        showModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-100"
      }`}
    >
      <div className="form-container">
        <div className="absolute top-6 right-6 ">
          <IoClose
            className="text-2xl cursor-pointer hover:scale-125 transition text-tertiary"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </div>
        <div>
          <div className="flex">
            <h3 className="flex-1 justify-center text-center">
              Create Listing
            </h3>
          </div>

          <StepIndicator
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={stepsSize}
          />
        </div>

        <div className="steps-container overflow-y-auto h-[80%] px-1 overflow-x-hidden">
          <div className={`step-content ${currentStep === 1 ? "active" : ""}`}>
            <div className="form-group">
              <div>
                <h3 className="font-bold flex-1 pt-5 mb-2">Listing Details</h3>
                <label htmlFor="propertyName" className="label">
                  Property Name
                </label>
                <input
                  type="text"
                  name="propertyName"
                  placeholder="Enter Property Name"
                  className="input"
                  value={inputData.propertyName}
                  onChange={handleChangeInputs}
                />
                <div className="form-group">
                  <label htmlFor="propertyType" className="label">
                    Property Type
                  </label>
                </div>
                <select
                  name="propertyType"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-5"
                  value={inputData.propertyType}
                  onChange={handleChangeInputs}
                >
                  <option value="apartment">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="label">
                Address
              </label>
            </div>

            <div className="form-group items-center">
              <div>
                <label htmlFor="street" className="text-[.7rem] text-gray-500">
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  className="input"
                  value={inputData.street}
                  onChange={handleChangeInputs}
                />
              </div>

              <div>
                <label
                  htmlFor="barangay"
                  className="text-[.7rem] text-gray-500"
                >
                  Barangay
                </label>
                <input
                  type="text"
                  name="barangay"
                  placeholder="Barangay"
                  className="input"
                  value={inputData.barangay}
                  onChange={handleChangeInputs}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label
                  htmlFor="municipality"
                  className="text-[.7rem] text-gray-500"
                >
                  Municipality
                </label>
                <input
                  type="text"
                  name="municipality"
                  placeholder="Municipality"
                  className="input"
                  value={inputData.municipality}
                  onChange={handleChangeInputs}
                />
              </div>

              <div>
                <label
                  htmlFor="province"
                  className="text-[.7rem] text-gray-500"
                >
                  Province
                </label>
                <input
                  type="text"
                  name="province"
                  placeholder="Province"
                  className="input"
                  value={inputData.province}
                  onChange={handleChangeInputs}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="country" className="text-[.7rem] text-gray-500">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="input"
                  value={inputData.country}
                  onChange={handleChangeInputs}
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="text-[.7rem] text-gray-500"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="input"
                  name="postalCode"
                  value={inputData.postalCode}
                  onChange={handleChangeInputs}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="numOfBedrooms" className="label">
                  Room
                </label>
                <input
                  type="number"
                  name="numOfBedrooms"
                  placeholder="Number of Rooms"
                  className="input"
                  value={inputData.numOfBedrooms}
                  onChange={handleChangeInputs}
                />
              </div>

              <div>
                <label htmlFor="numOfBeds" className="label">
                  Bed
                </label>
                <input
                  type="number"
                  name="numOfBeds"
                  placeholder="Number of Beds"
                  className="input"
                  value={inputData.numOfBeds}
                  onChange={handleChangeInputs}
                />
              </div>

              <div>
                <label htmlFor="numOfBathrooms" className="label">
                  Bathroom
                </label>

                <input
                  type="number"
                  name="numOfBathrooms"
                  placeholder="Number of Bathrooms"
                  className="input"
                  value={inputData.numOfBathrooms}
                  onChange={handleChangeInputs}
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
                  name="wifi"
                  className="checkbox mr-10 "
                  onChange={handleChangeAmenities}
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
                  onChange={handleChangeAmenities}
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
                  onChange={handleChangeAmenities}
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
                  onChange={handleChangeAmenities}
                />
                <label htmlFor="parking" className="checkbox-label">
                  Parking
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="ac"
                  className="checkbox mr-10"
                  onChange={handleChangeAmenities}
                />
                <label htmlFor="ac" className="checkbox-label">
                  A/C
                </label>
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  name="refrigerator"
                  className="checkbox mr-10"
                  onChange={handleChangeAmenities}
                />
                <label htmlFor="refrigerator" className="checkbox-label">
                  Refrigerator
                </label>
              </div>
            </div>

            <div className="form-group items-start justify-start mt-4">
              <label htmlFor="pets" className="label ">
                Allow pets
              </label>
              <ToggleButton
                isOn={isAlllowPets}
                setIsOn={setIsAlllowPets}
              ></ToggleButton>
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
            </div>
          </div>

          {/* Create Description*/}
          <div className={`step-content ${currentStep === 3 ? "active" : ""}`}>
            <div className="pt-5">
              <label htmlFor="description" className="font-bold">
                Create Description
              </label>
            </div>
            <div className="relative mt-3">
              <textarea
                name="description"
                className="input"
                placeholder="Enter description"
                value={inputData.description}
                onChange={handleChangeInputs}
              ></textarea>

              <input
                className="input"
                placeholder="Special Rules / Notes"
                name="rulesArray"
                value={rulesArray.join(", ")}
                onChange={handleChangeRules}
              />
            </div>
          </div>

          {/* Pricing */}
          <div className={`step-content ${currentStep === 4 ? "active" : ""}`}>
            <div className="pt-5">
              <label htmlFor="pricing" className="font-bold mt-3">
                Pricing
              </label>
            </div>

            <label htmlFor="monthyRate" className="label mt-2">
              Monthly Rate
            </label>

            <div className="relative w-full mb-6">
              <input
                type="number"
                name="monthlyRate"
                className="bg-gray-200 border-none my-2 py-2.5 px-3.5 pl-7 mr-7 text-sm rounded-lg w-full focus:outline-none"
                placeholder="Enter Rate"
                value={inputData.monthlyRate}
                onChange={handleChangeInputs}
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg">
                ₱
              </span>
              <span className="absolute right-12 top-1/2 transform -translate-y-1/2 text-lg">
                /month
              </span>
            </div>

            <label htmlFor="additionalFeesArray" className="label">
              Additional Fees
            </label>

            <div className="flex space-x-6">
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  name="wifi"
                  className="mr-3 leading-tight"
                  onChange={handleChangeAdditionalFees}
                />
                <label htmlFor="wifi" className="mr-8">
                  Wifi
                </label>

                <input
                  type="checkbox"
                  name="maintenance"
                  className="mr-3 leading-tight"
                  onChange={handleChangeAdditionalFees}
                />

                <label htmlFor="maintenance" className="mr-8">
                  Maintenance
                </label>

                <input
                  type="checkbox"
                  name="water"
                  className="mr-3 leading-tight"
                  onChange={handleChangeAdditionalFees}
                />
                <label htmlFor="water" className="mr-8">
                  Water
                </label>

                <input
                  type="checkbox"
                  name="electricity"
                  className="mr-3 leading-tight"
                  onChange={handleChangeAdditionalFees}
                />
                <label htmlFor="electricity" className="mr-8">
                  Electricity
                </label>
              </div>
            </div>
          </div>

          {/* Attach GeoPoint Step */}
          <div
            className={`step-content ${
              currentStep === stepsSize ? "active" : ""
            }`}
          >
            <RegisterLocationMap
              setlistingLocation={setlistingLocation}
            ></RegisterLocationMap>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          {currentStep === stepsSize && (
            <button className="btn flex-1 bg-green-500" onClick={showTrialData}>
              Create Listing
            </button>
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
    </div>
  );
};

export default CreateListingForm;
