import { Typography } from "../../../reusables/Atoms";
import styles from "./WideCard.module.scss";

type WideCardProps = {
  ltr: boolean,
  title: string,
  description: string,
  background: string
};

const WideCard = ({ ltr, title, description, background }: WideCardProps) => {
  return (

    <div className={styles.overlay}>
      <div className={ltr ? styles.left : styles.right}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={styles.content}>
          <Typography variant="heading" color="white" >
            {title}
          </Typography>
          <Typography variant="body" color="white" >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
