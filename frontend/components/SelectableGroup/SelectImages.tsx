import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import ImageFraction from "./Image";
import style from "./fractions.module.scss";
// import Image from "next/image";
// import { Typography } from "../reusables2/Atoms/Typography/index";
// import style from "./Landing.module.scss";
import image11 from "../../public/images/New folder/row-1-column-1.png";
import image12 from "../../public/images/New folder/row-1-column-2.png";
import image13 from "../../public/images/New folder/row-1-column-3.png";
import image14 from "../../public/images/New folder/row-1-column-4.png";
import image15 from "../../public/images/New folder/row-1-column-5.png";
import image16 from "../../public/images/New folder/row-1-column-6.png";
import image17 from "../../public/images/New folder/row-1-column-7.png";
import image18 from "../../public/images/New folder/row-1-column-8.png";
import image19 from "../../public/images/New folder/row-1-column-9.png";
import image110 from "../../public/images/New folder/row-1-column-10.png";
import image21 from "../../public/images/New folder/row-2-column-1.png";
import image22 from "../../public/images/New folder/row-2-column-2.png";
import image23 from "../../public/images/New folder/row-2-column-3.png";
import image24 from "../../public/images/New folder/row-2-column-4.png";
import image25 from "../../public/images/New folder/row-2-column-5.png";
import image26 from "../../public/images/New folder/row-2-column-6.png";
import image27 from "../../public/images/New folder/row-2-column-7.png";
import image28 from "../../public/images/New folder/row-2-column-8.png";
import image29 from "../../public/images/New folder/row-2-column-9.png";
import image210 from "../../public/images/New folder/row-2-column-10.png";
export default function SelectFractionNFTs({
  isShown,
  setIsShown,
  setCoords,
  setSelectedItems,
  handleSelectionClear,
}: any) {
  const [boxCount, setBoxCount] = useState<string | number>(100);
  //   const [isShown, setIsShown] = useState(false);
  // const [coords, setCoords] = useState([0, 0]);
  const [singleImage, setSingleImage] = useState();
  const [NoSelectedItems, setNoSelectedItems] = useState(false);
  const images = [
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image110,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image210,
  ];
  const getRandomNumber = (min = 50, max = 200) => {
    return Math.random() * (max - min) + min;
  };
  const handleSelectedItemUnmount = (items: any) => {
    // console.log("item unmount");
    // items?.map((item: any, index: any) => {
    //   // console.log(item);
    //   return (item.state.isSelected = false);
    // });
    // items?.map((item: any, index: any) => {
    //     item.context.selectable.clearSelection();
    //   });
    // console.log(items);
  };
  //   const handleSelectionClear = (items: any) => {
  //     items?.map((item: any, index: any) => {
  //       item.context.selectable.clearSelection();
  //     });
  //     console.log(items);
  //   };

  const handleSelecting = (items: any) => {
    console.log("selecting:", items);
  };

  const handleSelectionFinish = (items: any) => {
    // console.log("finish selecting:", items);
    // items?.map((item: any, index: any) => {
    //     item.context.selectable.clearSelection();
    //   });
    // console.log(items);

    setSelectedItems(items);
  };

  const handleMouseMove = (event: any) => {
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
          disabled={NoSelectedItems}
          allowClickWithoutSelected={false}
          duringSelection={handleSelecting}
          onSelectionClear={(items: any) => handleSelectionClear(items)}
          onSelectionFinish={(items: any) => handleSelectionFinish(items)}
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
        </SelectableGroup>
      </div>
    </div>
  );
}
