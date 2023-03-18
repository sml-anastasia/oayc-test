import React from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { ethers } from "ethers";
import ImageSelector from "../ImageSelector";
import styled from "styled-components";

const StyledPositionList = styled(ImageSelector)`
  min-height: 100px;
`;

interface Props {
  onSelect?: (id: number) => void;
}

export const Positions = ({ onSelect }: Props) => {
  const { positions } = useStaking({});

  return (
    <div>
      {positions.map((item, index) => (
        <div key={index} onClick={() => onSelect?.(index + 1)}>
          Position: {index}
          <StyledPositionList data={item.stakedNfts} selectable={false} />
          Reward:
          {parseFloat(ethers.utils.formatEther(item.accruedReward)).toFixed(4)}
          $OAYC
          {/*      {<span>Time left: {+remainingPeriod.toString() / 60} mins</span>}*/}
        </div>
      ))}
    </div>
  );
};
