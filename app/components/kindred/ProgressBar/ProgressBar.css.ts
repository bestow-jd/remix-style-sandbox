import { createVar, style } from "@vanilla-extract/css";
import { theme } from "~/themes/contract.css";

export const progressVar = createVar();
export const activeBg = createVar();
export const errorBg = createVar();

export const progressBar = style({
  borderRadius: "12px",
  height: "16px",
  color: theme.color.neutral["900"],
  backgroundColor: theme.color.neutral["50"],
  borderColor: theme.color.neutral["400"],
  borderWidth: "1px",
  borderStyle: "solid",
  width: "100%",
  position: "relative",
  zIndex: "20",
  ":before": {
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
    backgroundColor: theme.color.primaryCTA["400"],
    content: "",
    height: "100%",
    width: progressVar,
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: 1,
  },
});
