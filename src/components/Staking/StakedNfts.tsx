import React from "react";
import { StatusModals } from "./components/StatusModals/StatusModals";
import styled from "styled-components";
import { Positions } from "./Positions";
import { StakingButton } from "../Button/StakingButton";
import Image from "next/image";
import { useUnstaking } from "../../hooks/contract/staking/useUnstaking";
import { ContentContainer } from "./components/Styled/ContentContainer";

const ContentContainer2 = styled(ContentContainer)`
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const StyledText3 = styled.div`
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

const StyledText = styled.div`
  font-size: 12px;
  margin-right: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Icon = styled(Image)`
  padding: 0 20px;
`;

const WarningText = styled.div`
  display: flex;
  align-items: center;
  width: 187px;
  left: -1.5px;
  height: 76px;
  margin: 0;
  position: absolute;
  top: 27px;
  border-radius: 0 0 10px 10px;
  font-size: 12px;
  border: 1.5px solid #ff0420;
  color: #ff0420;
`;

const StyledUnstakeButton = styled(StakingButton)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid #ff0420;
  background-color: transparent;
  color: #ff0420;
  border-radius: 15px 15px 0 0;
  transition: height 0.1s, border-radius 0.1s;
  width: 187px;
  padding: 10px 1px 10px 10px;
  line-height: 90%;
  height: 30px;
  margin: 20px auto;
  font-size: 11px;

  @media (max-width: 480px) {
    width: 335px;
    height: 50px;
    margin: 20px auto;
    font-size: 18px;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin: 20px 10px;
  }
`;

export const StakedNfts = () => {
  const {
    isSuccess,
    isError,
    isLoading,
    positions,
    dismissSuccess,
    dismissError,
    claimAll,
  } = useUnstaking();

  const hasActivePositions = positions.length > 0;

  return (
    <>
      <ContentContainer2>
        {hasActivePositions && (
          <Wrapper>
            <StyledText3>YOUR STAKED & LOCKED NFTS</StyledText3>
            <Positions />
            <StyledUnstakeButton onClick={claimAll}>
              <StyledText>UNSTAKE & CLAIM ALL</StyledText>
              <Icon
                src="/images/svg/claiminfo.svg"
                alt="claim button"
                width={22}
                height={22}
              />
              <WarningText>
                WARNING! In case of premature withdrawal, the penalty is 100%
              </WarningText>
            </StyledUnstakeButton>
          </Wrapper>
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
