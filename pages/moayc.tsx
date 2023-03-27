import { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import React from "react";
import ArrowsButton from "../src/components/common/buttons/ArrowsButton";
import styled from "styled-components";
import TopBar from "../src/components/common/layout/TopBar";
import Footer from "../src/components/Mutant/Footer";
import { useDefaultConnect } from "../src/hooks/web3/useDefaultConnect";
import useEagerConnect from "../src/hooks/web3/useEagerConnect";
import useChangeNetwork from "../src/hooks/web3/useChangeNetwork";
import MutationWindow from "../src/components/Mutant/MutationWindow";

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

const Moayc: NextPage = () => {
  useEagerConnect();
  useChangeNetwork();
  const { isConnected } = useAccount();
  const { connect } = useDefaultConnect();
  return (
    <>
      <Head>
        <title>MOAYC</title>
        <link rel="icon" href="/main/favicons/green.svg" />
      </Head>
      <Container>
        <TopBar logoUrl="/main/favicons/green.svg" displayText="MOAYC" />
        <ContentContainer>
          {!isConnected ? (
            <ArrowsButton onClick={() => connect()}>
              Connect Wallet
            </ArrowsButton>
          ) : (
            <MutationWindow />
          )}
        </ContentContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Moayc;
