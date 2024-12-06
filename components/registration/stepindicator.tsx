"use client";
import React from "react";

const StepIndicator = ({
  currentStep,
  setCurrentStep,
  totalSteps = 3,
  stepLabels = [],
}) => {
  // Validate inputs
  if (totalSteps < 2) {
    throw new Error("Total steps must be at least 2");
  }

  // Generate step numbers array
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full flex mb-3 mt-3 relative">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`
            relative flex items-center
            ${index === steps.length - 1 ? "justify-end" : "flex-grow"}
            group
          `}
        >
          <div
            className={`
              w-5 h-5 rounded-full z-10 flex items-center justify-center 
              transition-all duration-300 ease-in-out cursor-pointer
              ${
                currentStep >= step
                  ? "bg-blue-600 text-white scale-110 ring-4 ring-blue-200"
                  : "bg-gray-200 text-gray-500 group-hover:bg-blue-100"
              }
            `}
            onClick={() => {
              setCurrentStep(step);
            }}
          >
            {step}
          </div>

          {/* Connecting Line - Only for steps before the last */}
          {index < steps.length - 1 && (
            <div
              className={`
                absolute h-1 w-full top-2 left-0 
                transition-all duration-500 
                ${currentStep > step ? "bg-blue-600" : "bg-gray-200"}
              `}
            ></div>
          )}

          {/* Optional Step Label */}
          {stepLabels[index] && (
            <div
              className={`
                absolute top-full mt-2 text-xs text-center w-full 
                transition-all duration-300
                ${
                  currentStep >= step
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }
              `}
            >
              {stepLabels[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
