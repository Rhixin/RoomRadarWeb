"use client";
import React, { useState } from "react";
import StepIndicator from "./stepindicator";
import { IoMdArrowBack } from "react-icons/io";

const LandlordForm = ({ showSignUp }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsSize = 4;

  return (
    <div>
      <div className="flex">
        <IoMdArrowBack
          className="mb-4 text-xl cursor-pointer"
          onClick={() => showSignUp(0)}
        />

        <h3 className="flex-1 justify-center text-center">
          Register as Landlord
        </h3>
      </div>

      <StepIndicator
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={stepsSize}
      />

      {/* Form Steps */}
      <div className="steps-container">
        {/* Profile Information Step */}
        <div className={`step-content ${currentStep === 1 ? "active" : ""}`}>
          <div className="form-group">
            <div>
              <label htmlFor="name" className="label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Juan"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="name" className="label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Dela Cruz"
                className="input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="gender" className="label">
                Gender
              </label>
              <select placeholder="Gender" className="input">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="dob" className="label">
                Date of Birth
              </label>
              <input type="date" id="dob" className="input" />
            </div>

            <div>
              <label htmlFor="phone" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="input"
              />
            </div>
          </div>
        </div>

        {/* Landlord Proof of Building Title/Permit Details Step */}
        <div className={`step-content ${currentStep === 2 ? "active" : ""}`}>
          <label htmlFor="buildingpermit" className="label">
            Building Permit
          </label>
          <div className="relative">
            <input
              type="file"
              id="buildingpermit"
              className="input absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
            <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-md bg-gray-100 text-gray-600">
              <span className="text-sm">Upload Permit Image</span>
            </div>
          </div>
        </div>

        {/* Landlord Proof of Building Title/Permit Details Step */}
        <div className={`step-content ${currentStep === 3 ? "active" : ""}`}>
          <label htmlFor="samplepicture" className="label">
            Boarding House Sample Pictures
          </label>
          <div className="relative">
            <input
              type="file"
              id="samplepicture"
              className="input absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
            <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-md bg-gray-100 text-gray-600">
              <span className="text-sm">Upload Sample Pictures</span>
            </div>
          </div>
        </div>

        {/* Account Details Step */}
        <div
          className={`step-content ${
            currentStep === stepsSize ? "active" : ""
          }`}
        >
          <label htmlFor="username" className="label">
            Username
          </label>
          <input type="text" placeholder="Username" className="input" />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" placeholder="Password" className="input" />
          <label htmlFor="confirmpassword" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {currentStep === stepsSize && (
          <button className="btn flex-1 bg-green-500">Register</button>
        )}

        {currentStep !== stepsSize && (
          <button
            className="btn next"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default LandlordForm;
