import React from "react";
import Typography from "../reusables2/Atoms/Typography2";
import style from "./artistVideo.module.scss";

const VideoAboutArtist = ({ artworkName, artistName }: any) => {
  // console.log(artworkName);
  // console.log(artistName);
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
        <video muted loop autoPlay>
          <source src="/Publiced/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoAboutArtist;
