import React, { useState } from "react";
import { SelectableGroup } from "react-selectable-fast";
import ImageFraction from "./Image";
import style from "./fractions.module.scss";
// import style from "./Landing.module.scss";

export default function SelectFractionNFTs() {
  const [boxCount, setBoxCount] = useState<string | number>(10001);
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
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            padding: "10px",
            position: "relative",
          }}
        >
          <h1>{singleImage}</h1>
        </div>
      )}
    </div>
  );
}
