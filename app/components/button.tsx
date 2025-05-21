import MButton from "@mui/material/Button";
import { ButtonTypes } from "../utils/types/formComponentsTypes";
const Button = ({
  variant = "contained",
  disabled,
  label,
  children,
  onClick,
  className,
  color = "primary",
}: ButtonTypes) => {
  return (
    <MButton
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children ?? label}
    </MButton>
  );
};

export default Button;
