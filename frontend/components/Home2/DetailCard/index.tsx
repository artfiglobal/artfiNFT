/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Typography } from "../../reusables2/Atoms";
import style from "./DetailCard.module.scss";

type DetailCardProps = {
  url: string;
  title: string;
  content: string;
};

export const DetailCard = ({
  url,
  title,
  content,
}: DetailCardProps): JSX.Element => {
  return (
    <div className={style.card}>
      {/* <div style={{ width: "60px", height: "60px" }}> */}
      <Image
        src={`/Icons/${url}.svg`}
        alt=""
        width="60px"
        height="60px"
        className={style.cardImage}
      />
      {/* </div> */}
      <div className={style.cardContent}>
        <Typography
          variant="subheading"
          color={"grey"}
          className={style.cardTitle}
        >
          {title}
        </Typography>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailCard;
