import React, { memo } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "components/magicui/text-reveal";
import Logo from "assets/Images/Logo";
import SparklesText from "@components/magicui/sparkles-text";
import { Mouse, MoveDownRight } from "lucide-react";
import MouseIcon from "icons/MouseIcon";

gsap.registerPlugin(ScrollTrigger);
const Intro = memo(() => {
	const sparklogoRef = React.useRef<HTMLDivElement>(null);
	const spark2logoRef = React.useRef<HTMLDivElement>(null);
	const titleRef = React.useRef<HTMLDivElement>(null);
	const subtitleRef = React.useRef<HTMLDivElement>(null);
	const mouseIconRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (
			titleRef.current &&
			subtitleRef.current &&
			sparklogoRef.current &&
			spark2logoRef.current
		) {
			gsap
				.timeline()
				.fromTo(
					titleRef.current,
					{ opacity: 0, translateY: -20 },
					{ opacity: 1, translateY: 0, duration: 0.5 }
				)
				.fromTo(
					subtitleRef.current,
					{ translateY: -5, opacity: 0 },
					{ translateY: 0, opacity: 1, duration: 0.2 }
				)

				.fromTo(
					sparklogoRef.current,
					{ scale: 0 },
					{ scale: 1, duration: 0.3, repeat: -1, repeatDelay: 2, yoyo: true }
				)
				.fromTo(
					spark2logoRef.current,
					{ scale: 0 },
					{ scale: 1, duration: 0.3, repeat: -1, repeatDelay: 2, yoyo: true }
				);
		}

		return () => {
			if (
				titleRef.current &&
				subtitleRef.current &&
				sparklogoRef.current &&
				spark2logoRef.current
			) {
				gsap.killTweensOf([
					titleRef.current,
					subtitleRef.current,
					sparklogoRef.current,
					spark2logoRef.current,
				]);
			}
		};
	}, []);

	// React.useEffect(() => {
	// 	gsap.fromTo(
	// 		".quote1",
	// 		{ yPercent: 100, opacity: 0 },
	// 		{ yPercent: 0, duration: 1, opacity: 1, ease: "sine" }
	// 	);
	// }, []);

	return (
		<div className="w-screen flex flex-col h-auto justify-center items-center card IntroMainDiv IntroSection  ">
			<div className="w-screen xs:h-auto sm:h-auto  md:min-h-screen pt-[8rem]  flex flex-col justify-end items-center gradient-background">
				<div className="w-3/4 flex flex-col justify-center items-center ">
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[110px] lg:w-[5em] self-end "
						ref={sparklogoRef}>
						<Logo width={"100%"} height={"100%"} color="white" />
					</div>
					<h1
						className="font-Acorn text-primary font-bold mainheading xs:text-[50px] sm:text-[50px] md:text-[100px] lg:text-9xl   "
						ref={titleRef}>
						Hi, I'm Shiva.
						<br />A Developer.
					</h1>
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[130px] lg:w-[5em] self-start  "
						ref={spark2logoRef}>
						<Logo width={"100%"} height={"100%"} color="white" />
					</div>
				</div>
				<p
					className="font-Poppins  mt-[40px] mb-[40px]  text-primary xs:text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-normal capitalize text-center px-[30px] "
					ref={subtitleRef}>
					Welcome to my little corner on the internet.
				</p>
				<MouseIcon />

				<p className="font-Poppins text-sm text-primary mb-4 capitalize">
					Scroll to View Content
				</p>
			</div>
			<div className="w-screen bg-opacity-10 px-[15%] xs:h-auto sm:h-auto  md:h-screen   mb-[20px]  xs:py-[10%] sm:py-[10%] md:py-[2%] flex flex-col justify-center items-start bg-primary overflow-hidden  border-[4px] border-primary rounded-b-[2%] mx-[2px]">
				<div className=" flex flex-row justify-center items-center mb-[40px] ml-[-30px] items-self-start xs:mt-[32px] sm:mt-[32px] md:mt-[10px]">
					<p className="font-Acorn  md:text-[32px] font-bold text-primary ">
						About
					</p>
					<MoveDownRight className="ml-[8px] w-8 h-8 text-primary" />
				</div>
				<div className="text-reveal">
					<span className="font-Acorn font-bold xs:text-[24px] sm:text-[32px] md:text-[64px] text-center text-primary capitalize quote1 block reveal-text">
						Hi! I am a full stack developer currently seeking full-time work
						with a great company!
					</span>
				</div>
			</div>
		</div>
	);
});

export default Intro;
