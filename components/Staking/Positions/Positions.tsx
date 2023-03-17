import React from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import styles from "./Positions.module.scss";

function Positions({ onSelect }) {
  const { positions } = useStaking();

  console.log(positions);

  return (
    <div>
      Positions
      {positions.data?.map((position, i) => {
        const { arrayIdsMoayc, arrayIdsOayc, remainingPeriod } = position;

        const items = [];

        arrayIdsOayc?.forEach((id, i) => {
          items.push({
            url: `https://oayc.io:3000/${id.toString()}.png`,
            id: id.toString(),
          });
        });

        arrayIdsMoayc?.forEach((id, i) => {
          items.push({
            url: `https://oayc.io:3001/${id.toString()}.png`,

            id: id.toString(),
          });
        });

        // const finishTime = new Date().setSeconds(remainingPeriod);

        return (
          <div className={styles.item} onClick={() => onSelect?.(i + 1)}>
            {items
              .filter((item) => item.id !== "0")
              .map((nft, i) => {
                return (
                  <div key={i}>
                    <img src={nft.url} />
                    <br />
                    <span>{nft.id}</span>
                  </div>
                );
              })}
            {<span>Time left: {+remainingPeriod.toString() / 60} mins</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Positions;
