import React from "react";

const LandingSideItem = ({ title, text }) => {
  return (
    <div className="w-80 px-4 pt-4 h-32 flex flex-col font-serif">
      <h3 className={"italic text-sm font-semibold"}>{title}</h3>
      <p className="text-gray-400 text-sm italic">{text}</p>
    </div>
  );
};

export default LandingSideItem;
