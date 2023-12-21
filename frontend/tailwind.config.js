const defaultTheme = require("tailwindcss/defaultTheme");
const path = require("path");
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "640px" },

      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Sora: ["Sora"],
        Alegreya: ["Alegreya"],
        pixel: ["Press Start 2P"],
        barlow: ["Barlow Condensed"],
        telugu: ["Noto Sans Telugu"],
      },
      backgroundImage: {
        background: `url('${path.resolve(
          __dirname,
          "src/assets/Images/background.png"
        )}')`,
        cursor: `url('${path.resolve(
          __dirname,
          "src/assets/Images/cursor.png"
        )}')`,
      },
    },
  },
  plugins: [],
};
