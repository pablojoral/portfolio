import React, { useState, useEffect } from "react";

function ImageTilt({ image }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltX = (centerY - clientY) / 20;
    const tiltY = (centerX - clientX) / 20;
    setRotation({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="tilt-container w-80 rounded-2xl overflow-hidden shadow-lg shadow-xl shadow"
      style={{
        transform: `rotateY(${rotation.y}deg)`,
      }}
    >
      <img src={image} alt="Tilting Image" />
    </div>
  );
}

export default ImageTilt;
