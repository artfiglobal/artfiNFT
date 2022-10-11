/* eslint-disable @next/next/no-img-element */
import { Typography } from "../../reusables/Atoms";
import styles from "./Discover.module.scss";

type DiscoverProps = {};

export const Discover = ({}: DiscoverProps): JSX.Element => {
  return (
    <div className={styles.discover}>
      <div className={styles.discover_text}>
        <Typography color={"black"} variant="heading">
          Art Investing, Made Simple
        </Typography>
        <Typography color={"black"} variant="subheading">
          Until now, collecting and investing in the world&apos;s greatest works
          of art has been a privilege enjoyed only by a select few.
        </Typography>
        <Typography color={"black"} variant="subheading">
          This changes with Artfi !
        </Typography>
        <Typography color={"black"} variant="subheading">
          Artfi is a rapidly expanding platform for fine art connoisseurs and
          investors. Its mission is to democratise art ownership through
          blockchain & NFTs.
        </Typography>

        {/* <Link href="/project" passHref>
          <Button className={styles.projectBtn} variant="lg">
            The Project
          </Button>
        </Link> */}
      </div>
      <div className={styles.discover_gif}>
        <img src="/images/Artfi_2.gif" alt="Discover" className={styles.gif} />
      </div>
    </div>
  );
};

export default Discover;
