import Navbar from "@components/Navbar.tsx";
import React from "react";
import gsap from "gsap";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";
const Header = () => {
  const headerRef = React.useRef(null);
  const navitemRef = React.useRef<any>(null);
  const navbarRef = React.useRef(null);
  const navbarHeaderRef = React.useRef<any>(null);

  const [showNavbar, setShowNavbar] = React.useState<boolean>(false);
  const [headerText, setHeaderText] = React.useState<string>("shivamyneni");
  React.useEffect(() => {
    if (showNavbar) {
      gsap
        .timeline()
        .to(navbarRef.current, {
          height: navitemRef.current.clientHeight * 5,
          duration: 0.5,
        })
        .to(".navitem", { opacity: 1, duration: 0.5 });
    }
    if (!showNavbar) {
      gsap
        .timeline()
        .to(".navitem", { opacity: 0, duration: 0.5 })
        .to(navbarRef.current, { height: 0, duration: 0.5 });
    }
  }, [showNavbar]);

  React.useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { yPercent: -100 },
      { yPercent: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      className={`w-screen h-auto flex flex-col xs:px-[15px] sm:px-[15px] md:px-[40px] xs:py-[15px] sm:py-[15px] md:py-[40px] fixed  z-50 backdrop-filter backdrop-blur-md bg-white 
        
      }`}
    >
      <div
        className="w-auto h-auto flex flex-row  justify-between"
        ref={headerRef}
      >
        <div className="xs:w-[40vw] sm:w-[40vw] md:w-[25vw] h-fit  ">
          <p
            className=" font-bold xs:text-[20px] sm:text-[15px] transition text-[#5352ED] md:text-[20px] font-Sora uppercase"
            ref={navbarHeaderRef}
            onMouseEnter={() => setHeaderText("my portfolio")}
            onMouseLeave={() => {
              setHeaderText("shivamyneni");
            }}
          >
            {headerText}.
          </p>
        </div>
        <Navbar />
        <UseAnimations
          animation={menu4}
          size={38}
          className="z-50 md:hidden xs:flex sm:hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </div>

      <div
        className="w-[100vw] flex flex-col justify-around  h-0 overflow-hidden  "
        ref={navbarRef}
      >
        <div
          className="xs:w-[40vw] sm:w-[40vw] md:w-[25vw] h-fit opacity-0  navitem"
          ref={navitemRef}
        >
          <p className=" font-bold xs:text-[15px] sm:text-[15px] text-[#5352ED] md:text-[20px] font-pixel mb-[8px] uppercase">
            experiences
          </p>
        </div>
        <div
          className="xs:w-[40vw] sm:w-[40vw] md:w-[25vw] h-fit navitem opacity-0 "
          ref={navitemRef}
        >
          <p className=" font-bold xs:text-[15px] sm:text-[15px] text-[#5352ED] md:text-[20px] font-pixel mb-[8px] uppercase">
            personal projects
          </p>
        </div>
        <div
          className="xs:w-[40vw] sm:w-[40vw] md:w-[25vw] h-fit navitem  opacity-0"
          ref={navitemRef}
        >
          <p className=" font-bold xs:text-[15px] sm:text-[15px] text-[#5352ED] md:text-[20px] font-pixel mb-[8px] uppercase">
            Skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
