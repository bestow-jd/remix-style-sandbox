import { theme } from "../contract.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const buttonBase = style({
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  transition: "background 150ms ease-in-out",
  padding: "14px 40px 12px",
  ":disabled": {
    color: theme.color.text.disabled,
    fill: theme.color.text.disabled,
    stroke: theme.color.text.disabled,
  },
});

export const buttonVariants = styleVariants({
  primary: [
    buttonBase,
    {
      borderColor: "transparent",
      color: theme.color.text.onColor,
      fill: theme.color.text.onColor,
      backgroundColor: theme.color.interaction.primary.default,
      boxShadow: "0 16px 16px -16px rgba(0, 0, 0, .56)",
      // hover
      ":hover": {
        backgroundColor: theme.color.interaction.primary.hover,
      },
      // active
      ":active": {
        backgroundColor: theme.color.interaction.primary.pressed,
      },
      ":disabled": {
        backgroundColor: theme.color.interaction.disabled,
        boxShadow: "none",
      },
    },
  ],
  outline: [
    buttonBase,
    {
      borderColor: theme.color.interaction.secondary.border,
      color: theme.color.interaction.secondary.border,
      backgroundColor: theme.color.background.default,
      // hover
      ":hover": {
        borderColor: theme.color.interaction.secondary.border,
        backgroundColor: theme.color.interaction.secondary.hover,
      },
      // active
      ":active": {
        backgroundColor: theme.color.interaction.secondary.pressed,
      },
      ":disabled": {
        backgroundColor: theme.color.neutral["0"],
        borderColor: theme.color.text.disabled,
      },
    },
  ],
});
