import { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import React from "react";
import ArrowsButton from "../components/Button/ArrowsButton";
import styled from "styled-components";
import TopBar from "../components/Mutant/TopBar";
import Footer from "../components/Mutant/Footer";
import { useDefaultConnect } from "../hooks/useDefaultConnect";
import MutationWindow from "../components/Mutant/MutationWindow";
import useEagerConnect from "../hooks/useEagerConnect";
import useChangeNetwork from "../hooks/useChangeNetwork";
import Placeholder from "../components/Mutant/Placeholder";

const Container = styled.div`
  background: #1E1E1E;
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

    // useEagerConnect();
    // useChangeNetwork();
    // const {isConnected} = useAccount();
    // const {connect} = useDefaultConnect();

    return (
        <>
            <Head>
                <title>MOAYC</title>
                <link rel="icon" href="/main/favicons/green.svg"/>
            </Head>
            <Container>
                <TopBar/>
                <ContentContainer>

                    <Placeholder/>
                    {/*{!isConnected ?*/}
                    {/*    <ArrowsButton onClick={() => connect()}>Connect Wallet</ArrowsButton> :*/}
                    {/*    <MutationWindow/>*/}
                    {/*}*/}
                </ContentContainer>
                <Footer/>
            </Container>
        </>
    );
};


export default Moayc;