import React from "react";
import "../index.css";
import gsap from "gsap";
import Instagram from "assets/Images/Instagram";
import Linkedin from "assets/Images/Linkedin";
import Twitter from "assets/Images/Twitter";
import Github from "assets/Images/Github";
import { COLORS } from "utils/styles";
const SocialButtons = () => {
	const InstalogoRef = React.useRef<HTMLAnchorElement>(null);
	const LinkedinlogoRef = React.useRef<HTMLAnchorElement>(null);
	const TwitterlogoRef = React.useRef<HTMLAnchorElement>(null);
	const GithublogoRef = React.useRef<HTMLAnchorElement>(null);

	React.useEffect(() => {
		if (
			InstalogoRef.current &&
			LinkedinlogoRef.current &&
			TwitterlogoRef.current &&
			GithublogoRef.current
		) {
			gsap
				.timeline()
				.fromTo(
					InstalogoRef.current,
					{ opacity: 0, translateY: 100 },
					{ opacity: 1, translateY: 0, duration: 0.2 }
				)
				.fromTo(
					LinkedinlogoRef.current,
					{ opacity: 0, translateY: 100 },
					{ opacity: 1, translateY: 0, duration: 0.2 }
				)
				.fromTo(
					TwitterlogoRef.current,
					{ opacity: 0, translateY: 100 },
					{ opacity: 1, translateY: 0, duration: 0.2 }
				)
				.fromTo(
					GithublogoRef.current,
					{ opacity: 0, translateY: 100 },
					{ opacity: 1, translateY: 0, duration: 0.2 }
				);

			InstalogoRef?.current?.addEventListener("mouseenter", () => {
				gsap.to(InstalogoRef.current, {
					scale: 1.3,
					duration: 0.2,
					ease: "sin",
				});
			});

			InstalogoRef?.current?.addEventListener("mouseleave", () => {
				gsap.to(InstalogoRef.current, {
					scale: 1,
					duration: 0.2,
					ease: "sin",
				});
			});
		}

		LinkedinlogoRef?.current?.addEventListener("mouseenter", () => {
			gsap.to(LinkedinlogoRef.current, {
				scale: 1.3,
				duration: 0.2,
				ease: "sin",
			});
		});

		LinkedinlogoRef?.current?.addEventListener("mouseleave", () => {
			gsap.to(LinkedinlogoRef.current, {
				scale: 1,
				duration: 0.2,
				ease: "sin",
			});
		});

		TwitterlogoRef?.current?.addEventListener("mouseenter", () => {
			gsap.to(TwitterlogoRef.current, {
				scale: 1.3,
				duration: 0.2,
				ease: "sin",
			});
		});

		TwitterlogoRef?.current?.addEventListener("mouseleave", () => {
			gsap.to(TwitterlogoRef.current, {
				scale: 1,
				duration: 0.2,
				ease: "sin",
			});
		});

		GithublogoRef?.current?.addEventListener("mouseenter", () => {
			gsap.to(GithublogoRef.current, {
				scale: 1.3,
				duration: 0.2,
				ease: "sin",
			});
		});

		GithublogoRef?.current?.addEventListener("mouseleave", () => {
			gsap.to(GithublogoRef.current, {
				scale: 1,
				duration: 0.2,
				ease: "sin",
			});
		});
		return () => {
			if (
				InstalogoRef.current &&
				LinkedinlogoRef.current &&
				TwitterlogoRef.current &&
				GithublogoRef.current
			) {
				gsap.killTweensOf([
					InstalogoRef.current,
					LinkedinlogoRef.current,
					TwitterlogoRef.current,
					GithublogoRef.current,
				]);

				InstalogoRef?.current?.removeEventListener("mouseenter", () => {
					gsap.to(InstalogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				InstalogoRef?.current?.removeEventListener("mouseleave", () => {
					gsap.to(InstalogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				LinkedinlogoRef?.current?.removeEventListener("mouseenter", () => {
					gsap.to(LinkedinlogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				LinkedinlogoRef?.current?.removeEventListener("mouseleave", () => {
					gsap.to(LinkedinlogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				TwitterlogoRef?.current?.removeEventListener("mouseenter", () => {
					gsap.to(TwitterlogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				TwitterlogoRef?.current?.removeEventListener("mouseleave", () => {
					gsap.to(TwitterlogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				GithublogoRef?.current?.removeEventListener("mouseenter", () => {
					gsap.to(GithublogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});

				GithublogoRef?.current?.removeEventListener("mouseleave", () => {
					gsap.to(GithublogoRef.current, {
						scale: 1,
						duration: 0.2,
						ease: "sin",
					});
				});
			}
		};
	}, []);

	return (
		<div className=" xs:hidden sm:hidden md:flex flex-row gap-2  justify-center  fixed bottom-[40px] left-[20px] items-center ">
			<a
				className="p-[6px] rounded-full bg-primary"
				href="https://www.instagram.com/_shivamyneni/"
				ref={InstalogoRef}>
				<Instagram color={COLORS.white} width={"1.5em"} />
			</a>
			<a
				className="p-[6px] rounded-full bg-primary"
				href="https://www.linkedin.com/in/shivamyneni/"
				ref={LinkedinlogoRef}>
				<Linkedin color={COLORS.white} width={"1.5em"} />
			</a>
			<a
				className="p-[6px] rounded-full bg-primary"
				href="https://twitter.com/Shivamyneni1"
				ref={TwitterlogoRef}>
				<Twitter color={COLORS.white} width={"1.5em"} />
			</a>
			<a
				className="p-[6px] rounded-full bg-primary"
				href="https://github.com/shivamyneni"
				ref={GithublogoRef}>
				<Github color={COLORS.white} width={"1.5em"} />
			</a>
		</div>
	);
};

export default SocialButtons;
