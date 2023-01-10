/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import style from "./fractions.module.scss";

export default function SelectFractionNFTs({
  setIsShown,
  setCoords,
  artWorkImage,
  pressKey,
  setCellProps,
  selCntPrevious,
  cellProps,
  setSingleImage,
  setCoordinates,
  tableRowsCols,
  selCnt,
  setSelCnt,
  setOpen,
  maxFraction
}) {
  const { rowCnt, columnCnt } = tableRowsCols;
  
  const mouseOver = (e, selInd) => {
    if (pressKey) {
      if (
        cellProps[selInd] != "disable" &&
        e.buttons === 1 &&
        selCntPrevious + selCnt < maxFraction
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

  useEffect(() => {
    cellClickUp();
  }, []);
  
  const cellClick = (selInd) => {
    if (pressKey) {
      if (cellProps[selInd] != "disable") {
        if (cellProps[selInd] == "") {
          if (selCntPrevious + selCnt < maxFraction) {
            setSelCnt(selCnt + 1);
            cellProps[selInd] = "selected";
            setCellProps(cellProps);
          } else {
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

  const handleMouseMove = (event) => {
    setCoords([
      event.nativeEvent.layerX - 90,
      event.nativeEvent.layerY - 55,
    ]);
  };
  
  return (
    <div style={{ display: 'block', position: 'relative', width: '100%', height: '90%' }} onMouseMove={(event) => handleMouseMove(event)}>
      <img
        src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artWorkImage}`}
        alt="not working"
        width="100%"
        height="100%"
      />
      <table
        className={style.imgtbl}
      >
        <tbody>
          {[...Array(rowCnt)].map((x, i) => {
            return (
              <tr key={i}>
                {[...Array(columnCnt)].map((x1, i1) => (
                  <td
                    key={i1}
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
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
