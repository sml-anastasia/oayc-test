import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StakingRedButton from "../components/Button/StakingRedButton";
import StakingWhiteButton from "../components/Button/StakingWhiteButton";
import styled from "styled-components";
import TopBar from "../components/Mutant/TopBar";
import { useDefaultConnect } from "../hooks/web3/useDefaultConnect";
import useEagerConnect from "../hooks/web3/useEagerConnect";
import useChangeNetwork from "../hooks/web3/useChangeNetwork";
import Image from "next/image";
import { useAccount } from "wagmi";

const Container = styled.div`
  position: relative;
  background: #f0ebdf;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: transparent;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: start;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  z-index: 1;
`;

const StyledStakingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;
  font-size: 160px;
  line-height: 90%;
  gap: 20px;
  margin-top: 145px;
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-transform: uppercase;
`;

const StyledText = styled.div`
  color: #ff0420;
`;

const StyledText2 = styled.div`
  -webkit-text-stroke: 3px rgba(245, 152, 154, 1);
  color: transparent;
`;

const StyledText4 = styled.div`
  width: 200px;
  padding: 0;
  margin: 0;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: flex-start;
  flex-direction: row;
  text-transform: uppercase;
`;

const StyledIcon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 10px;
`;

const StyledOAYCText = styled.div`
  position: absolute;
  bottom: calc(0px - 6vw);
  width: 100%;
  aspect-ratio: 1492/249;
  max-height: 249px;

  @media screen and (min-width: 1492px) {
    bottom: -89px;
  }
`;

const StyledApe = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  width: 384px;
  height: 520px;
`;

const Staking: NextPage = () => {
  useEagerConnect();
  useChangeNetwork();
  const { connect } = useDefaultConnect();
  const { address, isConnected } = useAccount();
  return (
    <>
      <Head>
        <title>STAKING</title>
        <link rel="icon" href="/main/favicons/red.svg" />
      </Head>
      <Container>
        <TopBar
          logoUrl="/main/favicons/red.svg"
          socials={true}
          pageType="staking"
        />
        <ContentContainer>
          <StyledStakingContainer>
            <StyledHead>
              <StyledText>Stake</StyledText>
              <StyledText2>or lock</StyledText2>
            </StyledHead>
            {!isConnected && (
              <StyledButtons>
                <StakingRedButton onClick={() => connect()}>
                  Connect Wallet
                </StakingRedButton>
                <StakingWhiteButton>
                  <StyledIcon>
                    <StyledText4>Rules and conditions</StyledText4>
                    <Image
                      src="/images/svg/read_conditions.svg"
                      alt="Rules and Conditions"
                      width={41}
                      height={41}
                    />
                  </StyledIcon>
                </StakingWhiteButton>
              </StyledButtons>
            )}
            {isConnected && (
              <StyledButtons>
                <StakingRedButton onClick={() => connect()}>
                  Add Nft
                </StakingRedButton>
                <StakingWhiteButton>Withdraw</StakingWhiteButton>
              </StyledButtons>
            )}
          </StyledStakingContainer>
        </ContentContainer>
        <StyledOAYCText>
          <Image src="/images/oayc_sign.svg" alt="oayc sign" layout="fill" />
        </StyledOAYCText>
        <StyledApe>
          <Image src="/images/oayc_bg.png" width={384} height={520} alt={""} />
        </StyledApe>
      </Container>
    </>
  );
};

export default Staking;
