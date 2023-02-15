import type { ButtonHTMLAttributes } from "react";
import type { PurpleTheme } from "~/themes/purple/theme";
import { purpleTheme } from "~/themes/purple/theme";

type ButtonProps = {
  variant?: keyof PurpleTheme["buttons"]["variants"];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", ...rest }: ButtonProps) => {
  // TODO: This should come from some sort of context ideally. How will this work?
  const theme = purpleTheme;
  const variants = theme.buttons.variants;

  return <button className={`${variants[variant]}`} {...rest} />;
};
