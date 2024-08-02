import React, { memo, useEffect, useRef } from "react";
import "../index.css";
import gsap from "gsap";
import Instagram from "assets/Images/Instagram";
import Linkedin from "assets/Images/Linkedin";
import Twitter from "assets/Images/Twitter";
import Github from "assets/Images/Github";
import { COLORS } from "utils/styles";
import Logo from "assets/Images/Logo";
import Intro from "@containers/Intro";
import About from "@containers/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "@containers/Experience";
import SocialButtons from "@containers/Socialbutton";
import Skills from "@containers/Skills";

gsap.registerPlugin(ScrollTrigger);

const Home = memo(() => {
  return (
   <></>
  );
});

export default Home;
