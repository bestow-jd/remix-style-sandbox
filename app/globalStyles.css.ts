import { globalStyle } from "@vanilla-extract/css";
import { theme } from "~/themes/contract.css";

globalStyle("html, body", {
  backgroundColor: theme.color.background.surface1,
  color: theme.color.text.action,
  margin: 0,
  padding: 0,
});

globalStyle("h1, h2, h3, h4, h5", {
  fontFamily: theme.font.heading,
  margin: 0,
});

globalStyle("h1", {
  fontWeight: 500,
});

globalStyle("h3", {
  fontWeight: 400,
  letterSpacing: "0.12em",
  fontSize: 15,
});

globalStyle("p, button, a", {
  fontFamily: theme.font.body,
});

globalStyle("div", {
  boxSizing: "border-box",
});
