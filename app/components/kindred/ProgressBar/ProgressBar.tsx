import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  progressBar,
  progressVar,
} from "~/components/kindred/ProgressBar/ProgressBar.css";

type ProgressBarProps = {
  percent: number;
  activeBg?: string;
  errorBg?: string;
};

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div
      className={progressBar}
      style={assignInlineVars({ [progressVar]: `${props.percent}%` })}
    />
  );
};
