/* eslint-disable @next/next/no-img-element */
// import { Typography } from "../../reusables2/Atoms";
// import { BiCoin, BiDollar } from "react-icons/bi";
import Link from "next/link";

import style from "./ArtInfo.module.scss";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

type ArtInfoProps = {
  artist: string;
  price: number;
  sheetName: string;
};

export const ArtInfo = ({
  artist,
  price,
  sheetName,
  artistId,
  artWorkImage,
  artistImage,
}: ArtInfoProps | any): JSX.Element => {
  const [artistDetails, setArtistDetails] = useState({});

  // useEffect(() => {
  //   const fetchArtist = async () => {
  //     try {
  //       const response = axios.get(
  //         `${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artistId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
  //             "Content-Type": "application/json",
  //             "Content-Length": "<calculated when request is sent>",
  //           },
  //         }
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }, []);

  // console.log(sheetName);
  // console.log(artistImage);
  // const setSheetName = sheetName;
  // const pureSheetName = setSheetName.slice(42, 0);
  return (
    <>
      {/* <img src={`http://localhost:4200/api/${artWorkImage}`} alt="" /> */}
      <div className={style.info}>
        <Avatar
          src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artistImage}`}
          // src="/images/artist.png"
          alt="Artist profile"
          className={style.artistProfile}
        />
        {/* <img
          style={{ width: "40px", height: "40px" }}
          alt=""
          src={`http://localhost:4200/${artistImage}`}
        /> */}
        <Link href="/artist-details">
          <h6 style={{ cursor: "pointer" }}>{artist}</h6>
        </Link>
        <img src="/Publiced/Vector.svg" />
        <div className={style.divider}></div>
        <div className={style.artPrice}>
          {/* <BiCoin /> */}

          <Image src="/Icons/doller.svg" alt="dol" width="24px" height="24px" />
          <h6>Price</h6>
          <h6 className={style.price}>{price} USD</h6>
        </div>
        <div className={style.divider}></div>
        <a
          // ${process.env.NEXT_PUBLIC_React_App_Base_Url}
          download
          href={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${sheetName}`}
          className={style.factsheet}
        >
          <h6>{sheetName?.slice(40, -4)}</h6>
          <Image
            src="/Icons/dw.svg"
            alt="download"
            width="24px"
            height="24px"
          />
        </a>
      </div>
      <div className={style.infoMbl}>
        <div className={style.artPrice}>
          {/* <BiCoin /> */}

          <Image src="/Icons/doller.svg" alt="dol" width="24px" height="24px" />
          <h6>Price</h6>
          <h6 className={style.price}>{price}USD</h6>
        </div>
        <div className={style.divider}></div>
        <a
          download
          href={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${sheetName}`}
          className={sheetName}
        >
          {/* <h6>{pureSheetName}</h6> */}
          <Image
            src="/Icons/dw.svg"
            alt="download"
            width="24px"
            height="24px"
          />
        </a>
      </div>
    </>
  );
};

export default ArtInfo;
