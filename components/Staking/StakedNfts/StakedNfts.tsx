import React from "react";
import styles from "./StakedNfts.module.scss";
import Positions from "../Positions/Positions";

function StakedNfts() {
  return (
    <div className={styles.wrapper}>
      StakedNfts positions
      <Positions />
    </div>
  );
}

export default StakedNfts;
