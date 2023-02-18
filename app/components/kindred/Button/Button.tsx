import type { ButtonHTMLAttributes } from "react";
import { baseButtonStyles } from "./Button.css";
import { classes } from "~/utils/classes";
import { useTheme } from "~/themes/context";

type ButtonProps = {
  // TODO: infer this type?
  variant?: "outline" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <button
      className={classes(
        baseButtonStyles,
        theme.components.button.variants[variant],
        className
      )}
      {...rest}
    />
  );
};
