import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "~/themes/contract.css";

export const spacing = createSprinkles(
  defineProperties({
    properties: {
      padding: theme.spacing,
      paddingTop: theme.spacing,
      paddingBottom: theme.spacing,
      paddingLeft: theme.spacing,
      paddingRight: theme.spacing,
      marginTop: theme.spacing,
      marginBottom: theme.spacing,
      marginLeft: theme.spacing,
      marginRight: theme.spacing,
    },
    shorthands: {
      padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
      p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
      paddingX: ["paddingLeft", "paddingRight"],
      px: ["paddingLeft", "paddingRight"],
      paddingY: ["paddingTop", "paddingBottom"],
      py: ["paddingTop", "paddingBottom"],
      pt: ["paddingTop"],
      pb: ["paddingBottom"],
      margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
      m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
      marginX: ["marginLeft", "marginRight"],
      mx: ["marginLeft", "marginRight"],
      marginY: ["marginTop", "marginBottom"],
      my: ["marginTop", "marginBottom"],
      mt: ["marginTop"],
      mb: ["marginBottom"],
    },
  })
);
