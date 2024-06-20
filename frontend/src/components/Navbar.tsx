import React from "react";
import "../index.css";
import gsap from "gsap";

const Navbar = () => {
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const skillsProgressbarRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const aboutProgressbarRef = React.useRef<HTMLDivElement>(null);
  const workRef = React.useRef<HTMLDivElement>(null);
  const workProgressbarRef = React.useRef<HTMLDivElement>(null);


  return (
    <div className="w-screen  flex xs:flex-col sm:flex-col md:flex-row xs:py-[15px] sm:py-[15px] md:py-[40px] xs:items-end sm:items-end md:items-center xs:px-[20px] sm:px-[20px] md:justify-center fixed   ">
      <div className=" bg-top  ml-[30px] relative">
        <a
          href="https://www.instagram.com/_shivamyneni/"
          className="font-Acorn w-fit h-fit text-primary  font-semibold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase   hoverMebottom button">
          About
        </a>
      </div>
      <div className=" bg-top  ml-[30px] relative ">
        <a href='#Experience' className="font-Acorn w-fit h-fit text-primary font-semibold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase   hoverMebottom button">
          Professional Experience
        </a>
      </div>
      <div
        className=" bg-top  ml-[30px] relative"
        ref={skillsRef}>
        <a className="font-Poppins w-fit h-fit text-primary font-semibold xs:text-[15px] sm:text-[13px] md:text-[18px]  mix-blend-overlay uppercase   hoverMebottom button">
          skills
        </a>
      </div>
    </div>
  );
};

export default Navbar;
