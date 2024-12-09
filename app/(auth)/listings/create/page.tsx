"use client";
import Navbar from "@/components/navbar/navbar";
import CreateListingForm from "@/components/createListing/createlistingform";
import Registration from "@/components/registration/registration";
import StepIndicator from "@/components/registration/stepindicator";

import React, { useState } from "react";

const CreateListing = () => {
  // const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="justify-center items-center min-h-screen bg-slate-200">
      <Navbar navbarType={2}></Navbar>

      {/* <StepIndicator currentStep={currentStep} setCurrentStep={setCurrentStep} totalSteps={3} stepLabels= {[]}></StepIndicator> */}
      <CreateListingForm></CreateListingForm>
    </div>
  );
};

export default CreateListing;
