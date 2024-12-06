"use client";
import "./registration.css";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import SignUpForm from "./signupform";
import TenantForm from "./tenantform";
import LandlordForm from "./landlordform";

export default function Regsitration() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [chosenType, setChosenType] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState(1);

  const showSignUp = (signupType: number) => {
    //0 for selecting pa si user what account
    //1 selects tenant account signup
    //2 selects landlord account signup
    setChosenType(signupType);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className="form-container sign-up">
        <SignUp toggleForm={toggleForm} showSignUp={showSignUp} />
      </div>

      <div className="form-container sign-in">
        <Login toggleForm={toggleForm} />
      </div>

      <div
        className={`form-container sign-up-form ${
          chosenType == 1 ? "active" : ""
        }`}
      >
        <TenantForm showSignUp={showSignUp}></TenantForm>
      </div>

      <div
        className={`form-container sign-up-form ${
          chosenType == 2 ? "active" : ""
        }`}
      >
        <LandlordForm showSignUp={showSignUp}></LandlordForm>
      </div>

      <div
        className={`toggle-container ${
          chosenType == 1 || chosenType == 2 ? "inactive" : ""
        }`}
      >
        <Toggle />
      </div>
    </div>
  );
}

const Login = ({ toggleForm }) => {
  return (
    <form id="login-form">
      <h1>Sign In</h1>
      <div className="social-icons">
        <a href="#" className="icon">
          <FaGoogle />
        </a>
        <a href="#" className="icon">
          <FaFacebookF />
        </a>
        <a href="#" className="icon">
          <FaGithub />
        </a>
        <a href="#" className="icon">
          <FaLinkedinIn />
        </a>
      </div>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <a>
        Don't Have an Account?{" "}
        <b className="toggle-text" onClick={toggleForm}>
          Sign Up
        </b>
      </a>
    </form>
  );
};
function SignUp({ toggleForm, showSignUp }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
  });

  const landlordSteps = [
    "Profile Information",
    "Property Information",
    "Account Details",
    "Confirmation",
  ];

  const tenantSteps = [
    "Profile Information",
    "Account Details",
    "Confirmation",
  ];

  return (
    <form id="signup-form-choices">
      <h1>Create Account As</h1>

      <div id="role-choice">
        <div
          className="choice"
          id="choice-tenant"
          onClick={() => showSignUp(1)}
        >
          <IoPeople className="choice-icon" />
          <h2>Tenant</h2>
          <p>If you are looking for boarding houses or apartments to rent.</p>
        </div>

        <div
          className="choice"
          id="choice-landlord"
          onClick={() => showSignUp(2)}
        >
          <MdHomeWork className="choice-icon" />
          <h2>Landlord</h2>
          <p>
            If you want to list your boarding houses or apartments for rent.
          </p>
        </div>
      </div>

      <a>
        Already Have an Account?{" "}
        <b className="toggle-text" onClick={toggleForm}>
          Log In
        </b>
      </a>
    </form>
  );
}

function Toggle() {
  return (
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <img src="/images/RoomRadarWhite.png" />
      </div>
      <div className="toggle-panel toggle-right">
        <img src="/images/RoomRadarWhite.png" />
      </div>
    </div>
  );
}
