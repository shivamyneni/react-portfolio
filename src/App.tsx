import React, { useRef } from "react";
import logo from "./logo.svg";
import Header from "@containers/Header";
// import Intro from "./containers/Intro";
import Intro from "@containers/Intro";
import "./App.css";
import Home from "screens/Home";
import Experience from "@containers/Experience";
import Skills from "@containers/Skills";
import SocialButtons from "@containers/Socialbutton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
	const IntrosectionRef = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);

	const scrollToSection = (section: string) => {
		console.log(section);
		const Introsection = document.getElementById("Introsection");
		const Worksection = document.getElementById("Worksection");
		const Skillssection = document.getElementById("Skillssection");

		if (section == "IntroSection") {
			gsap.to(window, {
				duration: 0.3,
				scrollTo: {
					y: Introsection?.offsetTop,
				},
			});
		}
		if (section == "WorkSection") {
			gsap.to(window, {
				duration: 1,
				scrollTo: {
					y: Worksection?.offsetTop,
					autoKill: false,
				},
			});
		}
		if (section == "SkillsSection") {
			gsap.to(window, {
				duration: 1,
				scrollTo: {
					y: Skillssection?.offsetTop,
					autoKill: false,
				},
			});
		}
	};
	return (
		<div className="App overflow-hidden ">
			<Header scrollToSection={scrollToSection} />
			<div className="w-screen flex flex-col  h-min-screen justify-center  items-center  cards">
				<section id="Introsection" ref={IntrosectionRef}>
					<Intro />
				</section>
				<section id="Worksection" ref={IntrosectionRef}>
					<Experience />
				</section>
				<section id="Skillssection" ref={IntrosectionRef}>
					<Skills />
				</section>

				<SocialButtons />
			</div>
			<Home />
		</div>
	);
}

export default App;
