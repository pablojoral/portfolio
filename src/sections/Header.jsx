import React from "react";
import lunaryMoon from "../assets/lunary-moon.png";

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center px-16 py-2">
      <div classname="col-span-1">
        <div className="flex justify-start">
          <a className="font-serif italic text-2xl">Pablo Joral</a>
        </div>
      </div>
      <div classname="col-span-1">
        <div className="flex justify-center">
          <img className="object-cover self-center h-8 w-8" src={lunaryMoon} />
        </div>
      </div>
      <div classname="col-span-1">
        <div className="flex justify-end">
          <i className={"devicon-github-original text-2xl"}></i>
          <i className={"devicon-linkedin-plain text-2xl"}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
