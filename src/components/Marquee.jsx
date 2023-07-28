import React from "react";
import { getAllIcons } from "../utils.tsx/icons";

const ICONS = getAllIcons();

const Marquee = () => {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex space-x-4 whitespace-nowrap animate-marquee">
        {ICONS.map((icon, index) => (
          <div key={index} className="whitespace-nowrap pr-4">
            <i className={icon + " text-8xl text-gray-500"}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
