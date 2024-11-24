import React, { forwardRef, AnchorHTMLAttributes } from "react";

interface LinkedinProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: string; // Color for the SVG fill
}

const Linkedin = forwardRef<HTMLAnchorElement, LinkedinProps>(({ color, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className="p-[6px] rounded-xl bg-primary bg-opacity-80 backdrop-blur-md border-[3px] border-white hover:border-primary hover:bg-white transition-colors group duration-600"
      href="https://www.linkedin.com/in/shivamyneni/"
      {...props} // Spread additional props
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          fillRule="nonzero"
          className="text-white transition-colors duration-300 group-hover:text-primary"
        >
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
          <path
            className="fill-current"
            d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1Zm3-1a1 1 0 0 1 .984.821 5.82 5.82 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159.473.15.948.43 1.3.907.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.548.548 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1ZM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
          />
        </g>
      </svg>
    </a>
  );
});

export default Linkedin;
