import React from "react";
import styles from "./achievements.module.scss";
type Description = {
  year: string;
  description: string;
};
const Achievements = ({ artistDetails }: any) => {
  const Achievement = ({ year, description }: Description) => {
    return (
      <div className={styles.achievement}>
        <label>{year}</label>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className={styles.achiebements}>
      <h1>Achievements</h1>
      <div className={styles.achivementBlock}>
        {artistDetails?.achievements?.map((item: any, index: any) => {
          return (
            <Achievement
              description={item?.archievementDesc}
              year={item?.archievementYear}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
