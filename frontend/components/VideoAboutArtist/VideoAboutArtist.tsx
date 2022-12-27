import React from "react";
import Typography from "../reusables2/Atoms/Typography2";
import style from "./artistVideo.module.scss";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoAboutArtist = ({
  explanationVideoLink,
  artworkName,
  artistName,
}: any) => {
  // console.log(artworkName);
  console.log(explanationVideoLink);
  // const artistName = artworkDetails.whitelistDetails.artistName;
  // const artistName = artworkDetails.whitelistDetails.artistName;

  return (
    <div className={style.artistVideo_container}>
      <div className={style.hisOwnWords}>
        <Typography color="black" fontWeight="bold" variant="subheading">
          In his own words.
        </Typography>
        <Typography color="black" fontWeight="medium" variant="subheading">
          {artistName} on {artworkName}
        </Typography>
      </div>
      <div className={style.video_inner}>
        {/* <iframe
          src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          // allow="autoplay; fullscreen; picture-in-picture; background"
          // allowFullScreen
          // width="600"
          // height="450p"
        ></iframe> */}

        {/* <div
          className={style.video}
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src={explanationVideoLink}
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
        </div> */}
        <ReactPlayer url="https://player.vimeo.com/video/784067091?h=9bd9ab629c&badge=0&autopause=0&player_id=0&app_id=58479/embed" />
        {/* <video muted loop autoPlay>
          <source
            src="https://player.vimeo.com/video/784067091?h=9bd9ab629c&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            type="video/mp4"
          />
        </video> */}
      </div>
    </div>
  );
};

export default VideoAboutArtist;
