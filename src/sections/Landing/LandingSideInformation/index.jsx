import React from "react";
import LandingSideItem from "./LandingSideItem";

const LandingSideInformation = () => {
  return (
    <div className="col-span-1">
      <div className="flex h-full items-center flex-col justify-evenly">
        <div className="text-center">
          <h1 className="font-serif italic text-5xl">Pablo Joral</h1>
          <h3 className="font-serif italic text-md">software developer</h3>
        </div>
        <LandingSideItem
          title="sketch"
          text="Seasoned software engineer adept at crafting efficient and innovative software solutions, collaborating across teams for optimal outcomes. Seasoned software engineer adept at crafting efficient and innovative."
        />
        <LandingSideItem
          title="really fun thing"
          text="Seasoned software engineer adept at crafting efficient and innovative software solutions, collaborating across teams for optimal outcomes. Seasoned software engineer adept at crafting efficient and innovative."
        />
      </div>
    </div>
  );
};

export default LandingSideInformation;
