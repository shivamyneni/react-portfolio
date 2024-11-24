import React from "react";
import gsap from "gsap";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

// Define the type for the props
interface NavbarProps {
	scrollToSection: (section: string) => void; // Function type for scrollToSection
}

const Header: React.FC<NavbarProps> = ({ scrollToSection }) => {
	const headerRef = React.useRef(null);
	const navbarRef = React.useRef(null);

	React.useEffect(() => {
		gsap.fromTo(
			headerRef.current,
			{ yPercent: -100 },
			{ yPercent: 0, duration: 1 }
		);
	}, []);

	return (
		<div
			className={`w-[100vw] fixed  z-[30] top-[30px] flex justify-center 
      }`}>
			<div
				className="w-fit mt-[30px] border-[4px] border-opacity-70  border-primary rounded-full flex  xs:py-[15px] sm:py-[15px] md:py-[20px]  items-center xs:px-[20px] sm:px-[20px] justify-center bg-white bg-opacity-60 backdrop-blur-md"
				ref={navbarRef}>
				<div className=" z-50 top   relative">
					<a
						href="https://drive.google.com/file/d/1-qinmAsn7tVUNnVHr4KZ7Li-0BCv3EIp/view?usp=share_link"
						className="font-Acorn w-fit h-fit text-primary  font-semibold xs:text-[15px] sm:text-[13px] md:text-[16px]  mix-blend-overlay uppercase   hoverMebottom button cursor-pointer">
						Resume
					</a>
				</div>
				<div className=" z-50  ml-[16px] relative ">
					<a
						onClick={() => scrollToSection("IntroSection")}
						className="font-Acorn w-fit h-fit text-primary font-semibold xs:text-[15px] sm:text-[13px] md:text-[16px]  mix-blend-overlay uppercase   hoverMebottom button cursor-pointer">
						About
					</a>
				</div>
				<div className="z-50  ml-[16px] relative ">
					<a
						onClick={() => scrollToSection("WorkSection")}
						className="font-Acorn w-fit h-fit text-primary font-semibold xs:text-[15px] sm:text-[13px] md:text-[16px]  mix-blend-overlay uppercase   hoverMebottom button cursor-pointer">
						work
					</a>
				</div>
				<div className="z-50  ml-[16px] relative ">
					<a
						href="mailto:shivamynwni4816@gmail.com"
						className="font-Acorn w-fit h-fit text-primary font-semibold xs:text-[15px] sm:text-[13px] md:text-[16px]  mix-blend-overlay uppercase   hoverMebottom button cursor-pointer">
						contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
