import React, { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import rectangle from "../../public/Background/Rectangle.png";
import style from "./styles.module.scss";

const ArtworkDetailsHeader = ({}) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className={style.header_container}>
      <div className={style.backdrop}></div>
      {showVideo ? (
        <iframe
          className={style.header_inner}
          src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          allow="autoplay; fullscreen; picture-in-picture; background"
          allowFullScreen
        ></iframe>
      ) : (
        <Image className={style.header_inner} src={rectangle} alt="" />
      )}

      <div className={style.header_details}>
        <h5>ARTWORK UNVEILING0</h5>
        <h1>
          Sagarmatha National Park –
          <br /> Mount Everest
        </h1>
        <div className={style.artist_name}>
          <p style={{ opacity: ".7" }}>BY</p>
          <p style={{ opacity: "1" }}>SACHA JAFRI</p>
          <Image src="/Publiced/Vector.svg" width={24} height={24} />
        </div>
        <Button
          onClick={() => {
            setShowVideo(!showVideo);
          }}
          className={style.play_btn}
          style={{ textTransform: "capitalize" }}
        >
          <img src="/Icons/play.svg" style={{ marginRight: "10px" }} />
          Play now{" "}
        </Button>
      </div>
    </div>
  );
};

export default ArtworkDetailsHeader;
