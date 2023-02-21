import type { InputHTMLAttributes } from "react";
import { useTheme } from "~/themes/context";
import { classes } from "~/utils/classes";
import {
  defaultInputStyles,
  defaultLabelStyles,
} from "~/components/kindred/Input/TextInput.css";

export type TextInputProps = {
  label?: string;
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  invalid,
  className,
  id,
  ...rest
}: TextInputProps) => {
  const theme = useTheme();
  return (
    <label
      htmlFor={id}
      className={classes(
        defaultLabelStyles,
        theme.components.inputs.labelStyles
      )}
    >
      {label}
      <input
        type="text"
        id={id}
        className={classes(
          defaultInputStyles,
          theme.components.inputs.inputStyles,
          className
        )}
        {...rest}
      />
    </label>
  );
};
