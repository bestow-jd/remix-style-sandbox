import { purpleTokens } from "./theme";
import { style, styleVariants } from "@vanilla-extract/css";

export const buttonBase = style({
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  transition: "background 150ms ease-in-out",
  padding: "14px 40px 12px",
  ":disabled": {
    color: purpleTokens.colors.text.disabled,
    fill: purpleTokens.colors.text.disabled,
    stroke: purpleTokens.colors.text.disabled,
  },
});

export const buttonVariants = styleVariants({
  primary: [
    buttonBase,
    {
      borderColor: "transparent",
      color: purpleTokens.colors.text.onColor,
      fill: purpleTokens.colors.text.onColor,
      backgroundColor: purpleTokens.colors.interaction.primary.default,
      boxShadow: "0 16px 16px -16px rgba(0, 0, 0, .56)",
      // hover
      ":hover": {
        backgroundColor: purpleTokens.colors.interaction.primary.hover,
      },
      // active
      ":active": {
        backgroundColor: purpleTokens.colors.interaction.primary.pressed,
      },
      ":disabled": {
        backgroundColor: purpleTokens.colors.interaction.disabled,
        boxShadow: "none",
      },
    },
  ],
  outline: [
    buttonBase,
    {
      borderColor: purpleTokens.colors.interaction.secondary.border,
      color: purpleTokens.colors.interaction.secondary.border,
      backgroundColor: purpleTokens.colors.background.default,
      // hover
      ":hover": {
        borderColor: purpleTokens.colors.interaction.secondary.border,
        backgroundColor: purpleTokens.colors.interaction.secondary.hover,
      },
      // active
      ":active": {
        backgroundColor: purpleTokens.colors.interaction.secondary.pressed,
      },
      ":disabled": {
        backgroundColor: purpleTokens.colors.neutral["0"],
        borderColor: purpleTokens.colors.text.disabled,
      },
    },
  ],
});

// First attempt at "Variants", I made different style collections
// and programmatically added the correct class based on the variant prop inside the button component.
// Seems unnecessary given the variant stuff above
//
// export const primaryButton = style({
//   borderColor: "transparent",
//   color: purpleTokens.colors.text.onColor,
//   fill: purpleTokens.colors.text.onColor,
//   backgroundColor: purpleTokens.colors.interaction.primary.default,
//   boxShadow: "0 16px 16px -16px rgba(0, 0, 0, .56)",
//   // hover
//   ":hover": {
//     backgroundColor: purpleTokens.colors.interaction.primary.hover,
//   },
//   // active
//   ":active": {
//     backgroundColor: purpleTokens.colors.interaction.primary.pressed,
//   },
//   ":disabled": {
//     backgroundColor: purpleTokens.colors.interaction.disabled,
//     boxShadow: "none",
//   },
// });
//
// export const outlineButton = style({
//   // base
//   borderColor: purpleTokens.colors.interaction.secondary.border,
//   color: purpleTokens.colors.interaction.secondary.border,
//   backgroundColor: purpleTokens.colors.background.default,
//   // hover
//   ":hover": {
//     borderColor: purpleTokens.colors.interaction.secondary.border,
//     backgroundColor: purpleTokens.colors.interaction.secondary.hover,
//   },
//   // active
//   ":active": {
//     backgroundColor: purpleTokens.colors.interaction.secondary.pressed,
//   },
//   ":disabled": {
//     backgroundColor: purpleTokens.colors.neutral["0"],
//     borderColor: purpleTokens.colors.text.disabled,
//   },
// });
