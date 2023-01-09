import React, { ReactText } from "react";
import style from "./Button.module.scss";

const variantsMapping = {
  primaryNav: style.primaryNav,
  primary: style.primary,
  secondary: style.secondary,
  connect: style.connect,
  clear: style.clear,
  fractionBTN: style.fractionBTN,
  detailsPageBtn: style.detailsPageBtn,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "primaryNav"
    | "primary"
    | "secondary"
    | "connect"
    | "clear"
    | "fractionBTN"
    | "detailsPageBtn";
  children: any;
  // onClick?: () => void;
  extraClass?: string;
  onClick?: ((event: any) => void) | undefined;
}

export const Button = ({
  variant,
  children,
  extraClass,
  onClick = () => {},
  ...props
}: ButtonProps): JSX.Element => {
  const handleOnClick = () => {
    onClick(Event);
  };
  return (
    <button
      className={`${variantsMapping[variant]} ${extraClass}`}
      {...props}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
