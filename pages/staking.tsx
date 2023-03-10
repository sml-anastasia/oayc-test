import { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import React from "react";
import StakingRedButton from "../components/Button/StakingRedButton";
import StakingWhiteButton from "../components/Button/StakingWhiteButton";
import styled from "styled-components";
import TopBar from "../components/Mutant/TopBar";
import { useDefaultConnect } from "../hooks/web3/useDefaultConnect";
import useEagerConnect from "../hooks/web3/useEagerConnect";
import useChangeNetwork from "../hooks/web3/useChangeNetwork";
import MutationWindow from "../components/Mutant/MutationWindow";
import { device } from "../styles/device";

const Container = styled.div`
  background: #f0ebdf;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: transparent;
  background-image: url("/images/oayc_bg.png");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 30% 80%;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
`;

const StyledHero = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  font-family: "Rubik";
  font-style: italic;
  font-weight: 700;
  font-size: 160px;
  line-height: 90%;
  gap: 20px;
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

const Staking: NextPage = () => {
  useEagerConnect();
  useChangeNetwork();
  const { isConnected } = useAccount();
  const { connect } = useDefaultConnect();
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
          <StyledHero>
            <StyledHead>
              <StyledText>Stake</StyledText>
              <StyledText2>or lock</StyledText2>
            </StyledHead>
            <StyledButtons>
              <StakingRedButton onClick={() => connect()}>
                Connect Wallet
              </StakingRedButton>
              <StakingWhiteButton>
                <StyledIcon>
                  <StyledText4>Rules and conditions</StyledText4>
                  <img
                    src="/images/svg/read_conditions.svg"
                    alt="Rules and Conditions"
                    width="41px"
                    height="41px"
                  />
                </StyledIcon>
              </StakingWhiteButton>
            </StyledButtons>
          </StyledHero>
        </ContentContainer>
        <ContentContainer></ContentContainer>
      </Container>
    </>
  );
};

export default Staking;
