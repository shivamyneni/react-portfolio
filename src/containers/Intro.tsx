import React, { memo } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "components/magicui/text-reveal";
import Logo from "assets/Images/Logo";
import SparklesText from "@components/magicui/sparkles-text";
import { MoveDownRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const Intro = memo(() => {
	const sparklogoRef = React.useRef<HTMLDivElement>(null);
	const spark2logoRef = React.useRef<HTMLDivElement>(null);
	const titleRef = React.useRef<HTMLDivElement>(null);
	const subtitleRef = React.useRef<HTMLDivElement>(null);

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



	return (
		<div className="w-screen flex flex-col h-auto justify-center items-center card IntroMainDiv IntroSection ">
			<div className="w-screen h-screen pt-[8rem]  flex flex-col justify-start items-center gradient-background ">
				<div className="w-3/4 flex flex-col justify-center items-center">
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[110px] lg:w-[5em] self-end "
						ref={sparklogoRef}>
						<Logo width={"100%"} color="white" />
					</div>
					<h1
						className="font-Acorn text-primary font-bold mainheading xs:text-[50px] sm:text-[50px] md:text-[100px] lg:text-9xl "
						ref={titleRef}>
						Hi, I'm Shiva.
						<br />A Developer.
					</h1>
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[110px] lg:w-[5em] self-start  "
						ref={spark2logoRef}>
						<Logo width={"100%"} color="white" />
					</div>
				</div>
				<p
					className="font-Poppins  mt-[40px] mb-[40px]  text-primary xs:text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-normal capitalize text-center px-[30px]"
					ref={subtitleRef}>
					Welcome to my little corner on the internet.
					{/* <br /> I am a full stack developer with a passion for building
					beautiful and functional applications. */}
				</p>
			</div>
			<div className="w-[70%] h-screen  aspect-video flex flex-col justify-center items-start">
				<div className=" flex flex-row justify-center items-center mb-[40px] ml-[-30px]">
					<p className="font-Acorn text-[32px] font-bold text-primary">About</p>
					<MoveDownRight size={36} className="ml-[8px] text-primary" />
				</div>
				<p className="font-Acorn font-bold xs:text-[24px] sm:text-[32px] md:text-[52px] text-center text-primary capitalize ">
					` Hi! I am a full stack developer currently seeking full-time work
					with a great company! `
				</p>
			</div>
		</div>
	);
});

export default Intro;
