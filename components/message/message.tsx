import React from "react";
import Image from "next/image";

const Message = ({ messageType, content, date, authorProfile }) => {
  /*
  Type 1 is for sender left side of the conversation
  Type 2 is for receiver right side of the conversation
   */

  return (
    <>
      {messageType === 1 ? (
        //SENDER
        <div className="flex flex-row gap-2 my-2 py-2">
          <div className="w-10">
            <Image
              src={authorProfile}
              alt="chatmate"
              width={48}
              height={48}
              className="object-cover w-full h-full cursor-pointer hover:scale-110 transition rounded-full"
            />
          </div>

          <div className="text-center flex justify-center items-center px-4 rounded-full bg-secondary">
            <p>{content}</p>
          </div>

          <div className="flex justify-end items-end">
            <p className="text-[.6rem]">{date}</p>
          </div>
        </div>
      ) : (
        //RECEIVER
        <div className="flex flex-row gap-2 my-2 py-2 justify-end">
          <div className="flex justify-end items-end">
            <p className="text-[.6rem]">{date}</p>
          </div>

          <div className="text-center flex justify-center items-center px-4 rounded-full bg-primary text-white">
            <p>{content}</p>
          </div>

          <div className="w-10">
            <Image
              src={authorProfile}
              alt="chatmate"
              width={48}
              height={48}
              className="object-cover w-full h-full cursor-pointer hover:scale-110 transition rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
