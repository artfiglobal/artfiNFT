import Tile from "./Tile";
import { PieChart } from "react-minimal-pie-chart";
import styles from "./Distribution.module.scss";

const chartData = [
  { title: "Team", value: 15, color: "#a945fd" },
  
  { title: "Advisors", value: 5, color: "#800080" },
  { title: "Staking Rewards", value: 15, color: "#260038" },
  { title: "Treasury", value: 12, color: "#ffa7a7" },
  {
    title: "Market Making and Liquidity",
    value: 3,
    color: "#ff87d6",
  },

  { title: "Fundraising", value: 20, color: "#4527b3" },
  

];

export const Distribution = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tileContainer}>
        <Tile src="fundraising" title="Fundraising" percentage={20} />
        <Tile
          src="marketmaking"
          title="Market Making and Liquidity"
          percentage={3}
        />
        <Tile src="team" title="Team" percentage={15} />
        <Tile src="advisors" title="Advisors" percentage={5} />
        <Tile src="rewards" title="Staking Rewards" percentage={15} />
        <Tile src="treasury" title="Treasury" percentage={12} />
      </div>
      <div className={styles.chartContainer}>
        <img src="/images/tokenDistribution.png" alt="token" />
        <PieChart
          data={chartData}
          lineWidth={25}
          style={{ height: "560px" }}
          animate
        />
      </div>
    </div>
  );
};

export default Distribution;
