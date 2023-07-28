import React, { useEffect, useState } from "react";

const Contact = () => {
  const [time, setTime] = useState(getUtcMin3Time());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getUtcMin3Time());
    }, 60000); // Update every minute

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);
  function getUtcMin3Time() {
    // Get the current date
    let now = new Date();

    // Get hours and minutes
    let hours = now.getUTCHours() - 3;
    let minutes = now.getUTCMinutes();

    return `${hours}:${minutes}`;
  }

  return (
    <section className="px-20 py-10 bg-black" id="contact">
      <div className="flex flex-col justify-center items-center text-center gap-6 ">
        <div
          className="bg-gradient-to-r from-yellow-400 to-pink-500
    text-transparent bg-clip-text"
        >
          Contact
        </div>
        <div
          className="bg-gradient-to-r from-yellow-400 to-pink-500
    text-transparent bg-clip-text"
        >
          <p>+598 956 853 24</p>
          <p>
            <a href="mailto: joralpablo@gmail.com"> joralpablo@gmail.com</a>
          </p>
          <p>{time} UTC-3</p>
        </div>

        <div
          className="bg-gradient-to-r from-yellow-400 to-pink-500
    text-transparent bg-clip-text"
        >
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/pjoral/"
              target="_blank"
              rel="noreferrer"
            >
              <i className={"devicon-linkedin-plain-wordmark text-8xl"}></i>
            </a>
            <a
              href="https://github.com/pablojoral"
              target="_blank"
              rel="noreferrer"
            >
              <i className={"devicon-github-original-wordmark text-6xl"}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
