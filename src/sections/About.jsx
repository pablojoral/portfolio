import React from "react";
import profilePicture from "../assets/profile-picture.jpg";

const About = () => {
  return (
    <section
      className="flex flex-col bg-black w-full h-screen justify-center items-center"
      id="about"
    >
      <div className="flex lg:px-20 lg:py-20 md:px-10 md:py-10 sm:px-5 sm:py-5 px-5 py-5 bg-black w-full h-screen justify-center items-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1 gap-5 px-10 py-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl">
          <div className="col-span-1 flex justify-center items-center w-full">
            <div className="h-fit w-fit rounded-2xl overflow-hidden backlight-on-hover">
              <img
                className="object-cover max-h-96"
                src={profilePicture}
                alt="Profile Image"
              />
            </div>
          </div>
          <div className="flex items-center text-gray-100 bg-clip-text col-span-2">
            <p>
              Welcome to my portfolio webpage! Here, you will discover a
              collection of my creative endeavors, professional accomplishments,
              and passions. I am thrilled to share with you the fruits of my
              hard work and dedication, showcasing my expertise and unique
              perspective in [your field or area of focus]. From innovative
              projects to insightful collaborations, this portfolio serves as a
              testament to my skills and aspirations. Join me on this visual and
              intellectual journey as I invite you to explore my world of
              creativity, problem-solving, and continuous growth. Together,
              let's embark on a voyage that celebrates my past achievements and
              sets the stage for exciting future endeavors.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-1 bg-gradient-to-r from-yellow-400 to-pink-500 animate-gradient-x w-full" /> */}
    </section>
  );
};

export default About;
