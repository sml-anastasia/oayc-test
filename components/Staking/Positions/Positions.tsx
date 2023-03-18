import React from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { ethers } from "ethers";
import ImageSelector from "../ImageSelector";
import styled from "styled-components";

const StyledPositionList = styled(ImageSelector)`
  min-height: 100px;
`;

export const Positions = () => {
  const { positions } = useStaking();

  return (
    <div>
      {positions.map((item, index) => (
        <div key={index}>
          Position: {index}
          <StyledPositionList data={item.stakedNfts} selectable={false} />
          Reward:
          {parseFloat(ethers.utils.formatEther(item.accruedReward)).toFixed(4)}
          $OAYC
        </div>
      ))}
      {/*Positions*/}
      {/*{positions.data?.map((position, i) => {*/}
      {/*  const { arrayIdsMoayc, arrayIdsOayc, remainingPeriod } = position;*/}
      {/*  const items = [];*/}
      {/*  arrayIdsOayc?.forEach((id, i) => {*/}
      {/*    items.push({*/}
      {/*      url: `https://oayc.io:3000/${id.toString()}.png`,*/}
      {/*      id: id.toString(),*/}
      {/*    });*/}
      {/*  });*/}
      {/*  arrayIdsMoayc?.forEach((id, i) => {*/}
      {/*    items.push({*/}
      {/*      url: `https://oayc.io:3001/${id.toString()}.png`,*/}
      {/*      id: id.toString(),*/}
      {/*    });*/}
      {/*  });*/}
      {/*  // const finishTime = new Date().setSeconds(remainingPeriod);*/}
      {/*  return (*/}
      {/*    <div className={styles.item} onClick={() => onSelect?.(i + 1)}>*/}
      {/*      {items*/}
      {/*        .filter((item) => item.id !== "0")*/}
      {/*        .map((nft, i) => {*/}
      {/*          return (*/}
      {/*            <div key={i}>*/}
      {/*              <img src={nft.url} />*/}
      {/*              <br />*/}
      {/*              <span>{nft.id}</span>*/}
      {/*            </div>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      {<span>Time left: {+remainingPeriod.toString() / 60} mins</span>}*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};
