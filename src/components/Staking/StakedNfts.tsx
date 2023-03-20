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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUnstakeButton = styled(StakingButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid #ff0420;
  background-color: transparent;
  color: #ff0420;
  border-radius: 100px;
  width: 187px;
  padding: 10px 1px 10px 10px;
  line-height: 90%;
  height: 30px;
  margin-top: 20px;
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

const Icon = styled(Image)`
  padding-right: 20px;
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

  return (
    <>
      <ContentContainer2>
        {positions.length > 0 && (
          <Wrapper>
            <StyledText3>YOUR STAKED & LOCKED NFTS</StyledText3>
            <Positions />
            <StyledUnstakeButton onClick={claimAll}>
              UNSTAKE & CLAIM ALL
              <Icon
                src="/images/svg/claiminfo.svg"
                alt="claim button"
                width={22}
                height={22}
              />
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
