import React, { useState, useEffect } from "react";

const TEXTS = ["React Native", "React", "Node.js", "Express", "Python"];

function TypingAnimation() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex === TEXTS[currentTextIndex].length - 1) {
        setShowCursor(false);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) =>
            prevIndex === TEXTS.length - 1 ? 0 : prevIndex + 1
          );
          setCurrentIndex(0);
          setShowCursor(true);
        }, 1000);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex]);

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text text-4xl text-center">
      <p>
        Hello, my name is Pablo and I'm ready to take your{" "}
        {TEXTS[currentTextIndex].slice(0, currentIndex + 1)}
        {showCursor && <span>|</span>} project to the next level.
      </p>
    </div>
  );
}

export default TypingAnimation;
