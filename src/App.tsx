import React, { useRef } from "react";
import logo from "./logo.svg";
import Header from "@containers/Header";
import Intro from "@containers/Intro";
import "./App.css";

import Experience from "@containers/Experience";
import Skills from "@containers/Skills";
import SocialButtons from "@containers/Socialbutton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
		<div className="App overflow-hidden ">
			<Header
				scrollToSection={(section) => {
					if (section === "IntroSection") scrollToSection(introSectionRef);
					if (section === "WorkSection") scrollToSection(workSectionRef);
					if (section === "SkillsSection") scrollToSection(skillSectionRef);
				}}
			/>
			<div className="w-screen flex flex-col  h-min-screen justify-center  items-center  cards">
				<section id="Introsection">
					<Intro ref={introSectionRef} />
				</section>
				<section id="Worksection">
					<Experience ref={workSectionRef} />
				</section>
				<section id="Skillssection" ref={skillSectionRef}>
					{/* <Skills /> */}
				</section>

				<SocialButtons />
			</div>
		</div>
	);
}

export default App;
