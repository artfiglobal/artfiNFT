import React from "react";
import styles from "./styles.module.scss";
import BounceLoader from "react-spinners/BounceLoader";

const LoaderScreen = () => {
  return (
    <div className={styles.loaderScreen}>
      <BounceLoader color="#4527b3" />
    </div>
  );
};

export default LoaderScreen;
