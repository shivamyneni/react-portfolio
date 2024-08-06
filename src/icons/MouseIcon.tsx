import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseIcon: React.FC = () => {
	const rectRef = useRef<SVGRectElement | null>(null);

	useEffect(() => {
		if (rectRef.current) {
			gsap.fromTo(
				rectRef.current,
				{ translateY: 0 },
				{
					translateY: 3,
					repeat: -1,
					yoyo: true,
					duration: 0.8,
				}
			);
		}
	}, []);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="text-primary w-8 h-8 mb-2"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="7" />
			<path ref={rectRef} d="M12 6v4" />
		</svg>
	);
};

export default MouseIcon;
