"use client";
import "./registration.css";

import React, { useState } from "react";
import { MdHomeWork } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import TenantForm from "./tenantform";
import LandlordForm from "./landlordform";
import LoginForm from "./loginform";

export default function Regsitration() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [chosenType, setChosenType] = useState<number>(0);

  const showSignUp = (signupType: number) => {
    //mura nig states sa user unsa iya ganahan
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
        <SignUpOptions toggleForm={toggleForm} showSignUp={showSignUp} />
      </div>

      <div className="form-container sign-in">
        <LoginForm toggleForm={toggleForm} />
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

function SignUpOptions({ toggleForm, showSignUp }) {
  return (
    <form
      id="signup-form-choices"
      className="flex flex-col justify-center items-center"
    >
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
