import React, { useState } from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { BigNumber } from "ethers";
import styled from "styled-components";
import { StakingButton } from "../../Button/StakingButton";
import { Positions } from "../Positions/Positions";
import { StatusModals } from "../StatusModals/StatusModals";

const Title = styled.div`
  font-size: 42px;
  line-height: 90%;
  font-weight: 700;
  font-style: italic;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 15px;
  text-transform: uppercase;
`;

const StyledContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled.div`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0 auto;
  margin: 0;
  text-align: center;
`;

// const StyledTabs = styled(Tabs)`
//   margin: 0 auto 20px;
// `;

const StyledBalance = styled.div`
  display: flex;
  margin: 0 auto 20px;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const ClaimButton = styled(StakingButton)`
  height: 30px;
  width: 200px;
`;

// enum DepositType {
//   staking,
//   lock,
// }

export const WidthrawStakedNft = () => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  // const [selectedDepositType, setSelectedDepositType] = useState<DepositType>(
  //   DepositType.staking
  // );
  const {
    claim,
    claimAll,
    positions,
    isLoading,
    isError,
    isSuccess,
    dismissSuccess,
    dismissError,
  } = useStaking({
    claimPositionId:
      selectedPosition !== null ? BigNumber.from(selectedPosition) : undefined,
  });

  const totalReward =
    positions.reduce(
      (total, { accruedReward }) => total + +accruedReward.toString(),
      0
    ) /
    10 ** 18;

  return (
    <StyledContainer>
      <Title>Withdraw</Title>
      <Positions onSelect={(id) => setSelectedPosition(id)} />
      selectedPosition {selectedPosition}
      {/* <StyledTabs
        value={selectedDepositType}
        tabs={["STAKED", "LOCKED"]}
        onChange={setSelectedDepositType}
      />
   */}
      <StakingButton
        size="small"
        onClick={() => {
          claim.write?.();
        }}
        disabled={!selectedPosition}
      >
        Unstake
        {/* {selectedDepositType === DepositType.staking ? "UnStake" : "UnLock"} */}
      </StakingButton>
      <StyledText>
        WARNING!<br></br>In case of premature withdrawal, the penalty is 100%
      </StyledText>
      <StyledBalance>
        <StyledText>BALANCE</StyledText>
        <StyledText>{totalReward} $OAYC</StyledText>
        <ClaimButton onClick={() => claimAll.write?.()} disabled={!totalReward}>
          Claim all
        </ClaimButton>
      </StyledBalance>
      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </StyledContainer>
  );
};
