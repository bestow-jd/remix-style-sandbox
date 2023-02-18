import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const spacingScale = {
  0: "0px",
  2: "2px",
  4: "4px",
}
export type SpacingScale = typeof spacingScale;
export type SpacingScaleKey = keyof typeof spacingScale;

const properties = defineProperties({
  properties: {
    padding: spacingScale,
    paddingTop: spacingScale,
    paddingBottom: spacingScale,
    paddingLeft: spacingScale,
    paddingRight: spacingScale,
  },
  shorthands: {
    p: ["padding"],
    py: ["paddingBottom", "paddingTop"],
    px: ["paddingLeft", "paddingRight"],
  }
})

const layoutSprinkle = createSprinkles(properties);