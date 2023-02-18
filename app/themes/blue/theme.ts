import { blueThemeClass } from "./theme-style.css";
import { buttonBase, buttonVariants } from "./components.css";

export const BLUE_THEME = {
  name: "Blue Theme",
  key: "BLUE_THEME",
  class: blueThemeClass,
  components: {
    button: {
      base: buttonBase,
      variants: buttonVariants,
    },
  },
};
