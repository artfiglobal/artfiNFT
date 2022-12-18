"use client";

import React from "react";
import { useRef } from "react";
const Slicer = () => {
  //   const [document, set_document] = React.useState(null);
  //   if (typeof window !== "undefined") {
  //     set_document(window.document);
  //   }
  const cRef = useRef(null);
  //   React.useEffect(() => {
  //     console.log(window);
  //   }, []);
  //   if (typeof window !== "undefined") {
  //   let c = document.getElementById("canvas");
  //   let w = innerWidth;
  //   let h = innerHeight;
  //   cRef.current.innerWidth = 300;
  //   cRef.current.innerHeight = 300;

  console.log(cRef.current);

  //   let ctx = c.getContext("2d"),
  //     input = document.getElementById("input"),
  //     reader = new FileReader(),
  //     img = new Image(),
  //     imgW, //px
  //     imgH, //px
  //     imgData,
  //     tileDim = 20, //tile dimensions px
  //     tileCountX, //how many tiles we can fit
  //     tileCountY;

  //   //read file input
  //   const onChangeHandler = () => {
  //     reader.readAsDataURL(input.files[0]);
  //     reader.onload = function () {
  //       img.src = reader.result;
  //       img.onload = function () {
  //         //start
  //         init();
  //         let tiles = getTiles();
  //         drawTiles(tiles);
  //       };
  //     };
  //   };

  //   function init() {
  //     imgW = img.width;
  //     imgH = img.height;
  //     //check how many full tiles we can fit
  //     //right and bottom sides of the image will get cropped
  //     tileCountX = 30;
  //     tileCountY = 30;

  //     ctx.drawImage(img, 0, 0);
  //     imgData = ctx.getImageData(0, 0, imgW, imgH).data;
  //     ctx.clearRect(0, 0, w, h);
  //   }

  //   //get imgdata index from img px positions
  //   function indexX(x) {
  //     let i = x * 4;
  //     if (i > imgData.length) console.warn("X out of bounds");
  //     return i;
  //   }
  //   function indexY(y) {
  //     let i = imgW * 4 * y;
  //     if (i > imgData.length) console.warn("Y out of bounds");
  //     return i;
  //   }

  //   function getIndex(x, y) {
  //     let i = indexX(x) + indexY(y);
  //     if (i > imgData.length) console.warn("XY out of bounds");
  //     return i;
  //   }

  //   //get a tile of size tileDim*tileDim from position xy
  //   function getTile(x, y) {
  //     let tile = [];
  //     //loop over rows
  //     for (let i = 0; i < tileDim; i++) {
  //       //slice original image from x to x + tileDim, concat
  //       tile.push(
  //         ...imgData.slice(getIndex(x, y + i), getIndex(x + tileDim, y + i))
  //       );
  //     }
  //     //convert back to typed array and to imgdata object
  //     tile = new ImageData(new Uint8ClampedArray(tile), tileDim, tileDim);
  //     //save original position
  //     tile.x = x;
  //     tile.y = y;
  //     return tile;
  //   }

  //   //generate all tiles
  //   function getTiles() {
  //     let tiles = [];
  //     for (let yi = 0; yi < tileCountY; yi++) {
  //       for (let xi = 0; xi < tileCountX; xi++) {
  //         tiles.push(getTile(xi * tileDim, yi * tileDim));
  //       }
  //     }
  //     return tiles;
  //   }

  //   //and draw with offset
  //   let offset = 1.1;
  //   function drawTiles(tiles) {
  //     tiles.forEach((d, i) => ctx.putImageData(d, d.x * offset, d.y * offset));

  //     //more interesting effects are easy to do:
  //     //tiles.forEach((d,i) => ctx.putImageData(d, d.x * i * 0.01, d.y * i * 0.01));

  //     //for efficiency in animation etc tiles should be converted to image object
  //   }
  //   }
  return (
    <div>
      {/* <input onChange={onChangeHandler} type="file" /> */}
      <canvas ref={cRef} id="canvas"></canvas>
    </div>
  );
};

export default Slicer;
