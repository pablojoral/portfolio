import React from "react";
import LandingNumberItem from "./LandingNumberItem";

const LandingNumbersDisplay = () => {
  return (
    <div className="col-span-1">
      <div className="flex h-full items-center flex-col justify-evenly">
        <LandingNumberItem text="lines of code" number="10.002.312" />
        <LandingNumberItem text="commits" number="892" />
        <LandingNumberItem text="projects" number="17" />
      </div>
    </div>
  );
};

export default LandingNumbersDisplay;
