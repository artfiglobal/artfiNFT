import React from "react";
import style from "./artistVideo.module.scss";

const VideoAboutArtist = () => {
  return (
    <div className={style.artistVideo_container}>
      <div className={style.hisOwnWords}>
        <h1>In his own words.</h1>
        <p>Sacha Jafri on Sagarmatha National Park – Mount Everest</p>
      </div>
      <div>
        <iframe
          className={style.video_inner}
          src="https://player.vimeo.com/video/781871288?h=bf477f42a4&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          allow="autoplay; fullscreen; picture-in-picture; background"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoAboutArtist;
