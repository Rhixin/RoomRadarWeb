import React from "react";
import Image from "next/image";

const ConvoPreview = () => {
  return (
    <div className="w-[100%] min-h-[4.5rem] rounded-md hover:bg-gray-200 transition cursor-pointer flex flex-row">
      <div className="w-18 p-2">
        <Image
          src="/images/landlord_placeholder.jpg"
          alt="chatmate"
          width={24}
          height={24}
          className="object-cover w-full h-full cursor-pointer hover:scale-110 transition rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <p className="text-[1rem] font-semibold">Aling Merna</p>
        <p className="text-[.8rem]">You: Hi baby nikaon naka?!</p>
      </div>
    </div>
  );
};

export default ConvoPreview;
