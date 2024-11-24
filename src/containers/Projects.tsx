import React from "react";
import { TiArrowRight } from "react-icons/ti";
const Projects = () => {
	const projects = ["React ReuseAnalyzer", "Shopease"];
	return (
		<div className="w-screen xs:h-[70vh] md:h-screen   flex items-end  pt-[50px]  scrollbar-hide border-0 border-t-[4px] border-black">
			<div className="flex h-[90%] px-[1.2rem]  flex-col  xs:w-full md:w-1/2  md:items-end">
				<div className="flex h-auto flex-row justify-between  xs:w-full md:w-3/4 items-center ">
					<p className="font-Acorn text-primary mt-[20px] font-bold  xs:text-[3rem] sm:text-[4rem] md:text-[4rem] uppercase">
						Projects
					</p>
					<p className="font-Acorn text-primary mt-[20px]   xs:text-[1.5rem] sm:text-[1.5rem] md:text-[2rem]  ">
						{projects.length}
					</p>
				</div>
				<div className="h-[3px] xs:w-full md:w-3/4 bg-primary" />
				<div className="w-full h-3/4  flex items-end flex-col overflow-auto  scrollbar-hide scroll-snap-y mandatory scroll-smooth">
					{projects.map((project, index) => {
						return (
							<div className=" group w-full flex  flex-col items-end">
								<div className="flex flex-row pt-[1rem] pb-[1rem]   xs:w-full md:w-3/4  items-center   transition-transform transform hover:translate-x-[2px] duration-300">
									<TiArrowRight className="hidden group-hover:flex text-[30px]" />
									<p className="font-Acorn text-primary  font-bold  xs:text-[1.3rem] sm:text-[1rem] md:text-[1.5rem] lowercase">
										{project}
									</p>
								</div>
								{index == projects.length - 1 ? (
									<></>
								) : (
									<div className="h-[3px]  xs:w-full md:w-3/4 bg-primary" />
								)}
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex h-screen flex-col items-end justify-end  xs:hidden  md:w-1/2  items-start ">
				<img
					className="h-[70%] w-[90%] rounded-tl-[2rem] object-cover "
					src="https://plus.unsplash.com/premium_photo-1669298094293-98614cd7df12?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
			</div>
		</div>
	);
};

export default Projects;
