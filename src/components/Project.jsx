import React, { useEffect, useRef, useState } from "react";
import cobblPage from "../assets/cobbl-screen.png";

const Project = ({ text, image, orientation, icons }) => {
  return (
    <div className="flex direction-row w-full justify-between bg-gray-100 rounded-2xl overflow-hidden px-10 py-10">
      <div className="justify-center items-center col-span-1">
        <div className="h-fit w-fit rounded-2xl overflow-hidden backlight-on-hover">
          <img
            className="object-cover w-48 h-24"
            src={image}
            alt="Project Image"
          />
        </div>
        <div>
          <p className="bg-clip-text">{text}</p>
          <p className="bg-clip-text">{text}</p>
        </div>
      </div>
      <img className="w-4/12" src={cobblPage} alt="Project Image" />
    </div>
  );
};

export default Project;
