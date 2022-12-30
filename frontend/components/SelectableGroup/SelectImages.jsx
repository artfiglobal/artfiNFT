import React, { useEffect, useState } from "react";
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
  makeItWork,
  artWorkImage,
  pressKey,
  setCellProps,
  selCntPrevious,
  cellProps,
  setInitialCellProps,
  setSingleImage,
  singleImage,
  setCoordinates,
  // rowCnt,
  // columnCnt,
  tableRowsCols,
  fractionSize,
  selCnt,
  setSelCnt,
}) {
  // console.log(rowCnt);
  const { rowCnt, columnCnt } = tableRowsCols;
  const { width, height } = fractionSize;
  // console.log(tableRowsCols);
  // console.log(fractionSize);
  // console.log(tableRowsCols);
  // const [boxCount, setBoxCount] = useState(100);
  //   const [isShown, setIsShown] = useState(false);
  // const [coords, setCoords] = useState([0, 0]);
  // const [NoSelectedItems, setNoSelectedItems] = useState(false);
  // const [selCnt, setSelCnt] = useState(0);
  const [maxSel, setMaxSel] = useState(50);

  // const [tableRowsCols, setTableRowsCols] = useState({
  //   columnCnt: 0,
  //   rowCnt: 0,
  // });

  // console.log(tableRowsCols);
  // console.log(selCnt);
  useEffect(() => {
    // for (let i = 0; i < rowCnt * columnCnt; i++) {
    //   cellProps[i] = "";
    // }
    // for (let i = 0; i < 50; i++) {
    //   cellProps[parseInt(Math.random() * 600)] = "disable";
    // }
    cellClickUp();
    // console.log("here");
  }, []);

  // const mouseOver = (e, selInd) => {
  //   if (pressKey) {
  //     if (
  //       cellProps[selInd] != "disable" &&
  //       e.buttons === 1 &&
  //       selCnt < maxSel
  //     ) {
  //       const selLen = cellProps[selInd]?.length > 0;
  //       console.log(selLen);
  //       cellProps[selInd] = selLen ? "" : "selected";
  //       setCellProps(cellProps);
  //       setSelCnt(selLen ? selCnt - 1 : selCnt + 1);
  //     }
  //   }
  // };
  // // console.log(selCnt, "inside");
  // const cellClickUp = () => {
  //   if (pressKey) {
  //     setCellProps(cellProps);
  //   }
  // };

  // const cellClick = (selInd) => {
  //   if (pressKey) {
  //     if (cellProps[selInd] != "disable") {
  //       if (cellProps[selInd] == "") {
  //         if (selCnt < maxSel) {
  //           cellProps[selInd] = "selected";
  //           setCellProps(cellProps);
  //         } else {
  //           alert("over max selection");
  //         }
  //       } else {
  //         setSelCnt(selCnt - 1);
  //         cellProps[selInd] = "";
  //         setCellProps(cellProps);
  //       }
  //     }
  //   }
  // };

  const mouseOver = (e, selInd) => {
    if (pressKey) {
      if (
        cellProps[selInd] != "disable" &&
        e.buttons === 1 &&
        selCntPrevious + selCnt < maxSel
      ) {
        const selLen = cellProps[selInd].length > 0;
        cellProps[selInd] = selLen ? "" : "selected";
        setCellProps(cellProps);
        setSelCnt(selLen ? selCnt - 1 : selCnt + 1);
      }
    }
  };

  const cellClickUp = () => {
    if (pressKey) {
      setCellProps(cellProps);
    }
  };
  // console.log(selCntPrevious, "selCntPrevios");
  const cellClick = (selInd) => {
    if (pressKey) {
      if (cellProps[selInd] != "disable") {
        if (cellProps[selInd] == "") {
          if (selCntPrevious + selCnt < maxSel) {
            setSelCnt(selCnt + 1);
            cellProps[selInd] = "selected";
            setCellProps(cellProps);
          } else {
            alert("over max sel");
          }
        } else {
          setSelCnt(selCnt - 1);
          cellProps[selInd] = "";
          setCellProps(cellProps);
        }
      }
    }
  };

  // const getRandomNumber = (min = 50, max = 200) => {
  //   return Math.random() * (max - min) + min;
  // };
  // const handleSelectedItemUnmount = (items) => {};
  //   const handleSelectionClear = (items) => {
  //     items?.map((item, index) => {
  //       item.context.selectable.clearSelection();
  //     });
  //     console.log(items);
  //   };

  // const handleSelecting = (items) => {
  //   // console.log("selecting:", items);
  // };

  // const handleSelectionFinish = (items) => {
  //   setSelectedItems(items);
  // };

  const handleMouseMove = (event) => {
    // let bounds = event.target.getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;
    // let x = event.clientX - bounds.left;
    // let y = event.clientY - bounds.top;
    let cord = [
      x,
      y,
      // event.target?.offsetParent?.offsetLeft,
      // event.target?.offsetParent?.offsetTop,
    ];

    setCoords(cord);
  };
  // console.log(artWorkImage);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div onMouseMove={(event) => handleMouseMove(event)}>
        {/* <SelectableGroup
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
        > */}
        <div className={style.grid}>
          <img
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artWorkImage}`}
            alt="not working"
            width={900}
            height={900}
          />
          <table
            style={{
              width: `${900}px`,
              height: `${900}px`,
            }}
            className={style.imgtbl}
          >
            <tbody>
              {[...Array(rowCnt)].map((x, i) => {
                return (
                  <tr key={i}>
                    {[...Array(columnCnt)].map((x1, i1) => (
                      <td
                        key={i1}
                        // onMouseDown={() => cellClick(i * columnCnt + i1)}
                        // onMouseUp={() => cellClickUp()}
                        // onMouseOver={(e) => mouseOver(e, i * columnCnt + i1)}

                        onMouseDown={() => cellClick(i * columnCnt + i1)}
                        onMouseUp={() => cellClickUp()}
                        onMouseOver={(e) => mouseOver(e, i * columnCnt + i1)}
                        onMouseEnter={() => {
                          setIsShown(true);
                          setSingleImage(i * columnCnt + (i1 + 1));
                          setCoordinates([i + 1, i1 + 1]);
                        }}
                        onMouseLeave={() => {
                          setIsShown(false);
                          setCoordinates();
                          setSingleImage();
                        }}
                        className={style[cellProps[i * columnCnt + i1]]}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <img
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artWorkImage}`}
            style={{ position: "absolute", width: "500px", height: "500px" }}
            alt=""
          />
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
            ))} */}
          {/* <DeselectAll ref={makeItWork}></DeselectAll> */}
        </div>
        {/* </SelectableGroup> */}
      </div>
    </div>
  );
}
