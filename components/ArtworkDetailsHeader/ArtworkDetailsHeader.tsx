import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import style from "./styles.module.scss";
import bk3 from "./bk3.jpg";
import Link from "next/link";
const ArtworkDetailsHeader = ({ artistId, artworkDetails }: any) => {
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
      <div className={style.backdrop} />
      {
        backgroundCoverPhoto && 
        <div className={style.imageContainer}>
          <Image
            width={innerWidth}
            height={innerWidth * 0.5}
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${backgroundCoverPhoto}`}
            alt="image"
          />
        </div>
      }
      <div className={style.header_details}>
        <h5>ARTWORK DETAILS</h5>
        <h1>{artworkName}</h1>
        <div className={style.artist_name}>
          <p style={{ opacity: ".7", marginRight: "6px" }}>by</p>
          <Link href={`artist/${artistId}`}>
            <p style={{ opacity: "1", cursor: "pointer" }}>{artistName}</p>
          </Link>
          <div>
            <Image src="/Publiced/Vector.svg" alt="vector" width={24} height={24} />
          </div>
        </div>
        <Button
          onClick={() => {
            setShowVideo(!showVideo);
          }}
          className={style.play_btn}
          style={{ textTransform: "capitalize" }}
        >
          <a
            style={{ height: "fit-content" }}
            href={playNowButtonVideoLink + "&allowfullscreen"}
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/Icons/play.svg" alt="play svg" layout="fill" style={{ marginRight: "10px" }} />
            Play now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ArtworkDetailsHeader;
