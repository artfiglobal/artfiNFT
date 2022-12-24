import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import style from "./styles.module.scss";
import bk3 from "./bk3.jpg";
const ArtworkDetailsHeader = ({ artworkDetails }: any) => {
  const [showVideo, setShowVideo] = useState(false);
  // console.log(artworkDetails);
  const artworkImage = artworkDetails?.whitelistDetails?.imageOfArtWork;
  const artistName = artworkDetails?.whitelistDetails?.artistName;
  const artworkName = artworkDetails?.whitelistDetails?.Title;

  // console.log(artworkName);

  return (
    <div className={style.header_container}>
      {/* <div className={style.backdrop}></div> */}
      {showVideo ? (
        <div className={style.backgroundVideo}>
          {/* <iframe
            src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
            allow="autoplay; fullscreen; picture-in-picture; background"
            allowFullScreen
          ></iframe> */}
          <video muted loop autoPlay>
            <source src="/Publiced/video.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className={style.imageContainer}>
          <Image
            width="1400"
            height="720"
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artworkImage}`}
            alt="image"
          />
          {/* <Avatar
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artworkImage}`}
            // src="/images/artist.png"
            alt="Artist profile"
            className={style.artistProfile}
          /> */}
        </div>
      )}
      <div className={style.header_details}>
        <h5>ARTWORK UNVEILING</h5>
        <h1>
          {artworkName}
          {/* <br /> Mount Everest */}
        </h1>
        <div className={style.artist_name}>
          <p style={{ opacity: ".7" }}>BY</p>
          <p style={{ opacity: "1" }}>{artistName}</p>
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
