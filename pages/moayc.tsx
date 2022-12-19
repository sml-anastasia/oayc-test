import { NextPage } from "next";
import { useAccount } from "wagmi";
import Head from "next/head";
import React from "react";

const Moayc: NextPage = () => {
    const {isConnected} = useAccount();
    return <>

        <Head>
            <title>MOAYC</title>
            <link rel="icon" href="/main/favicon.svg"/>
        </Head>
    </>;
};


export default Moayc;