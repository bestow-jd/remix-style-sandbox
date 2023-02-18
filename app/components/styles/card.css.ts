import { style } from "@vanilla-extract/css";
import { theme } from "~/themes/contract.css";

export const card = style({
  boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.1);",
  borderRadius: "8px",
  padding: 24,
  backgroundColor: theme.color.background.default,
});
