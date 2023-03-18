import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { StakingButton } from "../components/Button/StakingButton";
import styled from "styled-components";
import TopBar from "../components/Mutant/TopBar";
import { useDefaultConnect } from "../hooks/web3/useDefaultConnect";
import useEagerConnect from "../hooks/web3/useEagerConnect";
import useChangeNetwork from "../hooks/web3/useChangeNetwork";
import Image from "next/image";
import { useAccount } from "wagmi";
import { ManageNFTModal } from "../components/Staking/step-modals/ManageNFTModal";
import { Positions } from "../components/Staking/Positions/Positions";
import { StakeMode } from "../types/Staking";

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

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: start;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
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

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: flex-start;
  flex-direction: row;
  text-transform: uppercase;
`;

const StyledOAYCText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 160px;
  padding-bottom: 170px;
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
  const { isConnected } = useAccount();

  const [stakeMode, setStakeMode] = useState<StakeMode>("none");
  const handleOpenWithdraw = () => setStakeMode("widthraw");
  const handleOpenStaking = () => setStakeMode("stake");
  const handleClose = () => setStakeMode("none");

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
                <StakingButton onClick={() => connect()}>
                  Connect Wallet
                </StakingButton>
                <StakingButton>
                  <span>Rules and conditions</span>
                  <Image
                    src="/images/svg/read_conditions.svg"
                    alt="Rules and Conditions"
                    width={41}
                    height={41}
                  />
                </StakingButton>
              </StyledButtons>
            )}
            {isConnected && (
              <StyledButtons>
                <StakingButton onClick={handleOpenStaking}>
                  Add Nft
                </StakingButton>
                <StakingButton onClick={handleOpenWithdraw}>
                  Withdraw
                </StakingButton>
              </StyledButtons>
            )}
          </StyledStakingContainer>
          <Positions />
        </ContentContainer>
        <StyledOAYCText>
          <Image
            src="/images/oayc_sign.svg"
            alt="oayc sign"
            width="1600px"
            height="300px"
          />
        </StyledOAYCText>
        <StyledApe>
          <Image src="/images/oayc_bg.png" width={384} height={520} alt={""} />
        </StyledApe>
      </Container>

      <ManageNFTModal
        mode={stakeMode}
        isOpen={stakeMode !== "none"}
        onClose={handleClose}
      />
    </>
  );
};

export default Staking;
