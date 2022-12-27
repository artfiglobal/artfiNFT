import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import style from "./styles.module.scss";
import bk3 from "./bk3.jpg";
const ArtworkDetailsHeader = ({ artworkDetails }: any) => {
  const [showVideo, setShowVideo] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  // console.log(artworkDetails);
  const artworkImage = artworkDetails?.whitelistDetails?.imageOfArtWork;
  const artistName = artworkDetails?.whitelistDetails?.artistName;
  const artworkName = artworkDetails?.whitelistDetails?.Title;
  const backgroundCoverPhoto = artworkDetails?.artwork?.backgroundCoverPhoto;
  const explanationVideoLink = artworkDetails?.artwork?.explanationVideoLink;
  const playNowButtonVideoLink =
    artworkDetails?.artwork?.playNowButtonVideoLink;
  console.log(playNowButtonVideoLink);
  // var width = 0;
  // const newnewnew = globalThis?.window?.innerWidth;
  useEffect(() => {
    const width = globalThis?.window?.innerWidth;

    setInnerWidth(width);
  }, [innerWidth]);

  // console.log(width, "newnewnew");
  return (
    <div className={style.header_container}>
      {/* <div className={style.backdrop}></div> */}
      {showVideo ? (
        // <div className={style.backgroundVideo}>
        //   {/* <iframe
        //     src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
        //     allow="autoplay; fullscreen; picture-in-picture; background"
        //     allowFullScreen
        //   ></iframe> */}
        //   <video muted loop autoPlay>
        //     <source src="/Publiced/video.mp4" type="video/mp4" />
        //   </video>
        // </div>

        <div>
          <div
            className={style.video}
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              src={playNowButtonVideoLink}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "0",
              }}
              className={style.videos}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <iframe
              src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
          {/* offer.annoucmentDetails ? (
          <iframe
            src={explanationVideoLink}
            width="100%"
            className={style.mobilevideo}
            height="1300px"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          ) : (
          <iframe
            src={explanationVideoLink}
            width="100%"
            className={style.mobilevideo}
            height="1300px"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          {/* ) */}
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      ) : (
        <div className={style.imageContainer}>
          <Image
            width={innerWidth}
            height={innerWidth * 0.5}
            // layout="fill"
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${backgroundCoverPhoto}`}
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
        <h1>{artworkName}</h1>
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
