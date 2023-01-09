import React from "react";
import styles from "./Small.module.scss";
const SmallCard = ({ name, src, title, content }) => {
  return (
    <div>
      <div className={styles.flipCard}>
        <div className={styles.flipCard_inner}>
          <div className={styles.flipCard_front}>
            <img src={src} alt="" />
            <p>{name}</p>
            <span>{title}</span>
          </div>
          <div className={styles.flipCard_back}>
            <p>{title}</p>
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
