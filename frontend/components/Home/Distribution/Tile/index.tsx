import styles from "./Tile.module.scss";

const colorStyleMapping = {
  fundraising: styles.fundraising,
  marketmaking: styles.marketmaking,
  team: styles.team,
  advisors: styles.advisors,
  rewards: styles.rewards,
  treasury: styles.treasury,
};

type TileProps = {
  src:
    | "fundraising"
    | "marketmaking"
    | "team"
    | "advisors"
    | "rewards"
    | "treasury";
  title: string;
  percentage: number;
  className?: string;
  styling?:object;
  extraClass?: string;
  onClick?: () => void;
};

const Tile = ({ src, title, percentage, extraClass,styling }: TileProps) => {
  return (
    <div className={styles.distributionTile} style={styling}>
      <img
        src={`/images/Distribution/${src}.png`}
        alt="fundraising"
        className={styles.tileImage}
      />
      <p className={styles.tileTitle}>{title}</p>
      <div className={styles.tileDetail}>
        <span
          className={`${styles.tilePercentage} ${extraClass} ${colorStyleMapping[src]}`}
        >
          {percentage}%
        </span>
        <span className={styles.tileValue}>({percentage}0 Million)</span>
      </div>
    </div>
  );
};

export default Tile;
