import Header from "@containers/Header.tsx";

import github from "react-useanimations/lib/github";
import React from "react";
import instagram from "@images/instagram.png";
import linkedin from "@images/linkedin.png";
import twitter from "@images/twitter.png";
import githublogo from "@images/github.png";
import developer from "@images/developer.png";
import gsap from "gsap";

import UseAnimations from "react-useanimations";

const Intro = () => {
  const introRef = React.useRef(null);
  const titleRef = React.useRef(null);
  React.useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        introRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 1 }
      );
  }, []);
  return (
    <div className="max-w-[100vw] max-h-screen  bg-white flex xs:flex-col sm:flex-col md:flex-row xs:justify-center md:items-center">
      <div
        className="xs:max-w-[100vw] sm:max-w-[100vw] mt-[200px]  flex flex-col md:max-w-[50vw]  xs:max-h-[50vh] sm:max-h-[50vh] md:max-h-[100vh]  bg-cover items-start"
        ref={introRef}
      >
        <p
          className="font-barlow xs:text-[30px] md:text-[60px] uppercase text-[#5352ED] px-[30px] font-extrabold
      "
        >
          shiva myneni
        </p>
        <p
          ref={titleRef}
          className="  font-barlow xs:text-[30px] md:text-[50px] uppercase px-[30px] text-[#e63351] font-extrabold"
        ></p>
        <p className="font-Sora text-[#5352ED] text-[16px] font-bold  px-[30px] capitalize">
          full stack & React native developer
        </p>
        <p className="font-Sora text-[13px] text-[#5352ED] font-normal  px-[30px] capitalize text-start">
          I have handson experience in mobile app development and web
          development with react native and reactjs.
        </p>
        <div className="flex flex-row px-[30px] mt-[20px]">
          <a href="https://www.instagram.com/_shivamyneni/">
            <img
              src={instagram}
              className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px]  hover:scale-125"
            />
          </a>
          <a href="https://www.linkedin.com/in/shivamyneni/">
            <img
              src={linkedin}
              className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px] hover:scale-125"
            />
          </a>
          <a href="https://twitter.com/Shivamyneni1">
            <img
              src={twitter}
              className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px] hover:scale-125"
            />
          </a>
          <a href="https://github.com/shivamyneni">
            <img
              src={githublogo}
              className=" xs:h-[50px] sm:h-[50px] md:h-[60px] transition xs:w-[50px] sm:w-[50px] md:w-[60px] hover:scale-125"
            />
          </a>
        </div>
      </div>
      <div className="xs:w-[100vw] sm:w-[100vw] md:w-[50vw] xs:h-[50vh] sm:h-[50vh] md:h-[100vh]  ">
        <img src={developer} className="bg-white aspect-square " />
      </div>
    </div>
  );
};

export default Intro;
