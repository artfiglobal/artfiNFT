import { Footer, Head, Navigation } from "../components/reusables/Components";
import { Typography } from "../components/reusables/Atoms";
import { Distribution } from "../components/Home";
import styles from "../styles/token.module.scss";

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
          <div className={styles.hed}>
            The Artfi token (ARTFI) is a revenue sharing utility token. It is
            an ERC-20 token native to the Polygon blockchain.
          </div>
        </section>
        <section className={styles.tokenAbout}>
          <img
            src="/images/aboutBG.png"
            alt="bg"
            className={styles.tokenAboutBG}
          />
          <div className={styles.h1}>
            About the token
          </div>
          <div className={styles.aboutContainer}>
            <img
              src="/images/tokenAbout.png"
              alt="about"
              className={styles.aboutImg}
            />
            <div className={styles.aboutText}>
              <Typography variant="subheading" color={"white"}>
                The Artfi token will be used for{" "}
                <span className={styles.aboutBold}>
                  NFT marketplace payments, to reward stakers, and as a
                  deflationary store of value asset
                </span><br/>
                designed to appreciate as the company grows and uses its  revenues to burn the fixed supply. {" "}
                <span className={styles.aboutBold}>
                   Artfi&apos;s profitable
                  consignment-based business model
                </span>{" "}
                is structured to accrue value to the Artfi token.
              </Typography>
              <a href="#distribution">
                Token Distribution
                <img src="/images/downArrow.png" alt="" />
              </a>
            </div>
          </div>
        </section>
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
            <Typography variant="subheading" color={"grey"}>
              The main purpose for someone to hold $ARTFI token is to{" "}
              <span className={styles.aboutBold}>
                benefit from a hard-capped deflationary token
              </span>{" "}
              whose value reflects Artfi&apos;s ability to generate current and
              future revenues.
              <br />
              <br />
              <span className={styles.aboutBold}>
                Artfi will earn revenues from commissions
              </span>{" "}
              on consignments of artworks to be fractionalized and sold as NFTs,
              along with artworks sold from the Artfi collection at a future
              date.
            </Typography>
          </div>
          <img src="/images/tokenRevenue.png" alt="revenue" />
        </section>
        <section className={styles.tokenBurn}>
          <img src="/images/tokenBurn.png" alt="BG" className={styles.burnBG} />
          <div className={styles.burnContent}>
            <div className={styles.burnTitle}>
              Token Burn
              <img src="/images/Burn/burn.png" alt="burn" />
            </div>
            <div className={styles.burnText}>
              <div className={styles.burnContainer}>
                <img src="/images/Burn/burn2.png" alt="burn" />
                <Typography variant="body" color={"white"}>
                  <span className={styles.aboutBold}>
                    Artfi will allocate 30% of its revenues
                  </span>{" "}
                  from commission fees earned on consignments and sales of
                  artwork to the token burning program.
                </Typography>
              </div>
              <div className={styles.burnContainer}>
                <img src="/images/Burn/burn3.png" alt="burn" />
                <Typography variant="body" color={"white"}>
                  The burning of tokens is the best way for Arti to distribute
                  its revenues amongst token holders and encourage early entry
                  into the token because by decreasing the total supply,{" "}
                  <span className={styles.aboutBold}>
                    every $ARTFI token holder&apos;s percentage of the overall
                    supply will increase.
                  </span>
                </Typography>
              </div>
              <div className={styles.burnContainer}>
                <img src="/images/Burn/burn4.png" alt="burn" />
                <Typography variant="body" color={"white"}>
                  As the company grows and takes in higher revenue totals each
                  year, the amount of $ARTFI tokens bought on the open market
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
          <img
            src="/images/Staking/staking.png"
            alt="staking"
            className={styles.stakingBG}
          />
          <div className={styles.stakingContent}>
            <Typography variant="heading" color={"black"}>
              Token Staking
            </Typography>
            <div className={styles.stakingContainer}>
              <img src="/images/Staking/staking2.png" alt="staking" />
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
              <img src="/images/Staking/staking3.png" alt="staking" />
              <Typography variant="body" color={"black"}>
                <span className={styles.aboutBold}>
                  $ARTFI token stakers will earn a promotional yield
                </span>
                , all while maintaining exposure to Artfi&apos;s revenue streams
                which will continue to reduce the fixed token supply over time.
              </Typography>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default token;
