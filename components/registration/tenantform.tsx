"use client";
import React, { useState } from "react";
import StepIndicator from "./stepindicator";
import { IoMdArrowBack } from "react-icons/io";

const TenantForm = ({ showSignUp }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsSize = 2;

  return (
    <div>
      <div className="flex">
        <IoMdArrowBack
          className="mb-4 text-xl cursor-pointer"
          onClick={() => showSignUp(0)}
        />

        <h3 className="flex-1 justify-center text-center">
          Register as Tenant
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
          <button className="btn flex-1">Register</button>
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

export default TenantForm;
