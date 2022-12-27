import React, { useEffect, useState } from "react";
import Typography from "../reusables2/Atoms/Typography2";
import style from "./artistVideo.module.scss";
import ReactPlayer from "react-player";
import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import videojs from "video.js";
import VideoJS from "./VideoPlayer";
import "video.js/dist/video-js.css";
// import "~video-react/styles/scss/video-react";
// import dynamic from "next/dynamic";
// import type { NextPage } from "next";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoAboutArtist = ({
  explanationVideoLink,
  artworkName,
  artistName,
}: any) => {
  // console.log(artworkName);
  console.log(explanationVideoLink);
  // const artistName = artworkDetails.whitelistDetails.artistName;
  // const artistName = artworkDetails.whitelistDetails.artistName;
  const [windowHash, setWindowHash] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHash(true);
    }
  }, []);
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://player.vimeo.com/video/784067091?h=9bd9ab629c&badge=0&autopause=0&player_id=0&app_id=58479/embed",
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
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
        {/* {windowHash && (
          // <ReactPlayer
          //   width={600}
          //   height={450}
          //   url="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          // />
          <Player
            playsInline
            width={600}
            height={450}
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        )} */}
        {windowHash && (
          // <VideoTag src={mySrc} poster={myPoster} />
          // <video muted loop autoPlay>
          //   <source
          //     width="450p"
          //     height="450"
          //     src="https://player.vimeo.com/video/784067091?h=9bd9ab629c&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          //     type="video/mp4"
          //   />
          // </video>
          // <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          <h1></h1>
        )}
      </div>
    </div>
  );
};

export default VideoAboutArtist;
