/* eslint-disable @next/next/no-img-element */
import { Typography } from "../../reusables2/Atoms";
import { BiCoin, BiDollar } from "react-icons/bi";
import Link from "next/link";

import style from "./ArtInfo.module.scss";
import { Avatar } from "@mui/material";
import Image from "next/image";

type ArtInfoProps = {
  artist: string;
  price: number;
  sheetName: string;
};

export const ArtInfo = ({
  artist,
  price,
  sheetName,
}: ArtInfoProps): JSX.Element => {
  return (
    <>
    <div className={style.info}>
      <Avatar
        src="/images/artist.png"
        alt="Artist profile"
        className={style.artistProfile}
      />
      <h6>
        {artist} 
      </h6>
      <img src="/Publiced/Vector.svg"/>
      <div className={style.divider}></div>
      <div className={style.artPrice}>
        {/* <BiCoin /> */}
        
        <Image src="/Icons/doller.svg" alt="dol" width="24px" height="24px" />
        <h6>
          Price
        </h6>
        <h6
          className={style.price}
        >
          {price}USD
        </h6>
      </div>
      <div className={style.divider}></div>
      <a href="/factsheet.pdf" className={style.factsheet}>
        <h6>
          {sheetName}
        </h6>
        <Image src="/Icons/dw.svg" alt="download" width="24px" height="24px"  />
      </a>
    </div>
    <div className={style.infoMbl}>
      <div className={style.artPrice}>
        {/* <BiCoin /> */}
        
        <Image src="/Icons/doller.svg" alt="dol" width="24px" height="24px" />
        <h6>
          Price
        </h6>
        <h6
          className={style.price}
        >
          {price}USD
        </h6>
      </div>
      <div className={style.divider}></div>
      <a href="/factsheet.pdf" className={style.factsheet}>
        <h6>
          {sheetName}
        </h6>
        <Image src="/Icons/dw.svg" alt="download" width="24px" height="24px"  />
      </a>
    </div>
    </>
  );
};

export default ArtInfo;
