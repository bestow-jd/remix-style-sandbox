import { style, styleVariants } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const flex = createSprinkles(
  defineProperties({
    properties: {
      flexDirection: ["row", "column"],
      justifyContent: [
        "stretch",
        "flex-start",
        "center",
        "flex-end",
        "space-around",
        "space-between",
      ],
    },
  })
);

export const toUpper = style({ textTransform: "uppercase" });
export const w100 = style({ width: "100%" });

export const flexCenter = styleVariants({
  both: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  v: {
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
  },
  h: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
  },
});
