import { Button } from "~/components/kindred/Button/Button";
import { formHeader } from "~/components/styles/FormHeader.css";
import { textColor } from "~/components/sprinkles/colorToken.css";
import { gutterContainer } from "~/components/styles/gutterContainer.css";
import { flexCenter, toUpper, w100 } from "~/components/styles/utils.css";
import { classes } from "~/utils/classes";
import { card } from "~/components/styles/card.css";
import { spacing } from "~/components/sprinkles/spacing.css";
import { ProgressBar } from "~/components/kindred/ProgressBar/ProgressBar";
import { useState } from "react";

export default function Index() {
  const [progress, setProgress] = useState(50);
  return (
    <main>
      {/* Form Header */}
      <div className={formHeader}>
        <div className={gutterContainer}>
          <h3
            className={classes(
              textColor({ color: "onColor" }),
              spacing({ mb: 6 }),
              toUpper
            )}
          >
            {" "}
            Ready to Apply?{" "}
          </h3>
          <h1 className={textColor({ color: "onColor" })}>
            Here's how it works
          </h1>
        </div>
      </div>
      {/* Form Contents */}
      <div className={classes(flexCenter.h)}>
        <div className={classes(gutterContainer, card, spacing({ mt: 32 }))}>
          <Button variant="primary" className={w100}>
            Primary
          </Button>
          <Button variant="outline">Outline</Button>
          <input
            type="number"
            value={progress}
            style={{ width: "100%" }}
            onChange={(e) => {
              setProgress(+e.target.value);
            }}
          />
          <ProgressBar percent={progress} />
        </div>
      </div>
    </main>
  );
}
