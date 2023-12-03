import React, { useEffect, useRef, useState } from "react";

function calculateVisiblePercentage(item) {
  const rect = item.current.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Check if the item is completely out of view
  if (rect.bottom < 0 || rect.top > windowHeight) return 0;

  // Total height of the element
  const totalHeight = rect.height;

  // Amount of the item scrolled out of view from the top
  const scrolledOutOfViewFromTop = rect.top < 0 ? Math.abs(rect.top) : 0;

  // Amount of the item scrolled out of view from the bottom
  const scrolledOutOfViewFromBottom =
    rect.bottom > windowHeight ? Math.abs(rect.bottom - windowHeight) : 0;

  // Total amount of the item scrolled out of view
  const totalScrolledOutOfView =
    scrolledOutOfViewFromTop + scrolledOutOfViewFromBottom;

  // Visible height of the item
  const visibleHeight = totalHeight - totalScrolledOutOfView;

  // The percentage of the item that is visible
  const visiblePercentage = (visibleHeight / totalHeight) * 100;

  return visiblePercentage;
}

const Project = ({ text, image, orientation, icons }) => {
  const item = useRef();
  const [translatePercentage, setTranslatePercentageValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const visiblePercentage = calculateVisiblePercentage(item);
      setTranslatePercentageValue(visiblePercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={item}
      className={
        "w-10/12" + (orientation === "left" ? " self-start" : " self-end")
      }
      style={
        orientation === "left"
          ? { transform: `translateX(${translatePercentage - 100}%)` }
          : { transform: `translateX(${100 - translatePercentage}%)` }
      }
    >
      <div
        className={
          "grid grid-cols-3 gap-5 bg-white bg-opacity-10 backdrop-blur-md px-10 py-10 " +
          (orientation === "left" ? " rounded-r-2xl" : " rounded-l-2xl")
        }
      >
        {orientation === "right" && (
          <div className="rounded-2xl overflow-hidden backlight-on-hover">
            <img
              src={image}
              alt="Profile Image"
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <div className="flex items-center text-gray-100 bg-clip-text col-span-2">
          <p>{text}</p>
        </div>
        {orientation === "left" && (
          <div className="rounded-2xl overflow-hidden backlight-on-hover">
            <img
              src={image}
              alt="Profile Image"
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>
      <div className="flex flex-row gap-2 px-4">
        {icons &&
          icons.map((icon, index) => (
            <div key={index}>
              <i className={`${icon} text-white text-4xl`}></i>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
