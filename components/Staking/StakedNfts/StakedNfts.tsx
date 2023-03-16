import React from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import styles from "./StakedNfts.module.scss";

function StakedNfts() {
  const { positions } = useStaking();

  // will be refactored
  const staked =
    positions.data?.reduce((acc, position) => {
      const { arrayIdsMoayc, arrayIdsOayc, remainingPeriod } = position;

      arrayIdsOayc?.forEach((id, i) => {
        acc.push({
          url: `https://oayc.io:3000/${id.toString()}.png`,
          time: remainingPeriod.toString(),
        });
      });

      arrayIdsMoayc?.forEach((id, i) => {
        acc.push({
          url: `https://oayc.io:3001/${id.toString()}.png`,
          time: remainingPeriod.toString(),
        });
      });

      return acc;
    }, []) || [];

  return (
    <div className={styles.wrapper}>
      StakedNfts
      {staked.map((position, i) => {
        return (
          <div key={i} className={styles.item}>
            <img src={position.url} />
            <span>Time left: {position.time}</span>
          </div>
        );
      })}
    </div>
  );
}

export default StakedNfts;
