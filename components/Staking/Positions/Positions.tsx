import React, { useState } from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { ethers } from "ethers";
import ImageSelector from "../ImageSelector";
import styled from "styled-components";

const StyledPositionList = styled(ImageSelector)`
  min-height: 100px;
`;

const StyledItem = styled.div<{ active: boolean }>`
  border: 3px solid ${({ active }) => active && "orange"};
`;

interface Props {
  onSelect?: (id: number) => void;
}

export const Positions = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  const { positions } = useStaking({});

  function handleSelect(id: number) {
    setSelected(id);
    onSelect?.(id);
  }

  return (
    <div>
      {positions.map(
        ({ positionId, stakedNfts, accruedReward, remainingPeriod }) => {
          const id = +positionId.toString();
          return (
            <StyledItem
              key={id}
              onClick={() => {
                onSelect && handleSelect(id);
              }}
              active={id === selected}
            >
              <StyledPositionList data={stakedNfts} selectable={false} />
              Reward:
              {parseFloat(ethers.utils.formatEther(accruedReward)).toFixed(4)}
              $OAYC
              <br />
              {<span>Time left: {+remainingPeriod.toString() / 60} mins</span>}
            </StyledItem>
          );
        }
      )}
    </div>
  );
};
