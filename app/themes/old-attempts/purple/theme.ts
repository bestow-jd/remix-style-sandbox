import merge from "lodash.merge";
import type { ColorTokens } from "../../base-theme";
import { baseColorTokens, buildBaseColorMappings } from "../../base-theme";
import { buttonBase, buttonVariants } from "./components.css";

const purpleBaseColors: ColorTokens = {
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

const purpleMappings = buildBaseColorMappings(purpleBaseColors);

export const purpleTokens = merge({}, purpleBaseColors, {
  colors: purpleMappings,
});

export const purpleTheme = merge({}, purpleTokens, {
  buttons: {
    base: buttonBase,
    variants: buttonVariants,
  },
});

export type PurpleTheme = typeof purpleTheme;
