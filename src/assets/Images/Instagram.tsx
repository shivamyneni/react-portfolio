import React, { forwardRef, AnchorHTMLAttributes } from "react";

interface InstagramProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	color?: string; // Optional color prop for the SVG fill
}

const Instagram = forwardRef<HTMLAnchorElement, InstagramProps>(
	({ color, ...props }, ref) => {
		return (
			<a
				ref={ref}
				className="p-[6px] rounded-xl bg-primary bg-opacity-80 backdrop-blur-md border-[3px] border-white hover:border-primary hover:bg-white transition-colors group duration-900"
				href="https://www.instagram.com/_shivamyneni/"
				{...props} // Spread additional props
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					viewBox="0 0 24 24">
					<g
						fill="none"
						fillRule="evenodd"
						className="text-white transition-colors duration-800 group-hover:text-primary">
						<path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
						<path
							className="fill-current"
							d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8Zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
						/>
					</g>
				</svg>
			</a>
		);
	}
);

export default Instagram;
