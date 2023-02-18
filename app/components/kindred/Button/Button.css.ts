import { style } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const baseButtonStyles = style({
  cursor: "pointer",
  ":disabled": {
    cursor: "disabled",
  },
});

// color variables
const colorTokens = {
  gray: "#f3f3f3",
  blue: "blue",
};

// Set up our predefined properties
const sprinkleProperties = defineProperties({
// @ts-ignore
  responsiveArray: [],
  shorthands: [],
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    color: colorTokens,
    backgroundColor: colorTokens,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);

export const sprinkledStyles = sprinkles({
  color: {
    mobile: "gray",
    desktop: "blue",
  },
});

export const customProp = style({
  paddingTop: "4rem",
});

// export const mediaQueryProp = style({
//   // This is how you would do a normal media query
//   "@media": {
//     "screen and (min-width: 768px)": {
//       padding: 30,
//     },
//   },
// });
//
// export const sprinkledMediaQuery = sprinkles({
//   // This is how you would do a normal media query
//   padding: {
//     mobile: "medium",
//     desktop: "large",
//   },
// });
