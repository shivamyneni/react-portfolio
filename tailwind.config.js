const defaultTheme = require("tailwindcss/defaultTheme");
const path = require("path");
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/containers/**/*.{js,ts,jsx,tsx}",
		"./src/**",
	],
	theme: {
		screens: {
			xs: { max: "640px" },

			...defaultTheme.screens,
		},
		extend: {
			keyframes: {
				orbit: {
					"0%": {
						transform:
							"rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
					},
					"100%": {
						transform:
							"rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
					},
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},

				"slide-in": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-out": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-out-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
				"slide-in-up": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"slide-out-up": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(100%)" },
				},
				"slide-in-down": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"slide-out-down": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-100%)" },
				},
				"rotate-in": {
					"0%": { transform: "rotate(-180deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"rotate-out": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-180deg)" },
				},

				"scale-in": {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
				"scale-out": {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(0)" },
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
			dropShadow: {
				"3xl": "20px 20px 20px 20px rgba(2, 90, 78, 1)",
			},
			fontFamily: {
				Sora: ["Sora"],
				Alegreya: ["Alegreya"],
				pixel: ["Press Start 2P"],
				barlow: ["Barlow Condensed"],
				telugu: ["Noto Sans Telugu"],
				Poppins: ["Poppins"],
				Mori: ["Mori", "sans-serif"],
				MoriGothic: ["Mori Gothic", "sans-serif"],
				Acorn: ["Acorn"],
			},
			colors: {
				primary: "#025a4e",
			},
			animation: {
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
			},
			backgroundImage: {
				cursor: `url('${path.resolve(
					__dirname,
					"src/assets/Images/cursor.png"
				)}')`,
			},
		},
	},
	plugins: [],
};
