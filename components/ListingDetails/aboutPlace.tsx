import React from "react";

const AboutPlace = () => {
  const details = [
    {
      text: "This room is on the 4th floor without an elevator.",
      isImportant: false,
    },
    {
      text: "Few steps (2-3 minute walk) from BTS and a 24/7 convenience store.",
      isImportant: false,
    },
    {
      text: "Easy access to attractions via BTS/Metro.",
      isImportant: false,
    },
    {
      text: "Free high-speed Wi-Fi and CCTV security.",
      isImportant: false,
    },
    {
      text: "Host available anytime, not on-site.",
      isImportant: false,
    },
    {
      text: "Experience local markets and traditional living....",
      isImportant: false,
    },
  ];

  return (
    <div className="mt-8 flex flex-row">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          About this place
        </h2>
        <div className="flex flex-col gap-4">
          {details.map((detail, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-lg">{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-start flex-1 px-20">
        <div className="w-[100%] flex justify-center items-center">
          <iframe
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74dEXewfZu6N_1t97KzYxAbt_V9IkbU8
    &q=Space+Needle,Seattle+WA"
            title="Embedded Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPlace;
