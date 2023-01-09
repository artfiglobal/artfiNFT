import Marquee from "react-marquee-slider-vertical";
import { Typography } from "../../reusables/Atoms";
import styles from "./Benefits.module.scss";

type BenefitsProps = {};

export const Benefits = ({}: BenefitsProps): JSX.Element => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marquee_left}>
        <Typography color="black" variant="heading">
          Benefits
        </Typography>
        <Typography color="black" variant="body">
          Building a platform for investment in the fine arts for buying &
          selling fractionalise ownership as NFT representing an investment.
        </Typography>
      </div>
      <div className={styles.marquee_right}>
        <Marquee
          velocity={15}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={10}
          onInit={() => {}}
          onFinish={() => {}}
        >
          <div className={styles.marquee_desc}>
            <p className={styles.marquee_heading}>👑 Royalties</p>
            <p className={styles.marquee_text}>
              Whoever consigns a painting with Artfi to be fractionalized as
              NFTs will receive royalties every time the NFTs are traded. Now
              artists and collectors looking to sell their artworks can benefit
              from royalties for life.
            </p>
          </div>
          <div className={styles.marquee_desc}>
            <p className={styles.marquee_heading}>⛏️ Minter Royalties</p>
            <p className={styles.marquee_text}>
              Whoever mints an Artfi NFT from the primary sale will receive
              royalties whenever the NFT gets traded on the secondary market.
            </p>
          </div>
          <div className={styles.marquee_desc}>
            <p className={styles.marquee_heading}>🌐 Community Royalties</p>
            <p className={styles.marquee_text}>
              All Artfi NFT holders will receive royalties on the trading volume
              of Artfi NFTs. All you have to do is be a part of the community by
              holding an Artfi NFT!
            </p>
          </div>
          <div className={styles.marquee_desc}>
            <p className={styles.marquee_heading}>
              💸 Partial Selling Opportunity
            </p>
            <p className={styles.marquee_text}>
              Artfi is introducing a partial selling opportunity for physical
              works of art. For example, sellers can retain 10% of their canvas
              for future upside, while selling the remaining 90%.
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Benefits;
