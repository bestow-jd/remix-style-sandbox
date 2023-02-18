import { createTheme } from "@vanilla-extract/css";
import {
  baseColorTokens,
  buildBaseColorMappings,
  baseSpacingScale,
} from "../base-theme";
import merge from "lodash.merge";
import { theme } from "~/themes/contract.css";

const blueBaseColors = {
  ...baseColorTokens,
  primaryCTA: {
    0: "#ffffff",
    50: "#E6EDF8",
    100: "#CCDAF1",
    200: "#99B5E4",
    300: "#6691D6",
    400: "#336CC9",
    500: "#0047BB", // Main color of this group
    600: "#0040A8",
    700: "#003283",
    800: "#002B70",
    900: "#001C4B",
  },
};

const blueColors = merge(
  {},
  buildBaseColorMappings(blueBaseColors),
  blueBaseColors
);

export const blueThemeClass = createTheme(theme, {
  color: blueColors,
  spacing: baseSpacingScale,
  font: {
    heading: "Inter",
    body: "Roboto",
  },
});
