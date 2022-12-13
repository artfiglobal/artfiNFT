import { PropsWithChildren, ReactNode, ReactText } from "react";
import style from "./Typography.module.scss";

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading: "h1",
  subheading: "h6",
  newHeading: "h3",
  body: "p",
  light: "light",
  bold: "bold",
  small: "small",
  smallest: "small",
  popUp: "popUp",
  popUp2: "popUp2",
};

const variantStyleMapping = {
  heading: style.heading,
  newHeading: style.newHeading,
  subheading: style.subheading,
  body: style.body,
  smallest: style.smallest,
  light: style.light,
  bold: style.bold,
  small: style.small,
  popUp: style.popUp,
  popUp2: style.popUp2,
};

const colorStyleMapping = {
  purple: style.purple,
  white: style.white,
  black: style.black,
  grey: style.grey,
  lightGray: style.lightGray,
  mauve: style.mauve,
};

type TypographyProps = {
  variant:
    | "heading"
    | "subheading"
    | "body"
    | "newHeading"
    | "smallest"
    | "light"
    | "small"
    | "bold"
    | "popUp";
  color: "purple" | "white" | "black" | "grey" | "lightGray" | "mauve";
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
  ...props
}: TypographyProps): JSX.Element => {
  const Component: PropsWithChildren<any> = variantsMapping[variant];

  return (
    <Component
      className={`${variantStyleMapping[variant]} ${extraClass} ${colorStyleMapping[color]}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
