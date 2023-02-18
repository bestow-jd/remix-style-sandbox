import { baseSpacingScale, buildBaseColorMappings } from "~/themes/base-theme";
import { createThemeContract } from "@vanilla-extract/css";

const emptyShadeObject = {
  0: "",
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
};

const emptyColorObject = {
  neutral: emptyShadeObject,
  primaryCTA: emptyShadeObject,
  blue: emptyShadeObject,
  red: emptyShadeObject,
};

export const theme = createThemeContract({
  color: {
    ...emptyColorObject,
    ...buildBaseColorMappings(emptyColorObject),
  },
  spacing: baseSpacingScale,
  font: {
    heading: "",
    body: "",
  },
});
