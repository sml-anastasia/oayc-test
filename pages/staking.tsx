import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../src/components/common/layout/TopBar";
import { useDefaultConnect } from "../src/hooks/web3/useDefaultConnect";
import useEagerConnect from "../src/hooks/web3/useEagerConnect";
import useChangeNetwork from "../src/hooks/web3/useChangeNetwork";
import Image from "next/image";
import { useAccount } from "wagmi";
import { StakeMode } from "../src/web3/types/Staking";
import { useStakingStatus } from "../src/hooks/contract/staking/useStakingStatus";
import { StakedNfts } from "../src/components/Staking/StakedNfts";
import { AddToStaking } from "../src/components/Staking/AddToStaking";
import OaycButton from "../src/components/common/buttons/OaycButton";
import { device } from "../src/styles/device";

const Container = styled.div`
  position: relative;
  background: #f0ebdf;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  font-family: "Rubik", serif;
`;

const StyledStakingContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-style: italic;
  font-weight: 700;
  font-size: 160px;
  line-height: 90%;

  margin-top: 10px;

  max-width: 1260px;
  padding: 0 30px;
  width: 100%;
  z-index: 1;

  @media screen and ${device.tablet} {
    margin: 145px auto 0 auto;
  }
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 120px;
  }

  @media (max-width: 768px) {
    font-size: 90px;
  }

  @media (max-width: 480px) {
    font-size: 80px;
    align-items: center;
    margin: 0 20px;
  }

  @media (max-width: 375px) {
    font-size: 80px;
    align-items: center;
    margin: 0 10px;
  }
`;

const SharedTextStyles = styled.div`
  @media (max-width: 960px) {
    height: 130px;
  }

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 80px;
  }

  @media (max-width: 375px) {
    height: 70px;
  }
`;

const StyledText = styled(SharedTextStyles)`
  color: #ff0420;
`;

const StyledText2 = styled(SharedTextStyles)`
  -webkit-text-stroke: 3px rgba(245, 152, 154, 1);
  color: transparent;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 300px;
  gap: 20px;

  @media screen and ${device.tablet} {
    display: flex;
    justify-content: flex-start;

    margin-top: 20px;
    width: 100%;
    gap: 30px;
    height: 80px;
  }
`;

const StyledOAYCText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 160px;
  padding-bottom: 170px;

  @media (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledSignMobile = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    width: 440px;
    height: 190px;
    margin: 20px auto;
    background: url("/images/svg/small_oayc_sign.svg") no-repeat center center;
    background-size: contain;
  }

  @media (max-width: 375px) {
    margin: 20px auto;
    width: 375px;
  }
`;

const StyledApe = styled.div`
  position: absolute;
  right: 0;
  top: 250px;

  width: 300px;
  height: 300px;

  @media screen and ${device.tablet} {
    width: 384px;
    height: 520px;
  }
`;

const StyledSignContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledStakingButton = styled(OaycButton)`
  width: 237px;
  margin-top: 20px;
  height: 60px;

  @media (max-width: 480px) {
    width: 400px;
    margin: 20px 10px;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin: 20px 10px;
  }
`;

const Staking: NextPage = () => {
  useEagerConnect();
  useChangeNetwork();
  const { connect } = useDefaultConnect();
  const { isConnected } = useAccount();

  const [stakeMode, setStakeMode] = useState<StakeMode>("none");
  const handleOpenStaking = () => setStakeMode("stake");
  const handleClose = () => setStakeMode("none");
  const { isStarted } = useStakingStatus();

  return (
    <>
      <Head>
        <title>STAKING</title>
        <link rel="icon" href="/main/favicons/red.svg" />
      </Head>
      <Container>
        <TopBar logoUrl="/main/favicons/red.svg" socials={true} />

        <StyledStakingContainer>
          <StyledHead>
            <StyledText>Stake</StyledText>
            <StyledText2>or lock</StyledText2>
          </StyledHead>
          {!isConnected && (
            <StyledButtons>
              <StyledStakingButton onClick={() => connect()}>
                Connect Wallet
              </StyledStakingButton>
              <StyledStakingButton>
                <span>Rules and conditions</span>
                <Image
                  src="/images/svg/read_conditions.svg"
                  alt="Rules and Conditions"
                  width={41}
                  height={41}
                />
              </StyledStakingButton>
            </StyledButtons>
          )}
          {isConnected && isStarted && (
            <StyledButtons>
              <StyledStakingButton onClick={handleOpenStaking}>
                Add Nft
              </StyledStakingButton>
            </StyledButtons>
          )}
        </StyledStakingContainer>

        <StyledSignContainer>
          <StyledOAYCText>
            <Image
              src="/images/oayc_sign.svg"
              alt="oayc sign"
              width="1600px"
              height="300px"
            />
          </StyledOAYCText>
          <StyledSignMobile />
        </StyledSignContainer>

        <StyledApe>
          <Image src="/images/oayc_bg.png" width={384} height={520} alt={""} />
        </StyledApe>

        <StakedNfts />
      </Container>
      {stakeMode !== "none" && (
        // TODO: create proper modal
        <AddToStaking onClose={handleClose} isOpen={true} />
      )}
    </>
  );
};

export default Staking;
