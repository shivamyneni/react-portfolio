import React, { useRef } from "react";
import logo from "./logo.svg";
import Header from "@components/Header";
import Intro from "@containers/Intro";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Experience from "@containers/Experience";
import Skills from "@containers/Projects";
import SocialButtons from "@components/Socialbutton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Projects from "@containers/Projects";

gsap.registerPlugin(ScrollToPlugin);

function App() {
	const introSectionRef = useRef(null);
	const workSectionRef = useRef(null);
	const skillSectionRef = useRef(null);

	const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
		if (sectionRef.current) {
			gsap.to(window, {
				duration: 0.3,
				ease: "sine",
				scrollTo: {
					y: sectionRef.current.offsetTop,
					autoKill: false,
				},
			});
		}
	};

	return (
		<div className="App overflow-hidden overflow-auto  scrollbar-hide ">
			<Header
				scrollToSection={(section) => {
					if (section === "IntroSection") scrollToSection(introSectionRef);
					if (section === "WorkSection") scrollToSection(workSectionRef);
					if (section === "SkillsSection") scrollToSection(skillSectionRef);
				}}
			/>
			<div className="w-screen flex flex-col  h-min-screen justify-center  items-center  cards overflow-auto  scrollbar-hide">
				<section id="Introsection">
					<Intro ref={introSectionRef} />
				</section>
				<section id="Worksection">
					<Experience ref={workSectionRef} />
				</section>
				<section id="Skillssection" ref={skillSectionRef}>
					<Projects />
				</section>

				<SocialButtons />
			</div>
		</div>
	);
}

export default App;
