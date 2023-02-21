import { purpleThemeClass } from "./theme-style.css";
import { buttonBase, buttonVariants, inputs } from "./components.css";

export const PURPLE_THEME = {
  name: "Purple Theme",
  key: "PURPLE_THEME",
  class: purpleThemeClass,
  components: {
    button: {
      base: buttonBase,
      variants: buttonVariants,
    },
    inputs: inputs,
  },
};
