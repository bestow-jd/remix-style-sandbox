import { createContext, useContext } from "react";
import { PURPLE_THEME } from "~/themes/purple/theme";
import { BLUE_THEME } from "~/themes/blue/theme";

export const THEMES = {
  BLUE_THEME,
  PURPLE_THEME,
};
export const DEFAULT_THEME = THEMES.PURPLE_THEME;

export const ThemeContext = createContext(DEFAULT_THEME);

export type ThemeKey = keyof typeof THEMES;

export const useTheme = () => {
  return useContext(ThemeContext);
};
