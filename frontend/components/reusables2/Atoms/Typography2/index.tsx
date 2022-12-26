import { PropsWithChildren, ReactNode, ReactText } from "react";
import style from "./Typography.module.scss";

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading: "h1",
  subheading: "h3",
  newHeading: "h3",
  body: "p",
};

const variantStyleMapping = {
  heading: style.heading,
  newHeading: style.newHeading,
  subheading: style.subheading,
  body: style.body,
};
const fontWeightStyleMapping = {
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
};

type TypographyProps = {
  variant: "heading" | "subheading" | "body" | "newHeading";
  fontWeight: "bold" | "semiBold" | "medium";
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