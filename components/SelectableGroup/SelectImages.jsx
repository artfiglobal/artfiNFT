/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Typography } from "../reusables2/Atoms";
import style from "./fractions.module.scss";

export default function SelectFractionNFTs({
  isShown,
  setIsShown,
  setCoords,
  setSelectedItems,
  artWorkImage,
  pressKey,
  setCellProps,
  selCntPrevious,
  cellProps,
  setInitialCellProps,
  setSingleImage,
  singleImage,
  setCoordinates,
  tableRowsCols,
  fractionSize,
  selCnt,
  setSelCnt,
  setOpen,
  coordinates,
}) {
  const ToolTipCard = () => {
    return (
      <div
        style={{
          marginTop: "-190px",
          // top: coords[1] - 250,
          // left: coords[0] < 84 ? coords[0] - 20 : coords[0] - 110,
        }}
        className={style.popUpMenu}
      >
        <div
          style={{
            position: "absolute",
            zIndex: "9999",
          }}
        ></div>
        <div className={style.popUpInnerContainer}>
          <div className={style.menuImage}>
            <img src="" alt="" />
            {cellProps[singleImage - 1] === "" ? (
              <Typography variant="popup" color={"mauve"}>
                Available
              </Typography>
            ) : cellProps[singleImage - 1] === "selected" ? (
              <Typography variant="popup" color="blue">
                Selected
              </Typography>
            ) : (
              cellProps[singleImage - 1] === "disable" && (
                <Typography variant="popup" color="red">
                  Not Available!
                </Typography>
              )
            )}

            {/* <Typography variant="popup" color={"mauve"}>
              {cellProps[singleImage - 1] === ""
                ? "Available"
                : cellProps[singleImage - 1] === "selected"
                ? "Selected"
                : "Not Available"}
            </Typography> */}
          </div>
          <div className={style.menuDetails}>
            <div>
              <small>FRACTION</small>
              <br />
              <Typography variant="popup2" color="black">
                #{singleImage} /{tableRowsCols.columnCnt * tableRowsCols.rowCnt}
              </Typography>
            </div>
            <div>
              <small>COORDINATES</small>
              <br />
              <Typography variant="popup2" color="black">
                {/* AF 22 */}
                {coordinates[0]}/{coordinates[1]}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
  // const [open, setOpen] = React.useState(false);

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
            // alert("over max sel");
            setOpen(true);
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
    let y = event.pageY;
    // let y = event.clientY;
    // console.log(event, "event");
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
                      >
                        {/* {
                          // isShown &&
                          singleImage === i * columnCnt + (i1 + 1) && (
                            <ToolTipCard
                            // singleImage={singleImage}
                            // coordinates={coordinates}
                            />
                          )
                        } */}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
