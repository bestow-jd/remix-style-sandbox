export type ColorShade = {
  0?: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type ThemeTokens = {
  colors: {
    primaryCTA: ColorShade;
    neutral: ColorShade;
    blue: ColorShade;
  };
};

export const baseColorTokens = {
  neutral: {
    0: "#FFFFFF",
    50: "#FAFAFA",
    100: "#F8F8F8",
    200: "#F3F3F3",
    300: "#E8E8E8",
    400: "#D1D1D1",
    500: "#BBBBBB",
    600: "#9B9B9B",
    700: "#6E6E6E",
    800: "#464646",
    900: "#282624",
  },
  blue: {
    50: "#F5F7F7",
    100: "#E9F0F1",
    200: "#D5EBEF",
    300: "#B2E3EC",
    400: "#7DD9E8",
    500: "#39B2C6",
    600: "#238C9D",
    700: "#177482",
    800: "#0C5561",
    900: "#0B3541",
  },
};

export const buildBaseColorMappings = (tokens: ThemeTokens) => ({
  interaction: {
    focus: tokens.colors.primaryCTA["600"],
    disabled: tokens.colors.neutral["300"],
    primary: {
      default: tokens.colors.primaryCTA["600"],
      hover: tokens.colors.primaryCTA["400"],
      pressed: tokens.colors.primaryCTA["800"],
    },
    secondary: {
      border: tokens.colors.primaryCTA["800"],
      hover: tokens.colors.primaryCTA["200"],
      pressed: tokens.colors.primaryCTA["400"],
    },
    tertiary: {
      hover: tokens.colors.neutral["200"],
      pressed: tokens.colors.neutral["400"],
      selected: tokens.colors.primaryCTA["200"],
    },
  },
  text: {
    heading: tokens.colors.blue["900"],
    default: tokens.colors.neutral["900"],
    subdued: tokens.colors.neutral["700"],
    disabled: tokens.colors.neutral["500"],
    onColor: tokens.colors.neutral["0"],
    action: tokens.colors.primaryCTA["800"],
    hover: tokens.colors.primaryCTA["600"],
    pressed: tokens.colors.primaryCTA["700"],
  },
  border: {
    onColor: tokens.colors.neutral["0"],
    default: tokens.colors.neutral["400"],
    activated: tokens.colors.neutral["700"],
    selected: tokens.colors.primaryCTA["600"],
    brand: tokens.colors.blue["900"],
  },
  background: {
    default: tokens.colors.neutral["0"],
    surface1: tokens.colors.neutral["50"],
    surface2: tokens.colors.neutral["200"],
    brand: tokens.colors.blue["900"],
  },
});