import React from "react";
import { BigNumber } from "ethers";
import styled from "styled-components";
import { StatusModals } from "./components/StatusModals/StatusModals";
import { useUnstaking } from "../../hooks/contract/staking/useUnstaking";
import { Position } from "./Position";

const PositionsContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  height: 100%;
  overflow-y: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;
  font-size: 14px;

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

export const Positions = () => {
  const {
    positions,
    claim,
    isSuccess,
    isError,
    isLoading,
    dismissSuccess,
    dismissError,
  } = useUnstaking();

  const handleClaim = (position: BigNumber) => {
    claim?.({ recklesslySetUnpreparedArgs: [position] });
  };

  return (
    <PositionsContainer>
      {positions.map(
        ({
          positionId,
          stakedNfts,
          accruedReward,
          positionKind,
          remainingPeriod,
        }) => (
          <Position
            key={positionId.toString()}
            positionKind={positionKind}
            stakedNfts={stakedNfts}
            accruedReward={accruedReward}
            remainingPeriod={remainingPeriod}
            claim={() => handleClaim(positionId)}
          />
        )
      )}

      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </PositionsContainer>
  );
};
