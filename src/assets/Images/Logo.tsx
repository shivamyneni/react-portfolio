import React, { CSSProperties, memo } from "react";

const Logo = memo((props: CSSProperties) => {
	const { color } = props;
	return (
		<div className="group">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={props}
			fill="none"
			viewBox="-10 -10 220 220"
			className="transition-colors duration-300"
			version="1.1">
			<g clip-path="url(#clip0_103_9)">
				<path
					fill={color}
					className="group-hover:text-white"
					strokeWidth="10"
					stroke="#025a4e"
					d="M89.932 6.129c4.225-8.172 15.911-8.172 20.136 0l26.905 52.035a11.33 11.33 0 0 0 4.863 4.863l52.035 26.905c8.172 4.225 8.172 15.911 0 20.136l-52.035 26.905a11.327 11.327 0 0 0-4.863 4.863l-26.905 52.035c-4.225 8.172-15.911 8.172-20.136 0l-26.905-52.035a11.33 11.33 0 0 0-4.863-4.863L6.13 110.068c-8.172-4.225-8.172-15.911 0-20.136l52.035-26.905a11.335 11.335 0 0 0 4.863-4.863L89.932 6.13Z"></path>
			</g>
			</svg>
			</div>
	);
});

export default Logo;
