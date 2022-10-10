import React, { ReactText } from "react";
import style from "./Button.module.scss";

const variantsMapping = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
  xl: style.xl,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant: "sm" | "md" | "lg" | "xl";
  children: ReactText;
  onClick?: () => void;
  extraClass?: string;
}

export const Button = ({
  variant,
  children,
  extraClass,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <div className={`${variantsMapping[variant]} ${extraClass}`} {...props}>
      {children}
    </div>
  );
};

export default Button;
