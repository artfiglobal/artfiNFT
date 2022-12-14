import { PropsWithChildren, ReactNode, ReactText } from "react";
import style from "./Typography.module.scss";

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading: "h1",
  subheading: "h3",
  newHeading: "h3",
  body: "p",
  smallBody: "p",
  smallBody2: "p",
  smallHeading: "h4",
};

const variantStyleMapping = {
  heading: style.heading,
  newHeading: style.newHeading,
  subheading: style.subheading,
  smallHeading: style.smallHeading,
  body: style.body,
  smallBody: style.smallBody,
  smallBody2: style.smallBody2,
};
const fontWeightStyleMapping = {
  superBold: style.superBold,
  bold: style.bold,
  semiBold: style.semiBold,
  medium: style.medium,
};

const colorStyleMapping = {
  purple: style.purple,
  white: style.white,
  black: style.black,
  grey: style.grey,
  lightGray: style.lightGray,
  mauve: style.mauve,
  halfWhite: style.halfWhite,
  confirmEmail: style.confirmEmail,
};

type TypographyProps = {
  variant:
    | "heading"
    | "subheading"
    | "body"
    | "smallBody"
    | "smallBody2"
    | "newHeading"
    | "smallHeading";
  fontWeight: "bold" | "semiBold" | "medium" | "superBold";
  color:
    | "purple"
    | "white"
    | "black"
    | "grey"
    | "lightGray"
    | "mauve"
    | "confirmEmail"
    | "halfWhite";
  children: ReactNode;
  className?: string;
  extraClass?: string;
  onClick?: () => void;
};

export const Typography = ({
  variant,
  color,
  children,
  extraClass,
  fontWeight,
  ...props
}: TypographyProps): JSX.Element => {
  const Component: PropsWithChildren<any> = variantsMapping[variant];

  return (
    <Component
      className={`${variantStyleMapping[variant]} ${extraClass} ${colorStyleMapping[color]}  ${fontWeightStyleMapping[fontWeight]}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
