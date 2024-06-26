import React, { useEffect, useRef } from "react";

import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TechStack, ToolStack } from "utils/styles";

const Experience = () => {
	const ExperienceRef = useRef<HTMLDivElement>();
	useEffect(() => {
		if (ExperienceRef.current) {
			gsap.fromTo(
				".heading",
				{
					opacity: 0,
					duration: 4,
					ease: "fadeIn",
				},
				{ opacity: 1 }
			);
		}
	}, []);

	return (
		<section
			className="w-screen  bg-white rounded-t-[30px] h-auto"
			ref={ExperienceRef}>
			<div className="w-full xs:h-1/2 sm:h-1/2 md:h-screen flex xs:flex-col sm:flex-col md:flex-row justify-center items-center ">
				<div className="w-full xs:h-1/2 sm:h-1/2 md:h-full flex justify-center items-center ">
					<Spline
						className="w-full h-full flex justify-center items-center"
						scene="https://prod.spline.design/2cN3s53ZpKZdsCcD/scene.splinecode"
					/>
					<div className="xs:hidden sm:hidden md:flex md:w-1/2 h-full flex flex-col justify-center items-start pr-[80px]">
						<p className="font-Acorn text-primary mt-[20px] font-bold  xs:text-[2rem] sm:text-[2rem] md:text-[30px] heading">
							Professional Experience
						</p>

						<div className="flex flex-col ">
							<div className="flex flex-row flex-wrap items-center justify-start mt-[10px]">
								<p className="font-Acorn font-medium text-primary text-[20px] ">
									2MR Labs
								</p>

								<p className="font-Poppins font-medium  italic text-primary text-[15px]  ">
									(Software Engineer)
								</p>
								<p className="font-Poppins font-medium  italic text-primary text-[12px]  ">
									(May 2022 - Aug 2022)
								</p>
							</div>
							<p className="font-Poppins font-light text-primary text-start text-[13px]">
								Worked as a Lead Web Developer for the company's website.
							</p>
						</div>
						<div className="flex flex-col ">
							<div className="flex flex-row flex-wrap  items-center justify-start mt-[10px]">
								<p className="font-Acorn font-medium text-primary text-[20px] ">
									Runners Planet
								</p>

								<p className="font-Poppins font-medium italic text-primary text-[15px]  ">
									(Software Engineer)
								</p>
								<p className="font-Poppins font-medium  italic text-primary text-[12px]  ">
									(June 2021 - Aug 2022)
								</p>
							</div>
							<p className="font-Poppins font-light text-primary text-start text-[13px]">
								Worked as a React Native Developer in designing frontend
								Components.
							</p>
						</div>
						<div className="w-full h-auto mt-[40px]">
							<div className="w-full  flex flex-col  border-primary rounded-[20px] border-[2px] p-[10px]">
								<p className="font-Acorn self-start text-[18px] text-primary font-bold">
									Tech Stack
								</p>
								<div className="flex flex-row mt-[6px] gap-[4px]">
									{TechStack.map((tech) => {
										return <img className="w-[34px]" src={tech.src} />;
									})}
								</div>
								<p className="font-Acorn self-start text-[18px] mt-[10px] text-primary font-bold">
									Tool Stack
								</p>
								<div className="flex flex-row mt-[6px] gap-[4px]">
									{ToolStack.map((tech) => {
										return <img className="w-[34px]" src={tech.src} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="xs:w-full sm:w-full md:hidden xs:h-1/2 sm:h-1/2 md:h-full flex flex-col px-[20px] ">
				<p className="font-Poppins text-primary mt-[20px] font-bold text-start  xs:text-[20px] sm:text-[20px] heading ">
					Professional Experience
				</p>

				<div className="flex flex-col ">
					<div className="flex flex-row flex-wrap items-center justify-start mt-[10px]">
						<p className="font-Poppins font-medium text-primary text-[14px] ">
							2MR Labs
						</p>

						<p className="font-Poppins font-medium  italic text-primary text-[13px]  ">
							(Software Engineer)
						</p>
						<p className="font-Poppins font-medium  italic text-primary text-[12px]  ">
							(May 2022 - Aug 2022)
						</p>
					</div>
					<p className="font-Poppins font-light text-primary text-start text-[11px]">
						Worked as a Lead Web Developer for the company's website.
					</p>
				</div>
				<div className="flex flex-col ">
					<div className="flex flex-row flex-wrap  items-center justify-start mt-[10px]">
						<p className="font-Poppins font-medium text-primary text-[14px] ">
							Runners Planet
						</p>

						<p className="font-Poppins font-medium italic text-primary text-[13px]  ">
							(Software Engineer)
						</p>
						<p className="font-Poppins font-medium  italic text-primary text-[12px]  ">
							(June 2021 - Aug 2022)
						</p>
					</div>
					<p className="font-Poppins font-light text-primary text-start text-[11px]">
						Worked as a React Native Developer in designing frontend Components.
					</p>
				</div>
			</div>
			<div className="w-full h-auto md:hidden px-[20px] my-[30px]">
				<div className="w-full  flex flex-col  border-primary rounded-[20px] border-[2px] p-[10px]">
					<p className="font-Acorn self-start text-[18px] text-primary font-bold">
						Tech Stack
					</p>
					<div className="flex flex-row mt-[6px] flex-wrap gap-[4px]">
						{TechStack.map((tech) => {
							return <img className="w-[34px]" src={tech.src} />;
						})}
					</div>
					<p className="font-Acorn self-start text-[18px] mt-[10px] text-primary font-bold">
						Tool Stack
					</p>
					<div className="flex flex-row mt-[6px] gap-[4px]">
						{ToolStack.map((tech) => {
							return <img className="w-[34px]" src={tech.src} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Experience;
