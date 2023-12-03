import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tarjimlyScreenshot from "../../assets/tarjimly-screenshot.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ripioLogo from "../../assets/ripio-logo.png";

const SliderItem = ({}) => {
  const text =
    "Seasoned software engineer adept at crafting efficient and innovative software solutions, collaborating across teams for optimal outcomes. Seasoned software engineer adept at crafting efficient and innovative.";
  const title = "Ripio";
  return (
    <div className="h-full w-3/4 border rounded-2xl grid grid-cols-2">
      <div className="col-span-1">
        <div className="flex h-full items-center flex-col justify-evenly">
          <div className="w-80 px-4 pt-4 h-32 flex flex-col font-serif">
            <h3 className={"italic text-sm font-semibold"}>{title}</h3>
            <p className="text-gray-400 text-sm italic">{text}</p>
          </div>
          <div className="w-80 px-4 pt-4 h-32 flex flex-col font-serif">
            <h3 className={"italic text-sm font-semibold"}>{title}</h3>
            <p className="text-gray-400 text-sm italic">{text}</p>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex h-full items-center flex-col justify-evenly rounded-2xl overflow-hidden">
          <img className="object-cover w-48 h-96" src={tarjimlyScreenshot} />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const text =
    "Seasoned software engineer adept at crafting efficient and innovative software solutions, collaborating across teams for optimal outcomes. Seasoned software engineer adept at crafting efficient and innovative.";

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section className="h-screen flex flex-col justify-evenly" id="projects">
      <div className="flex flex-row justify-center">
        <h1 className="font-serif italic text-5xl text-center">Projects</h1>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        className="h-3/4 w-full mySwiper"
        centeredSlides={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {
          // render 5 slides
          [...Array(5)].map((e, i) => (
            <SwiperSlide
              key={`slide-${i}`}
              tag="li"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <SliderItem />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Projects;
