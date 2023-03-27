import React from "react";
import { StatusModals } from "./components/StatusModals/StatusModals";
import styled from "styled-components";
import { Positions } from "./Positions";
import { useUnstaking } from "../../hooks/contract/staking/useUnstaking";
import { ContentContainer } from "./components/Styled/ContentContainer";
// import { UnstakeAllButton } from "./components/UnstakeAllButton";
import { BigNumber } from "ethers";

const ContentContainer2 = styled(ContentContainer)`
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  color: #ff0420;
  font-size: 52px;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    margin: 0 20px;
    height: 140px;
    line-height: 95%;
    text-align: center;
  }

  @media (max-width: 375px) {
    height: 100px;
    font-size: 42px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 100px;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StakedNfts = () => {
  const {
    isSuccess,
    isError,
    isLoading,
    positions,
    dismissSuccess,
    dismissError,
    claim,
    lockedPositions,
    stakedPositions,
  } = useUnstaking();

  const hasActivePositions = positions.length > 0;
  const handleClaim = (position: BigNumber) => {
    claim?.({ recklesslySetUnpreparedArgs: [position] });
  };

  return (
    <>
      <ContentContainer2>
        {hasActivePositions && (
          <>
            <Wrapper>
              <NftContainer>
                <StyledText>YOUR STAKED NFTS</StyledText>
                <Positions positions={stakedPositions} claim={handleClaim} />
              </NftContainer>
              <NftContainer>
                <StyledText>YOUR LOCKED NFTS</StyledText>
                <Positions positions={lockedPositions} claim={handleClaim} />
              </NftContainer>
            </Wrapper>
            {/*<UnstakeAllButton claimAll={claimAll} />*/}
          </>
        )}
      </ContentContainer2>
      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </>
  );
};
