import React, { useRef } from "react";
import CustomHeader from "../components/CustomHeader";
import Marquee from "../components/Marquee";
import TypingAnimation from "../components/TypingAnimation";

const Landing = () => {
  const containerRef = useRef();

  return (
    <section
      className=" particle-wrapper flex flex-1 flex-col justify-between h-screen bg-black overflow-hidden"
      ref={containerRef}
    >
      <CustomHeader />
      <div className="flex flex-1 items-center justify-center">
        <TypingAnimation />
      </div>
      <Marquee />
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-pink-500 animate-gradient-x" />
    </section>
  );
};

export default Landing;
