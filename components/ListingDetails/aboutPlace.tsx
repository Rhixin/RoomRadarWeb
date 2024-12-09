import React from "react";

const AboutPlace = () => {
  const details = [
    { 
      text: "This room is on the 4th floor without an elevator.",
      isImportant: true 
    },
    {
      text: "Few steps (2-3 minute walk) from BTS and a 24/7 convenience store.",
      isImportant: false
    },
    {
      text: "Easy access to attractions via BTS/Metro.",
      isImportant: false
    },
    {
      text: "Free high-speed Wi-Fi and CCTV security.",
      isImportant: false
    },
    {
      text: "Host available anytime, not on-site.",
      isImportant: false
    },
    {
      text: "Experience local markets and traditional living....",
      isImportant: false
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">About this place</h2>
      <div className="flex flex-col gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex gap-2">
            <span className="text-gray-700">
              {detail.isImportant ? "** " : "> "}
            </span>
            <span className={detail.isImportant ? "font-medium" : ""}>
              {detail.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPlace;