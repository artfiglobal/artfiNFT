import React from "react";
import { createSelectable } from "react-selectable-fast";
import style from "./fractions.module.scss";
import Tooltip from "@mui/material/Tooltip";
import { Instance } from "@popperjs/core";

function ImageFraction(props: any) {
  const {
    selectableRef,
    isSelected,
    isSelecting,
    index,
    isShown,
    setIsShown,
    singleImage,
    setSingleImage,
  } = props;

  /// tooltip instances
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  //   const handleMouseMove = (event: React.MouseEvent) => {
  //     positionRef.current = { x: event.clientX, y: event.clientY };

  //     if (popperRef.current != null) {
  //       popperRef.current.update();
  //     }
  //   };

  return (
    <div style={{ position: "relative" }} ref={areaRef}>
      <div
        ref={selectableRef}
        className={style.box}
        onMouseEnter={() => {
          setIsShown(true);
          setSingleImage(index);
        }}
        onMouseLeave={() => {
          setIsShown(false);
          setSingleImage();
        }}
        style={{
          height: props.height,
          width: props.width,
          background: isSelected
            ? "crimson"
            : isSelecting
            ? "lime"
            : props.background,
        }}
      ></div>
    </div>
  );
}

export default createSelectable(ImageFraction);
