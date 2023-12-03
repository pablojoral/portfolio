import React from "react";

const LandingNumberItem = ({ text, number }) => {
  return (
    <div className="w-80 px-4 pt-4 h-32 flex flex-col font-serif">
      <p className="text-gray-400 text-sm italic">{text}</p>
      <div className="flex flex-1 justify-center items-center">
        <h3 className={"text-5xl font-semibold"}>{number}</h3>
      </div>
    </div>
  );
};

export default LandingNumberItem;
