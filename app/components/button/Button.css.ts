import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/components/sprinkles/responsive.css";

export const customProp = style({
  paddingTop: "4rem",
});

export const mediaQueryProp = style({
  // This is how you would do a normal media query
  "@media": {
    "screen and (min-width: 768px)": {
      padding: 10,
    },
  },
});

export const sprinkledMediaQuery = sprinkles({
  // This is how you would do a normal media query
  padding: {
    mobile: {

    }
  },
});
