import type { ButtonHTMLAttributes } from "react";
import type { PurpleTheme } from "~/themes/purple/theme";
import { purpleTheme } from "~/themes/purple/theme";
import { customProp } from "~/components/button/Button.css";

type ButtonProps = {
  variant?: keyof PurpleTheme["buttons"]["variants"];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", ...rest }: ButtonProps) => {
  // TODO: This should come from some sort of context ideally. How will this work?
  const theme = purpleTheme;
  const variants = theme.buttons.variants;
  const isCustomPropEnabled = false;

  return (
    <button
      className={`${variants[variant]} ${isCustomPropEnabled ? customProp : ""}
      `}
      {...rest}
    />
  );
};
