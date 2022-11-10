import { Footer, Head, Navigation } from "../components/reusables/Components";
import { Typography } from "../components/reusables/Atoms";
import { Distribution } from "../components/Home";
import styles from "../styles/token.module.scss";
import { AboutSection } from "../components/Token/Token";

const token = () => {
  return (
    <div>
      <Head title="Artfi | Token" />
      <Navigation />
      <div className={styles.container}>
        <section className={styles.tokenLanding}>
          
          <div className={styles.landingTitle}>
              <img className={styles.img} src="/Publiced/Group 18774.svg"/>
          </div>
          <div className={styles.hed} style={{textAlign:"center"}}>
            The Artfi token (ARTFI) is a revenue sharing utility token.<br/> It is
            an ERC-20 token native to the Polygon blockchain.
          </div>
          <div className={styles.hed2} style={{textAlign:"center"}}>
            The Artfi token (ARTFI) is a revenue sharing utility token.It is
            an ERC-20 token native to the Polygon blockchain.
          </div>
        </section>
        <AboutSection/>
        <section className={styles.tokenDistribution} id="distribution">
          <div className={styles.distributionTitle}>
            <div className={styles.tokenheading}>
              Token Distribution
            </div>
            <div className={styles.subheading}>
              There is a 1 billion fixed supply of Artfi tokens
              <br />
              which are allocated as follows:
            </div>
          </div>
          <br/><br/>
          <Distribution />
        </section>
        <section className={styles.tokenRevenue}>
          <div className={styles.revenueText}>
            <Typography variant="heading" color={"black"}>
              Revenue Sharing
            </Typography>
            <p>
            The main purpose for someone to hold ARTFI is to benefit from a hard-capped deflationary token whose value reflects Artfi’s ability to generate current and future revenues. 
            <br/><br/>
            Artfi will earn revenues from commissions on consignments of artworks to be fractionalized and sold as NFTs, along with artworks sold from the Artfi collection at a future date.
            </p>
          </div>
            <img src="/Background/Rs.svg" alt="revenue" />
        </section>
        <section className={styles.tokenBurn}>
          <img src="/Background/tb.svg" alt="BG" className={styles.burnBG} />
          <div className={styles.burnContent}>
            <div className={styles.burnTitle}>
              Token Burn
            </div>
            <div className={styles.burnText}>
              <div className={styles.burnContainer}>
                <Typography variant="body" color={"black"}>
                  <span className={styles.aboutBold}>
                    Artfi will allocate 30% of its revenues
                  </span>{" "}
                  from commission fees earned on consignments and sales of
                  artwork to the token burning program.
                </Typography>
              </div>
              <div className={styles.burnContainer}>
                <Typography variant="body" color={"black"}>
                  The burning of tokens is the best way for Artfi to distribute
                  its revenues amongst token holders and encourage early entry
                  into the token because by decreasing the total supply,{" "}
                  <span className={styles.aboutBold}>
                    every ARTFI token holder&apos;s percentage of the overall
                    supply will increase.
                  </span>
                </Typography>
              </div>
              <div className={styles.burnContainer}>
                <Typography variant="body" color={"black"}>
                  As the company grows and takes in higher revenue totals each
                  year, the amount of ARTFI tokens bought on the open market
                  and burned will increase, all while the token supply
                  diminishes.{" "}
                  <span className={styles.aboutBold}>
                    This revenue distribution model based on the burning of
                    tokens from a fixed supply could create an exponential price
                    appreciation trajectory.
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tokenStaking}>
    
          <div className={styles.stakingContent}>
            <Typography variant="heading" color={"black"}>
              Token Staking
            </Typography>
            <div className={styles.flex}>
            <div className={styles.stakingContainer}>
              <img src="/Icons/ts1.svg" alt="staking" />
              <Typography variant="body" color={"black"}>
                <span className={styles.aboutBold}>
                  Twenty percent of Artfi&apos;s token allotment is designated
                  to reward token staking.{" "}
                </span>
                This portion of Artfi&apos;s tokens will be paid out to stakers
                from early in the company&apos;s history to incentivize
                adoption.
              </Typography>
            </div>
            <div className={styles.stakingContainer}>
              <img src="/Icons/ts2.svg" alt="staking" />
              <Typography variant="body" color={"black"}>
                <span className={styles.aboutBold}>
                  Artfi token stakers will earn a promotional yield
                </span>
                , all while maintaining exposure to Artfi&apos;s revenue streams
                which will continue to reduce the fixed token supply over time.
              </Typography>
            </div>
            </div> 
          </div>
        </section>
      </div>
      <Footer display=""/>
    </div>
  );
};

export default token;
