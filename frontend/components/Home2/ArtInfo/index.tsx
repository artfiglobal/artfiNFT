/* eslint-disable @next/next/no-img-element */
import { Typography } from "../../reusables2/Atoms";
import { BiCoin } from "react-icons/bi";
import Link from "next/link";

import style from "./ArtInfo.module.scss";

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
    <div className={style.info}>
      <img
        src="/images/artist.png"
        alt="Artist profile"
        className={style.artistProfile}
      />
      <Typography variant="subheading" color={"grey"}>
        {artist}
      </Typography>
      <div className={style.divider}></div>
      <div className={style.artPrice}>
        <BiCoin />
        <Typography variant="subheading" color={"grey"}>
          Price
        </Typography>
        <Typography
          variant="subheading"
          color={"purple"}
          className={style.price}
        >
          {price}USD
        </Typography>
      </div>
      <div className={style.divider}></div>
      <a href="/factsheet.pdf" className={style.factsheet}>
        <Typography variant="subheading" color={"grey"}>
          {sheetName}
        </Typography>
        <img src="/download.png/" alt="download" className={style.download} />
      </a>
    </div>
  );
};

export default ArtInfo;
