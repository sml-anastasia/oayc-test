import { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import React from "react";
import ArrowsButton from "../components/Button/ArrowsButton";
import styled from "styled-components";
import TopBar from "../components/Mutant/TopBar";
import Footer from "../components/Mutant/Footer";
import { useDefaultConnect } from "../hooks/web3/useDefaultConnect";
import useEagerConnect from "../hooks/web3/useEagerConnect";
import useChangeNetwork from "../hooks/web3/useChangeNetwork";
import MutationWindow from "../components/Mutant/MutationWindow";

const Container = styled.div`
  background: #1e1e1e;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #77b102;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
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
        <TopBar logoUrl="/main/favicons/red.svg" socials={true} />
        <ContentContainer>
          {!isConnected ? (
            <ArrowsButton onClick={() => connect()}>
              Connect Wallet
            </ArrowsButton>
          ) : (
            <MutationWindow />
          )}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Staking;
