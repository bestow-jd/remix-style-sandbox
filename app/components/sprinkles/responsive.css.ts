import { defineProperties, createRainbowSprinkles } from "rainbow-sprinkles";

const tokens = {
  space: {
    none: 0,
    small: "4px",
    medium: "8px",
    large: "16px",
    // etc.
  },
  colors: {
    blue50: "#eff6ff",
    blue100: "#dbeafe",
    blue200: "#bfdbfe",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    // etc.
  },
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  dynamicProperties: {
    // Define pre-determined values, which will be autosuggested
    color: tokens.colors,
    backgroundColor: tokens.colors,
    margin: tokens.space,
    marginTop: tokens.space,
    marginLeft: tokens.space,
    marginRight: tokens.space,
    marginBottom: tokens.space,
    // Will work with any CSS value
    display: true,
    textAlign: true,
    flexDirection: true,
    justifyContent: true,
    alignItems: true,
  },
  staticProperties: {
    // Build out utility classes that don't use CSS variables
    display: ["block", "flex", "inline-block", "inline-flex"],
  },
  shorthands: {
    bg: ["backgroundColor"],
    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: { },
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    padding: { none: 0, small: "4px", medium: "8px", large: "16px" },
  },
});

export const sprinkles = createRainbowSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
