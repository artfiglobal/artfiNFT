/* eslint-disable @next/next/no-img-element */

import { Typography } from "../../reusables/Atoms";
import styles from "./Landing.module.scss";
type LandingProps = {
  setIsOpen: (_: boolean) => void,
  isOpen: boolean,
  referralCode: string | string[] | undefined
};

const Landing = ({ setIsOpen, isOpen }: LandingProps) => {
  return (
    <div>
    <div className={styles.landing}>
      <div className={styles.heading_wrapper} style={{textAlign:"center"}} >
        <Typography color="black" variant="heading" className={styles.webHeading}>
          <span className={styles.heading_highlight}>Discover</span>,{" "}
          <span className={styles.heading_highlight}>Collect</span> &{" "}
          <span className={styles.heading_highlight}>Invest</span> <br /> in 
          Bluechip Fine Art
        </Typography>
        <Typography color="black" variant="heading" className={styles.mblHeading}>
        <span className={styles.heading_highlight}>Discover</span>,{" "}
          <span className={styles.heading_highlight}>Collect</span> &{" "}
          <span className={styles.heading_highlight}>Invest</span> <br /> in 
          Bluechip Fine Art
        </Typography>

        <Typography color="black" variant="body" >
            <label className={styles.secondHedding}> A new era of investing in fine arts enabled by <br/>  NFTs and blockchain </label>
        </Typography>
        <div className={styles.button_holder}>
          <button
            className={styles.waitlistBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            Waitlist now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;
