import { Button, Typography } from "../../reusables/Atoms";
import styles from "./Foundation.module.scss";

type FoundationProps = {};

export const Foundation = ({}: FoundationProps): JSX.Element => {
  return (
    <div className={styles.foundation}>
      <div className={styles.foundation_text}>
        <Typography color="white" variant="heading">
          The Artfi Foundation
        </Typography>
        <p className={styles.foundation_desc}>
          Experience the art you own, virtually or in the physical world!
          <br />
          <br />
          The Artfi Foundation is a non-profit public trust which runs a
          physical museum dedicated to the display and preservation of the
          artworks owned by the Artfi community. Every artwork acquired by Artfi
          and sold to the community will be immediately installed at the museum
          and will take part in collaborative exhibitions with other
          distinguished museums and art galleries around the world.
          <br />
          <br />
          The Artfi Foundation will also develop a museum in the metaverse where
          the Artfi collection will be virtually on display 24 hours a day, 7
          days a week.
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <a href="http://artfi.foundation/">
          <Button variant="lg">Visit Museum</Button>
        </a>
      </div>
    </div>
  );
};

export default Foundation;
