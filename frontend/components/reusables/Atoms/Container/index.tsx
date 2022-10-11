import React, { ReactNode, ReactText } from "react";
import style from "./Container.module.scss";

const variantStyleMapping = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
};

const colorStyleMapping = {
  purple: style.purple,
  white: style.white,
};

type ButtonProps = {
  // variant: "sm" | "md" | "lg";
  color: "purple" | "white";
  children: ReactNode;
  extraClass?: string;

};

export const Container = ({
  // variant,
  color,
  children,
  extraClass,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <div className={`${colorStyleMapping[color]} ${extraClass}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
