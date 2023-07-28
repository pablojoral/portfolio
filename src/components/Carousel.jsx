import React, { useState } from "react";

const ICONS = [
  "devicon-react-original",
  "devicon-python-plain",
  "devicon-tailwindcss-original-wordmark",
  "devicon-amazonwebservices-plain-wordmark",
  "devicon-apple-original",
  "devicon-android-plain",
  "devicon-css3-plain",
  "devicon-c-plain",
  "devicon-cplusplus-plain",
  "devicon-csharp-plain",
  "devicon-django-plain",
  "devicon-postgresql-plain",
  "devicon-docker-plain",
  "devicon-express-original",
  "devicon-flutter-plain",
  "devicon-html5-plain",
  "devicon-java-plain",
  "devicon-javascript-plain",
  "devicon-jest-plain",
  "devicon-mongodb-plain",
  "devicon-nodejs-plain",
  "devicon-npm-original-wordmark",
  "devicon-redux-original",
  "devicon-swift-plain",
  "devicon-threejs-original",
  "devicon-typescript-plain",
  "devicon-unity-original",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % ICONS.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + ICONS.length) % ICONS.length);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <i className={ICONS[currentImage] + " text-8xl text-gray-500"}></i>

      <div className="flex mt-4">
        <button
          onClick={prevImage}
          className="px-3 py-2 mx-2 text-white bg-blue-500 rounded-md"
        >
          Previous
        </button>

        <button
          onClick={nextImage}
          className="px-3 py-2 mx-2 text-white bg-blue-500 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
