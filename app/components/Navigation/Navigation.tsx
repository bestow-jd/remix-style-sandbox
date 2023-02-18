import { BestowLogo } from "~/components/kindred/icons/BestowLogo/BestowLogo";
import { navbarStyles } from "~/components/Navigation/Navbar/Navbar.css";
import { LoadingIcon } from "~/components/kindred/icons/LoadingIcon/LoadingIcon";

export const Navigation = ({
  onSpinnerClick,
}: {
  onSpinnerClick: () => void;
}) => {
  return (
    <div className={navbarStyles}>
      <BestowLogo />
      <LoadingIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          onSpinnerClick();
        }}
      />
    </div>
  );
};
