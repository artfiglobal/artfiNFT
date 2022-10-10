import { PropsWithChildren, ReactNode, ReactText } from "react";
import style from "./Typography.module.scss";

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading: "h1",
  subheading: "h6",
  body: "p",
};

const variantStyleMapping = {
  heading: style.heading,
  subheading: style.subheading,
  body: style.body,
};

const colorStyleMapping = {
  purple: style.purple,
  white: style.white,
  black: style.black,
  grey: style.grey,
};

type TypographyProps = {
  variant: "heading" | "subheading" | "body";
  color: "purple" | "white" | "black" | "grey";
  children: ReactNode;
  className?: string;
  extraClass?: string;
  onClick?: ()=> void 
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
