import React, { ReactNode } from "react";
import style from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  extraClass?: string;
};

export const Container = ({
  children,
  extraClass,
}: ContainerProps): JSX.Element => {
  return <div className={`${style.container} ${extraClass}`}>{children}</div>;
};
export default Container;
