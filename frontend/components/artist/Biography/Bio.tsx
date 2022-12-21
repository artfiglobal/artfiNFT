import React from "react";
import styles from "./bio.module.scss";
import SoftEditor from "../../SoftEditor/index";

const Bio = ({ artistDetails }: any) => {
  return (
    <div className={styles.bio}>
      <h1>Biography</h1>
      <SoftEditor toolbar={false} value={artistDetails?.artistBiagraphy} />
    </div>
  );
};

export default Bio;
