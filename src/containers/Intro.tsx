import React, { forwardRef, memo } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from "assets/Images/Logo";
import IntroImage from "assets/Images/IntroImage.jpg";

import { Mouse, MoveDownRight } from "lucide-react";
import MouseIcon from "icons/MouseIcon";

gsap.registerPlugin(ScrollTrigger);
const Intro = memo(
	forwardRef<HTMLElement, {}>((props, ref) => {
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
			<div
				className="w-screen flex flex-col h-auto justify-center items-center card IntroMainDiv IntroSection overflow-auto  scrollbar-hide "
				ref={ref as React.RefObject<HTMLDivElement>}>
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
				<div className="w-screen min-h-screen h-[fit] px-[1rem] pb-[2rem] flex xs:flex-col flex-row items-center bg-[#eec90e] bg-opacity-30 ">
					<img
						src={IntroImage}
						className="w-[50%] md:hidden mt-[3rem]  object-cover rounded-[2rem]"
					/>
					<div className="md:w-[60%] h-full flex  xs:justify-start md:justify-end items-center">
						<div className="h-fit md:w-[90%] flex flex-col items-end  justify-start pr-[2rem]">
							<div className="w-full xs:w-full md:w-3/4 flex flex-col justify-start items-start">
								<p className="font-Acorn text-primary  font-bold  xs:text-[3rem] sm:text-[4rem] md:text-[4rem] uppercase">
									About
								</p>
								<div className="h-[3px] w-full bg-primary" />
							</div>
							<p className="font-Poppins  xs:w-full md:w-3/4 mt-[1rem]  xs:text-[1.2rem] sm:text-[1.2rem] md:text-[1.2rem] text-left text-primary">
								Hi, I’m Naga Siva Sai Myneni, a software engineer with a passion
								for creating efficient and user-focused applications. I
								specialize in front-end development, blending creativity and
								technical expertise to craft seamless digital experiences. With
								a strong foundation in tools like React, Node.js, and Tailwind
								CSS, I love exploring new technologies and finding innovative
								ways to solve problems.
							</p>
						</div>
					</div>

					<img
						src={IntroImage}
						className="w-[30%] h-[60%] xs:hidden     object-cover rounded-[2rem]"
					/>
				</div>
				
			</div>
		);
	})
);

export default Intro;
