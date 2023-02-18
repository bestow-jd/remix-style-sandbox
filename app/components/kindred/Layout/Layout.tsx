import { spacingScale } from "./Layout.css";
import type { SpacingScaleKey } from "./Layout.css";

type Props = {
  space: SpacingScaleKey | string;
};

export const Layout = ({ space }: Props) => {
  const isSpaceToken = space in spacingScale;
  // const className = isSpaceToken ? layoutSprinkle({padding:space}) :

  return <div />;
};
