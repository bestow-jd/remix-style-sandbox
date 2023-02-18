import { style } from "@vanilla-extract/css";
import { theme } from "~/themes/contract.css";

export const navbarStyles = style({
  width: "100%",
  zIndex: 20,
  height: "3.75rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "rgb(0 0 0 / 10%) 0px 2px 4px 0px",
  padding: 20,
  backgroundColor: theme.color.background.default,
});
