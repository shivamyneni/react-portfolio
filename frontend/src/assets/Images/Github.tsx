import React, { CSSProperties, memo } from "react";

const Github = memo((props: CSSProperties) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={props}
      viewBox="0 0 24 24">
      <g
        fill="none"
        fill-rule="nonzero">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <path
          fill={color}
          d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.77 6.77 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.343 9.343 0 0 1 12 5c.961 0 1.874.14 2.703.391.342.104.709.034.988-.18a6.77 6.77 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818-.792.158-1.101 1.155-.495 1.726.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622.21-.82.191-1.646.111-2.28-.071-.568-.17-1.312-.57-1.756-.595-.659-1.58-.271-2.28-.032a9.081 9.081 0 0 0-2.125 1.045A11.432 11.432 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9.08 9.08 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A3.986 3.986 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122-.76-.322-1.152-1.133-1.63-1.753-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566.373.448.869.916 1.58 1.218.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684.283-.314.357-.756.207-1.14Z"
        />
      </g>
    </svg>
  );
});

export default Github;
