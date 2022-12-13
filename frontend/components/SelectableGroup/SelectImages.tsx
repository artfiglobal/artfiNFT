import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import ImageFraction from "./Image";
import style from "./fractions.module.scss";
import Image from "next/image";
import { Typography } from "../reusables2/Atoms/Typography/index";
// import style from "./Landing.module.scss";

export default function SelectFractionNFTs() {
  const [boxCount, setBoxCount] = useState<string | number>(1001);
  const [isShown, setIsShown] = useState(false);
  const [singleImage, setSingleImage] = useState();

  const getRandomNumber = (min = 50, max = 200) => {
    return Math.random() * (max - min) + min;
  };
  const handleSelectedItemUnmount = () => {
    console.log("item unmount");
  };
  const handleSelecting = (items: any) => {
    console.log("selecting:", items);
  };

  const handleSelectionFinish = (items: any) => {
    // console.log("finish selecting:", items);
  };
  const handleSelectionClear = () => {
    console.log("selection cleared");
  };

  return (
    <div className="App">
      {/* <input
        type="text"
        value={boxCount}
        onChange={(e) => setBoxCount(e.target.value)}
      /> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "space-between",
          position: "relative",
        }}
      >
        <SelectableGroup
          className={style.main}
          clickClassName="tick"
          enableDeselect
          tolerance={0}
          globalMouse={false}
          allowClickWithoutSelected={false}
          duringSelection={handleSelecting}
          //   onSelectionClear={handleSelectionClear}
          onSelectionFinish={handleSelectionFinish}
          //   onSelectedItemUnmount={handleSelectedItemUnmount}
        >
          {Array(boxCount)
            .fill(1)
            .map((_, index) => (
              <ImageFraction
                key={index}
                index={index}
                isShown={isShown}
                setIsShown={setIsShown}
                singleImage={singleImage}
                setSingleImage={setSingleImage}
                height={10}
                width={10}
                background="coral"
              />
            ))}
        </SelectableGroup>
      </div>
      {isShown && (
        <div className={style.popUpMenu}>
          <div className={style.popUpInnerContainer}>
            <div className={style.menuImage}>
              <img src="" alt="" />
              <Typography variant="popUp" color="mauve">
                Available
              </Typography>
            </div>
            <div className={style.menuDetails}>
              <div>
                <small>FRACTION</small>
                <br />
                <h3>#5/1000</h3>
              </div>
              <div>
                <small>COORDINATES</small>
                <br />
                <h3>AF 22</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
