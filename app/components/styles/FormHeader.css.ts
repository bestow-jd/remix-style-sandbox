import { style } from "@vanilla-extract/css";
import { theme } from "~/themes/contract.css";

export const formHeader = style({
  width: "100%",
  height: 160,
  background: theme.color.background.accent,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingBottom: 24,
  paddingTop: 24,
  boxSizing: "border-box"
});
