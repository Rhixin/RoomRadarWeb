import React from "react";

const MainSectionTitle = ({
  title,
  beds,
  bathrooms,
  hostName,
  hostType,
  hostingYears,
  hostImage,
}) => {
  return (
    <div className="mt-8 py-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1">{title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <h1>{beds} Beds</h1>
            <h1>{bathrooms} Bathrooms</h1>
          </div>
        </div>

        {/* <div className="flex items-center gap-4">
          <img
            src={hostImage}
            alt={`${hostName}'s profile`}
            className="rounded-full w-14 h-14 object-cover"
          />
          <div>
            <h2 className="font-medium">Hosted by {hostName}</h2>
            <p className="text-gray-600 text-sm">{hostType} · {hostingYears} years hosting</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainSectionTitle;
