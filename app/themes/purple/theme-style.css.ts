import { createTheme } from "@vanilla-extract/css";
import {
  baseColorTokens,
  buildBaseColorMappings,
  baseSpacingScale,
} from "../base-theme";
import merge from "lodash.merge";
import { theme } from "~/themes/contract.css";

const gradients = {
  g1: "linear-gradient(117.04deg, #0B3741 30.16%, #59476B 100%), #FAF5F0",
};

const purpleBaseColors = {
  ...baseColorTokens,
  primaryCTA: {
    0: "#FFFFFF",
    50: "#F9F7FF",
    100: "#EFEBFA",
    200: "#DBD1F0",
    300: "#C9B8EB",
    400: "#A68CD9",
    500: "#8560D0",
    600: "#663DB8",
    700: "#523194",
    800: "#402673",
    900: "#2D1758",
  },
};

const purpleColors = merge(
  {},
  buildBaseColorMappings(purpleBaseColors),
  purpleBaseColors,
  {
    background: {
      accent: gradients.g1,
    },
  }
);

export const purpleThemeClass = createTheme(theme, {
  color: purpleColors,
  spacing: baseSpacingScale,
  font: {
    heading: "Montserrat",
    body: "Open Sans",
  },
});
