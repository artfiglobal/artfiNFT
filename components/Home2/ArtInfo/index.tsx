/* eslint-disable @next/next/no-img-element */
// import { Typography } from "../../reusables2/Atoms";
// import { BiCoin, BiDollar } from "react-icons/bi";
import Link from "next/link";

import style from "./ArtInfo.module.scss";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { GeneralContext } from "../../../context/GeneralState";

type ArtInfoProps = {
  artist: string;
  price: number;
  sheetName: string;
};

export const ArtInfo = ({
  artist,
  price,
  sheetName,
  // artWorkImage,
  artistImage,
}: ArtInfoProps | any): JSX.Element => {
  const { artistId } = useContext(GeneralContext);
  
  return (
    <>
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
        <Link href={`artist/${artistId}`}>
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
          <h6>Factsheet</h6>
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
