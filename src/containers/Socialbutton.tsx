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
//
		// 	InstalogoRef?.current?.addEventListener("mouseenter", () => {
		// 		gsap.to(InstalogoRef.current, {
		// 			borderColor: "white",

		// 			duration: 0.3,
		// 			ease: "sine",
		// 		});
		// 	});

		// 	InstalogoRef?.current?.addEventListener("mouseleave", () => {
		// 		gsap.to(InstalogoRef.current, {
		// 			borderColor: "#025a4e",
		// 			duration: 0.3,
		// 			ease: "sine",
		// 		});
		// 	});
		// }

		// LinkedinlogoRef?.current?.addEventListener("mouseenter", () => {
		// 	gsap.to(LinkedinlogoRef.current, {
		// 		borderColor: "white",

		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
		// });

		// LinkedinlogoRef?.current?.addEventListener("mouseleave", () => {
		// 	gsap.to(LinkedinlogoRef.current, {
		// 		borderColor: "#025a4e",
		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
		// });

		// TwitterlogoRef?.current?.addEventListener("mouseenter", () => {
		// 	gsap.to(TwitterlogoRef.current, {
		// 		borderColor: "white",

		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
		// });

		// TwitterlogoRef?.current?.addEventListener("mouseleave", () => {
		// 	gsap.to(TwitterlogoRef.current, {
		// 		borderColor: "#025a4e",
		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
		// });

		// GithublogoRef?.current?.addEventListener("mouseenter", () => {
		// 	gsap.to(GithublogoRef.current, {
		// 		borderColor: "white",

		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
		// });

		// GithublogoRef?.current?.addEventListener("mouseleave", () => {
		// 	gsap.to(GithublogoRef.current, {
		// 		borderColor: "#025a4e",
		// 		duration: 0.3,
		// 		ease: "sine",
		// 	});
	}
		return () => {
		// 	if (
		// 		InstalogoRef.current &&
		// 		LinkedinlogoRef.current &&
		// 		TwitterlogoRef.current &&
		// 		GithublogoRef.current
		// 	) {
		// 		gsap.killTweensOf([
		// 			InstalogoRef.current,
		// 			LinkedinlogoRef.current,
		// 			TwitterlogoRef.current,
		// 			GithublogoRef.current,
		// 		]);

		// 		InstalogoRef?.current?.removeEventListener("mouseenter", () => {
		// 			gsap.to(InstalogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		InstalogoRef?.current?.removeEventListener("mouseleave", () => {
		// 			gsap.to(InstalogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		LinkedinlogoRef?.current?.removeEventListener("mouseenter", () => {
		// 			gsap.to(LinkedinlogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		LinkedinlogoRef?.current?.removeEventListener("mouseleave", () => {
		// 			gsap.to(LinkedinlogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		TwitterlogoRef?.current?.removeEventListener("mouseenter", () => {
		// 			gsap.to(TwitterlogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		TwitterlogoRef?.current?.removeEventListener("mouseleave", () => {
		// 			gsap.to(TwitterlogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		GithublogoRef?.current?.removeEventListener("mouseenter", () => {
		// 			gsap.to(GithublogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});

		// 		GithublogoRef?.current?.removeEventListener("mouseleave", () => {
		// 			gsap.to(GithublogoRef.current, {
		// 				scale: 1,
		// 				duration: 0.2,
		// 				ease: "sin",
		// 			});
		// 		});
		// 	}
		};
	}, []);

	return (
		<div className=" xs:hidden sm:hidden md:flex flex-row gap-2  justify-center  fixed bottom-[40px] left-[20px] items-center ">
		
				<Instagram color={COLORS.white}  />
			
			
				<Linkedin color={COLORS.white} />
			
			
				<Twitter color={COLORS.white}  />
			
			
				<Github color={COLORS.white}  />
			
		</div>
	);
};

export default SocialButtons;
