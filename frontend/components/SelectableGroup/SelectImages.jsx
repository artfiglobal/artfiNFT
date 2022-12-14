import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import ImageFraction from "./Image";
import style from "./fractions.module.scss";
// import Image from "next/image";
// import { Typography } from "../reusables2/Atoms/Typography/index";
// import style from "./Landing.module.scss";
import {
  createSelectable,
  SelectAll,
  DeselectAll,
} from "react-selectable-fast";
export default function SelectFractionNFTs({
  isShown,
  setIsShown,
  setCoords,
  setSelectedItems,
  handleSelectionClear,
}) {
  const [boxCount, setBoxCount] = useState(100);
  //   const [isShown, setIsShown] = useState(false);
  // const [coords, setCoords] = useState([0, 0]);
  const [singleImage, setSingleImage] = useState();
  const [NoSelectedItems, setNoSelectedItems] = useState(false);

  const getRandomNumber = (min = 50, max = 200) => {
    return Math.random() * (max - min) + min;
  };
  const handleSelectedItemUnmount = (items) => {};
  //   const handleSelectionClear = (items) => {
  //     items?.map((item, index) => {
  //       item.context.selectable.clearSelection();
  //     });
  //     console.log(items);
  //   };

  const handleSelecting = (items) => {
    // console.log("selecting:", items);
  };

  const handleSelectionFinish = (items) => {
    setSelectedItems(items);
  };

  const handleMouseMove = (event) => {
    // let bounds = event.target.getBoundingClientRect();
    // let x = event.clientX - bounds.left;
    // let y = event.clientY - bounds.top;
    let cord = [
      event.target?.offsetParent?.offsetLeft,
      event.target?.offsetParent?.offsetTop,
    ];

    // console.log(cord);
    setCoords(cord);
  };
  return (
    <div>
      <div onMouseMove={(event) => handleMouseMove(event)}>
        <SelectableGroup
          className={style.main}
          clickClassName="tick"
          enableDeselect
          tolerance={0}
          globalMouse={false}
          allowClickWithoutSelected={false}
          duringSelection={handleSelecting}
          onSelectionClear={(items) => handleSelectionClear(items)}
          onSelectionFinish={(items) => handleSelectionFinish(items)}
          //   onSelectedItemUnmount={handleSelectedItemUnmount}
        >
          {Array(boxCount)
            .fill(1)
            // images
            .map((item, index) => (
              <ImageFraction
                key={index}
                item={item}
                index={index}
                isShown={isShown}
                setIsShown={setIsShown}
                singleImage={singleImage}
                setSingleImage={setSingleImage}
                height={40}
                width={40}
                background="coral"
              />
            ))}
          <DeselectAll>
            <button>Clear</button>
          </DeselectAll>
        </SelectableGroup>
      </div>
    </div>
  );
}
