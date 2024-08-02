import React, { memo } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "components/magicui/text-reveal";
import Logo from "assets/Images/Logo";
import SparklesText from "@components/magicui/sparkles-text";

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

	React.useEffect(() => {
		gsap.fromTo(
			".quote1",
			{ opacity: 0,yPercent:100},
			{
				scrollTrigger: {
					trigger: ".quote1",
					start: "top 80%",
					end: "bottom 30%",
					scrub: 1,
				},
				opacity: 1,
				yPercent:0,
				duration: 0.5,
				ease: "sine",
			}
		);
		gsap.fromTo(
			".quote2",
			{ opacity: 0,yPercent:100 },
			{
				scrollTrigger: {
					trigger: ".quote2",
					start: "top 75%",
					end: "bottom 35%",
					scrub: 1,
				},
				yPercent:0,
				opacity: 1,
				duration: 0.5,
				ease: "sine",
			}
		);
		gsap.fromTo(
			".quote3",
			{ opacity: 0 ,yPercent:100},
			{
				scrollTrigger: {
					trigger: ".quote3",
					start: "top 70%",
					end: "bottom 40%",
					scrub: 1,
				},
				yPercent:0,
				opacity: 1,
				duration: 0.5,
				ease: "sine",
			}
		);
		gsap.fromTo(
			".quote4",
			{ opacity: 0,yPercent:100 },
			{
				scrollTrigger: {
					trigger: ".quote4",
					start: "top 75%",
					end: "bottom 45%",
					
					scrub: 1,
				},
				yPercent:0,
				opacity: 1,
				duration: 0.5,
				ease: "sine",
			}
		);
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
					<br /> I am a full stack developer with a passion for building
					beautiful and functional applications.
				</p>
			</div>
			<div
				className="w-screen h-3/4 px-[60px] py-[80px] flex flex-col items-start justify-around
	">
				<p className="font-Poppins font-bold text-[48px] text-primary capitalize quote1 ">
					Crafting Dynamic Web Experiences.
				</p>
				<p className="font-Poppins font-bold text-[48px] text-primary capitalize quote2 ">
					MERN Stack Enthusiast.
				</p>
				<p className="font-Poppins font-bold text-[48px] text-primary capitalize quote3 ">
					Design Aficionado.
				</p>
				<p className="font-Poppins font-bold text-[48px] text-primary capitalize quote4 ">
					User Experience Advocate.
				</p>
			</div>
		</div>
	);
});

export default Intro;
