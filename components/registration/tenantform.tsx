"use client";
import React, { useState } from "react";
import StepIndicator from "./stepindicator";
import { IoMdArrowBack } from "react-icons/io";
import { signUpUser } from "@/lib/registration";
import { useRouter } from "next/navigation";

const TenantForm = ({ showSignUp }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthDate: "",
    contactNumber: "",
    username: "",
    password: "",
    password1: "",
    password2: "",
  });
  const stepsSize = 2;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle registration submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password1, password2 } = formData;

    //Passwords do not match
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    // Create a final data object with the confirmed password
    const finalFormData = {
      ...formData,
      password: password1,
    };

    console.log(finalFormData);

    try {
      const response = await signUpUser(finalFormData);

      //Successful registration then log in and redirect
      //200 kay success
      if (response.isSuccess) {
        alert("Logged in successfully!");
        router.push("/home");
      } else {
        alert("Login failed. Check credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form className="w-[100%]" onSubmit={handleSubmit}>
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
              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Juan"
                className="input"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Dela Cruz"
                className="input"
                onChange={handleChange}
                value={formData.lastName}
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
                name="email"
                placeholder="example@example.com"
                className="input"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div>
              <label htmlFor="gender" className="label">
                Gender
              </label>
              <select
                name="gender"
                className="input"
                onChange={handleChange}
                value={formData.gender}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="birthDate" className="label">
                Date of Birth
              </label>
              <input
                type="date"
                name="birthDate"
                className="input"
                onChange={handleChange}
                value={formData.birthDate}
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                name="contactNumber"
                onChange={handleChange}
                value={formData.contactNumber}
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
          <input
            type="text"
            placeholder="Username"
            className="input"
            name="username"
            onChange={handleChange}
            value={formData.username}
          />
          <label htmlFor="password1" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password1"
            onChange={handleChange}
            value={formData.password1}
          />
          <label htmlFor="password2" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            name="password2"
            onChange={handleChange}
            value={formData.password2}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {currentStep === stepsSize && (
          <button className="btn flex-1" type="submit">
            Register
          </button>
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
    </form>
  );
};

export default TenantForm;
