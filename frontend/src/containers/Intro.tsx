import React, { memo } from "react";
import "../index.css";
import gsap from "gsap";

import Logo from "assets/Images/Logo";

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
		<div className="w-screen flex flex-col xs:h-auto sm:h-auto md:h-screen justify-center gradient-background items-center card IntroMainDiv  ">
			<div className="w-screen h-min-screen pt-[8rem]  flex flex-col justify-start items-center">
				<div className="w-3/4 flex flex-col justify-center items-center">
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[5em] self-end "
						ref={sparklogoRef}>
						<Logo width={"100%"} color="white" />
					</div>
					<h1
						className="font-Acorn text-primary font-bold mainheading xs:text-[50px] sm:text-[50px] md:text-9xl"
						ref={titleRef}>
						Hi. I'm Shiva.
						<br />A Developer.
					</h1>
					<div
						className="xs:w-[3em] sm:w-[3em] md:w-[5em] self-start  "
						ref={spark2logoRef}>
						<Logo width={"100%"} color="white" />
					</div>
				</div>
				<p
					className="font-Poppins  mt-[40px] mb-[40px]  text-primary xs:text-[16px] sm:text-[16px] md:text-[20px] font-normal capitalize text-center px-[30px]"
					ref={subtitleRef}>
					Welcome to my little corner on the internet.
					<br /> I am a full stack developer with a passion for building
					beautiful and functional applications.
				</p>
			</div>
		</div>
	);
});

export default Intro;
