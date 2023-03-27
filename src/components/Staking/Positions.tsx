import React from "react";
import { BigNumber } from "ethers";
import styled from "styled-components";
import { Position } from "./Position";
import { PositionData } from "../../web3/types/NFT";

const PositionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  max-width: 580px;
  overflow-y: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    padding: 0;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin: 20px 0;
    padding: 0;
  }
`;

interface PositionsProps {
  claim: (id: BigNumber) => void;
  positions: PositionData[];
}

export const Positions = (props: PositionsProps) => {
  const { claim, positions } = props;

  return (
    <PositionsContainer>
      {positions.map((position) => (
        <Position
          key={position.positionId.toString()}
          position={position}
          claim={() => claim(position.positionId)}
        />
      ))}
    </PositionsContainer>
  );
};
