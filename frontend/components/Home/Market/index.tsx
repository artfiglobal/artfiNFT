import { Container, Typography } from "../../reusables/Atoms";
import styles from "./Market.module.scss";

type MarketProps = {};

export const Market = ({}: MarketProps): JSX.Element => {
  return (
    <div className={styles.market}>
      <div className={styles.market_top}>
        <div className={styles.market_text}>
          <Typography variant="heading" color="black">
            The Massive Art Market
          </Typography>
          <p>
            You are invited to join a community of art collectors and reap the
            benefits of investing in blue chip fine art.
          </p>
        </div>
        <div className={styles.market_accordian}>
          <Container extraClass={styles.container} color="purple">
            <Typography variant="body" color="white">
              Own a stake of an illustrious artwork.
            </Typography>
          </Container>
          <Container extraClass={styles.container} color="white">
            <Typography variant="body" color="black">
              Participate in the art market’s high historical rate of
              appreciation and low correlation to equities.
            </Typography>
          </Container>
          <Container extraClass={styles.container} color="white">
            <Typography variant="body" color="black">
              Access secondary NFT markets for interim liquidity.
            </Typography>
          </Container>
        </div>
      </div>
      <img src="/graphGif.gif" alt="graph" className={styles.chart} />
      <div className={styles.container_holder}>
        <Container extraClass={styles.container} color="white">
          <Typography variant="heading" color="black">
            $64.1B
          </Typography>
          <Typography variant="body" color="black">
            Global sales of fine art 2019.
          </Typography>
        </Container>
        <Container extraClass={styles.container} color="white">
          <Typography variant="heading" color="black">
            $1.7 T
          </Typography>
          <Typography variant="body" color="black">
            Art & collectables current market cap.
          </Typography>
        </Container>
        <Container extraClass={styles.container} color="white">
          <Typography variant="heading" color="black">
            86%
          </Typography>
          <Typography variant="body" color="black">
            Of wealth managers surveyed recommend investing in fine art.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Market;
