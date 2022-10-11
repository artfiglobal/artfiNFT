/* eslint-disable @next/next/no-img-element */
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
      <img
        src={`/images/detailCard/${url}.png`}
        alt=""
        className={style.cardImage}
      />
      <div className={style.cardContent}>
        <Typography
          variant="subheading"
          color={"grey"}
          className={style.cardTitle}
        >
          {title}
        </Typography>
        <Typography variant="body" color={"black"}>
          {content}
        </Typography>
      </div>
    </div>
  );
};

export default DetailCard;
