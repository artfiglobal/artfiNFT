import React from "react";

const TileSize = 52;

const ImageTiler = ({ imageUrl, numberOfFractions }) => {
  const canvasRef = React.useRef(null);
  //   const canvasRef2 = React.useRef(null);

  React.useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.setAttribute("crossOrigin", "");
    image.onload = () => {
      const { width, height } = image;
      //   console.log(width, height);
      // Get the canvas element and its context
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const tiles = {
        0: [
          { row: 0, column: 1, selected: true, img: "http://test.world/api" },
          { row: 0, column: 2, selected: false, img: "http://test.world/api" },
          { row: 0, column: 3, selected: true, img: "http://test.world/api" },
          { row: 0, column: 4, selected: false, img: "http://test.world/api" },
        ],
        1: [
          { row: 1, column: 0, selected: true, img: "http://test.world/api" },
          { row: 1, column: 1, selected: false, img: "http://test.world/api" },
          { row: 1, column: 2, selected: true, img: "http://test.world/api" },
          { row: 1, column: 3, selected: false, img: "http://test.world/api" },
        ],
        2: [
          { row: 2, column: 0, selected: false, img: "http://test.world/api" },
          { row: 2, column: 1, selected: true, img: "http://test.world/api" },
          { row: 2, column: 2, selected: false, img: "http://test.world/api" },
          { row: 2, column: 3, selected: true, img: "http://test.world/api" },
        ],
        3: [
          { row: 3, column: 0, selected: false, img: "http://test.world/api" },
          { row: 3, column: 1, selected: true, img: "http://test.world/api" },
          { row: 3, column: 2, selected: false, img: "http://test.world/api" },
          { row: 3, column: 3, selected: true, img: "http://test.world/api" },
        ],
        4: [
          { row: 4, column: 0, selected: false, img: "http://test.world/api" },
          { row: 4, column: 1, selected: true, img: "http://test.world/api" },
          { row: 4, column: 2, selected: true, img: "http://test.world/api" },
          { row: 4, column: 3, selected: false, img: "http://test.world/api" },
        ],
      };
      // Draw the image on the canvas
      ctx.drawImage(image, 0, 0);
      // Get the image data from the canvas
      const imageData = ctx.getImageData(0, 0, width, height);
      //   console.log(imageData);

      //   console.log(imageData);
      // Loop through the image data and draw each tile on the canvas
      for (let y = 0; y < height; y += TileSize) {
        for (let x = 0; x < width; x += TileSize) {
          // Create a new image data object for the tile
          const tileImageData = ctx.createImageData(TileSize, TileSize);
          // Copy the data for the tile from the original image data
          for (let i = 0; i < TileSize; i++) {
            for (let j = 0; j < TileSize; j++) {
              const pixelIndex = (y + i) * width * 4 + (x + j) * 4;
              tileImageData.data[i * TileSize * 4 + j * 4] =
                imageData.data[pixelIndex];
              tileImageData.data[i * TileSize * 4 + j * 4 + 1] =
                imageData.data[pixelIndex + 1];
              tileImageData.data[i * TileSize * 4 + j * 4 + 2] =
                imageData.data[pixelIndex + 2];
              tileImageData.data[i * TileSize * 4 + j * 4 + 3] =
                imageData.data[pixelIndex + 3];
            }
          }

          // Draw the tile on the canvas
          ctx.putImageData(tileImageData, x, y);
        }
      }
    };
  }, [imageUrl]);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <canvas width={50} height={50} ref={canvasRef} />
      </div>
      <div>{/* <canvas ref={canvasRef2} /> */}</div>
    </div>
  );
};

export default ImageTiler;
