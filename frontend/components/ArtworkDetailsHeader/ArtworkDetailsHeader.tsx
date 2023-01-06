import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import style from "./styles.module.scss";
import bk3 from "./bk3.jpg";
const ArtworkDetailsHeader = ({ artworkDetails }: any) => {
  const [showVideo, setShowVideo] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  // console.log(artworkDetails);
  // const artworkImage = artworkDetails?.whitelistDetails?.imageOfArtWork;
  const artistName = artworkDetails?.whitelistDetails?.artistName;
  const artworkName = artworkDetails?.whitelistDetails?.Title;
  const backgroundCoverPhoto = artworkDetails?.artwork?.backgroundCoverPhoto;
  // const explanationVideoLink = artworkDetails?.artwork?.explanationVideoLink;
  const playNowButtonVideoLink =
    artworkDetails?.artwork?.playNowButtonVideoLink;
  // console.log(playNowButtonVideoLink);
  // var width = 0;
  // const newnewnew = globalThis?.window?.innerWidth;
  useEffect(() => {
    const width = globalThis?.window?.innerWidth;

    setInnerWidth(width);
  }, [innerWidth]);

  // console.log(width, "newnewnew");
  return (
    <div className={style.header_container}>
      <div className={style.backdrop}></div>
      {/* {showVideo ? (
        <div>
          <div className={style.video}>
            {playNowButtonVideoLink ? (
              <iframe
                src={playNowButtonVideoLink}
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "100%",
                  border: "0",
                }}
                className={style.videos}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                src="https://player.vimeo.com/video/784067091?h=9bd9ab629c&badge=0&autopause=0&player_id=0&app_id=58479/embed?&autoplay=1&background=1&muted=1"
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: "100%",
                  border: "0",
                }}
                className={style.videos}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      ) : ( */}
      <div className={style.imageContainer}>
        <Image
          width={innerWidth}
          height={innerWidth * 0.5}
          // layout="fill"
          src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${backgroundCoverPhoto}`}
          alt="image"
        />
      </div>
      {/* )} */}
      <div className={style.header_details}>
        <h5>ARTWORK Added Details</h5>
        <h1>{artworkName}</h1>
        <div className={style.artist_name}>
          <p style={{ opacity: ".7", marginRight: "6px" }}>BY</p>
          <p style={{ opacity: "1" }}>{artistName}</p>
          <div>
            <Image src="/Publiced/Vector.svg" width={24} height={24} />
          </div>
        </div>
        <a href={playNowButtonVideoLink + "&allowfullscreen"} target="_blank">
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
        </a>
      </div>
    </div>
  );
};

export default ArtworkDetailsHeader;
