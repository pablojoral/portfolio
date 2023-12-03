import React, { useRef } from "react";
import profilePicture from "../../assets/profile-picture.png";
import LandingNumbersDisplay from "./LandingNumbersDisplay";
import CompanyLogos from "./CompanyLogos";
import LandingSideInformation from "./LandingSideInformation";

const Landing = () => {
  const containerRef = useRef();

  return (
    <section
      // className="particle-wrapper flex flex-1 flex-col justify-between h-screen bg-black overflow-hidden"
      className="flex flex-col h-screen bg-white overflow-hidden justify-evenly items-center"
      ref={containerRef}
    >
      <div className="grid grid-cols-3 ">
        {/* <CustomHeader /> */}

        <LandingSideInformation />
        <div className="col-span-1 flex flex-1 items-center justify-center lg:px-20 px-10">
          {/* <TypingAnimation /> */}
          <div className="landing-picture-wrapper border px-8 py-8 shadow-md">
            <div className="landing-picture h-fit w-fit overflow-hidden backlight-on-hover">
              <img
                className="object-cover max-h-96"
                src={profilePicture}
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
        <LandingNumbersDisplay />
      </div>
      <CompanyLogos />
      {/* <Marquee /> */}
      {/* <div className="h-1 bg-gradient-to-r from-yellow-400 to-pink-500 animate-gradient-x" /> */}
    </section>
  );
};

export default Landing;
