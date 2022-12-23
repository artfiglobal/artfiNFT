import React from "react";
import ArtworkDetailsHeader from "../components/ArtworkDetailsHeader/ArtworkDetailsHeader";
import { Navigation } from "../components/reusables/Components";
import style from "../styles/addDetails.module.scss";

const ArtworkDetails = () => {
  return (
    <div className={style.details_container}>
      <Navigation />
      <ArtworkDetailsHeader />
    </div>
  );
};

export default ArtworkDetails;
