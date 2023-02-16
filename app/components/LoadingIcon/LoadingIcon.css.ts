import { keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(360deg)" },
  "100%": { transform: "rotate(0deg)" },
});

export const spin = style({
  animation: `${rotate} 1.5s infinite linear`
});