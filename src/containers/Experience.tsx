import React, { forwardRef, useEffect, useRef } from "react";
// import roomModel from "assets/Models/room.glb";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Experience = forwardRef<HTMLElement, {}>((props, ref) => {
	// const ref = useRef<HTMLDivElement>();

	const data = [
		{
			company: "Capital One",
			role: "Data Architect",
			duration: "Oct 2024 - Present",
			description:
				"Working as a Data Architect specializing in migrating legacy systems to OneStream, ensuring efficient data transformation,integration, and streamlined processes.",
			tags: ["Data Migration", "Snow Flake", "OneStream", "Data Integration"],
			companyLink: "https://www.capitalonecareers.com/",
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
			companyLink: "https://www.giantsplanet.com/",
		},
	];

	const RoomModel = () => {
		const { scene } = useGLTF(roomModel);
		const modelRef = useRef();

		useEffect(() => {
			if (modelRef.current) {
				// Log the model's bounding box to determine the axis
				const box = new THREE.Box3().setFromObject(modelRef.current);
				console.log("Bounding Box:", box);

				// Log the model's rotation to check its default axis
				console.log("Model Rotation:", modelRef.current.rotation);
			}
		}, [scene]);
		return <primitive object={scene} scale={1} />;
	};
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
										<a
											href={item.companyLink}
											className="font-Poppins text-primary ml-[1rem] text-[0.8rem]  px-[0.5rem] py-[0.2rem] mr-[0.4rem] bg-primary bg-opacity-20  rounded-[0.5rem] hover:bg-opacity-100 hover:text-white ">
											{item.company}
										</a>
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
				{/* <div className="w-[30%] h-[60vh]  object-cover rounded-[2rem] flex justify-center items-center bg-black  ">
					
					<Canvas camera={{ position: [5, 5, 500] }}>
						<RoomModel />
						<OrbitControls />
					</Canvas>
				</div> */}
			</div>
		</section>
	);
});
export default Experience;
