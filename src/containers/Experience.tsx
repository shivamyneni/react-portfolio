import React, { forwardRef, useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TechStack, ToolStack } from "utils/styles";

const Experience = forwardRef<HTMLElement, {}>((props, ref) => {
	// const ref = useRef<HTMLDivElement>();

	const data = [
		{
			company: "Capital One",
			role: "Data Architect",
			duration: "Oct 2024 - Present",
			description:
				"Working as a Data Architect specializing in migrating legacy systems to OneStream, ensuring efficient data transformation,integration, and streamlined processes.",
			tags: ["Data Migration", "Legacy Systems", "OneStream Integration"],
		},
		{
			company: "2MR Labs",
			role: "Software Engineer",
			duration: "June 2021 - Aug 2022",
			description:
				"Lead Frontend Developer for the company's website and mobile app, responsible for designing and developing the website and frontend components from scratch.",
			tags: [
				"React Native",
				"Reactjs",
				"TailwindCSS",
				"Firebase",
				"GraphQL",
				"React Native Reanimated",
				"Apollo",
			],
		},
		

	
	];
	return (
		<section
			className="w-screen h-auto bg-white rounded-t-[30px] h-auto overflow-auto  scrollbar-hide"
			ref={ref as React.RefObject<HTMLElement>}>
			<div className="w-screen min-h-screen h-[fit] px-[1rem] pb-[2rem] flex xs:flex-col flex-row items-center  bg-opacity-30  ">
				<div className="md:w-[60%] h-full flex  xs:justify-start md:justify-end items-center">
					<div className="h-fit md:w-[90%] flex flex-col items-end  justify-start pr-[2rem]">
						<div className="w-full xs:w-full md:w-3/4 flex flex-col justify-start items-start">
							<p className="font-Acorn text-primary  font-bold  xs:text-[3rem] sm:text-[4rem] md:text-[4rem] xs:mt-[3rem] md:mt-[8rem] uppercase">
								Experience
							</p>
							<div className="h-[3px] w-full bg-primary" />
						</div>
						{data.map((item) => (
							<div className="flex xs:flex-col md:flex-row gap-2 w-full justify-between  md:w-3/4   mt-[1.5rem]">
								<div className="flex md:w-1/4 md:text-[0.9rem] flex-row font-Poppins text-primary ">
									{item.duration}
								</div>
								<div className="flex flex-col md:w-3/4 items-start md:ml-[2rem] justify-start">
									<div className="flex flex-row justify-center items-center ">
										<p className="font-Acorn text-primary font-bold xs:text-[1.4rem] md:text-[1.5rem]">
											{item.role}
										</p>
										<p className="font-Poppins text-primary ml-[1rem] text-[0.8rem]  px-[0.5rem] py-[0.2rem] mr-[0.4rem] bg-primary bg-opacity-20  rounded-[0.5rem] hover:bg-opacity-100 hover:text-white ">
											{item.company}
										</p>
									</div>
									<p className="w-full font-Poppins text-primary text-left">
										{item.description}
									</p>
									<div className="flex flex-row mt-[1rem] flex-wrap ">
										{item.tags.map((tag) => (
											<div className="px-[0.5rem] py-[0.2rem] mr-[0.4rem] mt-[0.5rem] bg-primary bg-opacity-20 font-Poppins text-primary rounded-full text-[0.8rem]">
												{tag}
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className="w-screen  xs:h-[50vh] sm:h-[50vh] md:h-auto flex xs:flex-col sm:flex-col md:flex-row justify-center items-center ">
				<div className="xs:w-full sm:w-full md:w-[50vw] lg:w-[70vw] xs:h-full sm:h-full md:h-[50vh] lg:h-[100vh] flex justify-center items-center ">
					<iframe
						title="Spline Scene"
						src="https://my.spline.design/miniroommusiccopy-6d221273a98ca939a13b2d19173d0f41/"
						frameBorder="0"
						className="w-full h-full "></iframe>
				</div>
				<div className="xs:hidden sm:hidden md:flex xs:w-0 sm:w-0  md:w-1/2 h-auto flex flex-col justify-center items-start ">
					<p className="font-Acorn text-primary mt-[20px] font-bold  xs:text-[2rem] sm:text-[2rem] md:text-[30px] heading">
						Professional Experience
					</p>

					<div className="flex flex-col pr-[80px] ">
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
					<div className="flex flex-col pr-[80px]">
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
					<div className="w-auto flex flex-wrap h-auto mb-[40px] mt-[40px]">
						<div className="w-full  flex flex-col  border-primary rounded-[20px] border-[2px] p-[10px]">
							<p className="font-Acorn self-start text-[18px] text-primary font-bold">
								Tech Stack
							</p>
							<div className="flex flex-row flex-wrap mt-[6px] gap-[8px]">
								{TechStack.map((tech) => {
									return (
										<img
											className="w-[34px] transition hover:scale-125 ease-in-out"
											src={tech.src}
										/>
									);
								})}
							</div>
							<p className="font-Acorn self-start text-[18px] mt-[10px] text-primary font-bold">
								Tool Stack
							</p>
							<div className="flex flex-row flex-wrap mt-[6px] gap-[8px]">
								{ToolStack.map((tech) => {
									return (
										<img
											className="w-[34px] transition hover:scale-125 ease-in-out"
											src={tech.src}
										/>
									);
								})}
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
					<div className="flex flex-row mt-[6px] flex-wrap gap-[8px]">
						{TechStack.map((tech) => {
							return (
								<img
									className="w-[34px] hover:scale-125 ease-in-out"
									src={tech.src}
								/>
							);
						})}
					</div>
					<p className="font-Acorn self-start text-[18px] mt-[10px] text-primary font-bold">
						Tool Stack
					</p>
					<div className="flex flex-row mt-[6px] flex-wrap gap-[8px]">
						{ToolStack.map((tech) => {
							return (
								<img
									className="w-[34px] hover:scale-125 ease-in-out"
									src={tech.src}
								/>
							);
						})}
					</div>
				</div>
			</div> */}
		</section>
	);
});
export default Experience;
