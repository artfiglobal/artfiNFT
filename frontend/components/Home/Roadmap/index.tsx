/* eslint-disable @next/next/no-img-element */

import { Button, Container, Typography } from "../../reusables/Atoms";
import styles from "./Roadmap.module.scss";

type RoadmapProps = {};

export const Roadmap = ({ }: RoadmapProps): JSX.Element => {
  return (
    <div className={styles.roadmap}>
      <img src="/images/purple-gem-top.png" className={styles.gemTop} alt="" />
      <img
        src="/images/purple-gem-bottom.png"
        className={styles.gemBot}
        alt=""
      />
      <Typography color="white" variant="heading">
        Roadmap
      </Typography>

      <Typography extraClass={styles.roadmap_text} color="white" variant="body">
        Little information about the roadmap
      </Typography>

      <div className={styles.roadmap_cards}>
        <div className={styles.roadmap_card}>
          <p>Launch for Early Access | Acquisition of 2 artworks</p>
          <Button variant="md">Q1 (2022)</Button>
        </div>
        <div className={styles.roadmap_card}>
          <p>
            Fractionalisation and Sale of NFTs - 2 Artworks - 10,000 pcs each,
            worth 2M$ | Art Acquisition - 3 artworks
          </p>
          <Button variant="md">Q2 (2022)</Button>
        </div>
        <div className={styles.roadmap_card}>
          <p>
            Listing of Artfi Token | Marketplace Launch for Buy & Sell of NFTs |
            Art Acquisition - 4 artworks | Fractionalisation and Sale of NFTs -
            3 Artworks - 10,000 pcs each, worth 6M$
          </p>
          <Button variant="md">Q3 (2022)</Button>
        </div>
        <div className={styles.roadmap_card}>
          <p>
            Launch of Artfi Museum with an Experience Center | Token List on 3
            DEX and 4 CEX | Art Acquisition - 5 artworks | Fractionalisation and
            Sale of NFTs - 3 Artworks - 10,000 pcs each, worth 7M$
          </p>
          <Button variant="md">Q4 (2022)</Button>
        </div>
      </div>

      <a href="https://polygon.technology/">
        <div className={styles.poweredby}>
          <Container color="white">
            <p className={styles.polygon_title}>Powered By</p>
            <img
              src="/images/reusables/polygonBlack.png"
              alt=""
              className={styles.polygon_logo}
            />
          </Container>
        </div>
      </a>
    </div>
  );
};

export default Roadmap;
