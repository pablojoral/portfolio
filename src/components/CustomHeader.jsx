import React from "react";

const CustomHeader = () => {
  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-yellow-400 to-pink-500
     text-transparent bg-clip-text text-md text-center cursor-pointer
     py-4 flex gap-12 justify-center"
    >
      <a onClick={() => handleClickScroll("about")}>
        <span>About</span>
      </a>
      |
      <a onClick={() => handleClickScroll("projects")}>
        <span>Projects</span>
      </a>
      |
      <a onClick={() => handleClickScroll("contact")}>
        <span>Contact</span>
      </a>
    </section>
  );
};

export default CustomHeader;
