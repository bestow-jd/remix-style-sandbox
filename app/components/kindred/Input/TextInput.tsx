import type { InputHTMLAttributes } from "react";

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
  return (
    <div>
      <label htmlFor={id}> {label} </label>
      <input id={id} className={className} {...rest} />
    </div>
  );
};
