import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "~/themes/contract.css";

export const textColor = createSprinkles(
  defineProperties({
    properties: {
      color: theme.color.text,
      backgroundColor: theme.color.text,
    },
  })
);

export const bgColor = createSprinkles(
  defineProperties({
    properties: {
      color: theme.color.text,
      backgroundColor: theme.color.text,
    },
  })
);
