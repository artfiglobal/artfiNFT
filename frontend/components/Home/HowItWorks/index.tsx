/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Typography } from "../../reusables/Atoms";
import styles from "./HowItWorks.module.scss";

type HowItWorksProps = {};

export const HowItWorks = ({}: HowItWorksProps): JSX.Element => {
  return (
    <div className={styles.working}>
      <img src="/images/black-gem.png" alt="" className={styles.blackGem} />
      <div className={styles.working_text}>
        <Typography color="white" variant="heading">
          How it works?
        </Typography>
        <Typography color="white" variant="body">
          Building a platform for investment in the fine arts for buying &
          selling fractionalise ownership as NFT representing an investment in
          iconic blue-chip artworks of the world-famous Artists.
        </Typography>
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <img src="/images/card1.png" alt="" />
          <h3>Selection</h3>
          <p>We select artists using our experts and research team.</p>
        </div>
        <div className={styles.div2}>
          <img src="/images/card2.png" alt="" />
          <h3>Acquisition</h3>
          <p>We Consign the artwork of world-famous artist</p>
        </div>
        <div className={styles.div3}>
          <img src="/images/card3.png" alt="" />
          <h3>Fractionalisation</h3>
          <p>
            We fractionalize the art into limited editions NFT allowing anyone
            to buy using their digital wallet.{" "}
          </p>
          <span>
            <Link href="/projects#fraction">Read More</Link>
          </span>
        </div>
        <div className={styles.div4}>
          <img src="/images/card4.png" alt="" />
          <h3>Sell</h3>
          <p>
            NFTs can be openly traded on the Artfi Marketplace as well as other
            secondary marketplaces
          </p>
        </div>
        <div className={styles.div5}>
          <img src="/images/card4.png" alt="" />
          <h3>Revenue sharing</h3>
          <p>
            NFTs can be openly traded on the Artfi Marketplace as well as other
            secondary marketplaces
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
