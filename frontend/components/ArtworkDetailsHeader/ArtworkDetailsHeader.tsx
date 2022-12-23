import React from "react";
import { Typography } from "../reusables/Atoms";
import { Button } from "@mui/material";
import Image from "next/image";
import style from "./styles.module.scss";
const ArtworkDetailsHeader = ({}) => {
  return (
    <div className={style.header_container}>
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
        className={style.play_btn}
        style={{ textTransform: "capitalize" }}
      >
        <img src="/Icons/play.svg" style={{ marginRight: "10px" }} />
        Play now{" "}
      </Button>
    </div>
  );
};

export default ArtworkDetailsHeader;
