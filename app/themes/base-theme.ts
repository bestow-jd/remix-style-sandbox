export type ColorShade = {
  0: string;
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

export type ColorTokens = {
  primaryCTA: ColorShade;
  neutral: ColorShade;
  blue: ColorShade;
};

export const baseSpacingScale = {
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px",
  40: "40px",
  44: "44px",
  48: "48px",
  52: "52px",
  56: "56px",
  60: "60px",
  64: "64px",
  96: "96px",
  112: "112px",
  136: "136px",
  144: "144px",
  160: "160px",
  176: "176px",
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
    0: "#FFFFFF",
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
  red: {
    0: "#ffffff",
    50: "#FEF6F6",
    100: "#FCE4E3",
    200: "#F6BCB6",
    300: "#F09D94",
    400: "#E87F73",
    500: "#CB1D15",
    600: "#B71A13",
    700: "#A21711",
    800: "#8D140E",
    900: "#78110C",
  },
};

export const buildBaseColorMappings = (tokens: ColorTokens) => ({
  interaction: {
    focus: tokens.primaryCTA["600"],
    disabled: tokens.neutral["300"],
    primary: {
      default: tokens.primaryCTA["600"],
      hover: tokens.primaryCTA["400"],
      pressed: tokens.primaryCTA["800"],
    },
    secondary: {
      border: tokens.primaryCTA["800"],
      hover: tokens.primaryCTA["200"],
      pressed: tokens.primaryCTA["400"],
    },
    tertiary: {
      hover: tokens.neutral["200"],
      pressed: tokens.neutral["400"],
      selected: tokens.primaryCTA["200"],
    },
  },
  text: {
    heading: tokens.blue["900"],
    default: tokens.neutral["900"],
    subdued: tokens.neutral["700"],
    disabled: tokens.neutral["500"],
    onColor: tokens.neutral["0"],
    action: tokens.primaryCTA["800"],
    hover: tokens.primaryCTA["600"],
    pressed: tokens.primaryCTA["700"],
  },
  border: {
    onColor: tokens.neutral["0"],
    default: tokens.neutral["400"],
    activated: tokens.neutral["700"],
    selected: tokens.primaryCTA["600"],
    brand: tokens.blue["900"],
  },
  background: {
    default: tokens.neutral["0"],
    surface1: tokens.neutral["50"],
    surface2: tokens.neutral["200"],
    brand: tokens.blue["900"],
    accent: tokens.primaryCTA["600"],
  },
});
