import type { NextPage } from 'next';
import Head from 'next/head';
import Button from "../components/Button/Button";
import Image from "next/image";
import UserDetails from "../components/Mint/UserDetails/UserDetails";
import ConnectWalletButton from "../components/Mint/ConnectWalletButton/ConnectWalletButton";
import { useAccount } from "wagmi";
import MintView from "../components/Mint/MintView/MintView";
import Footer from "../components/Mint/Footer/Footer";
import React from "react";
import Link from "next/link";


const Mint: NextPage = () => {
    const {isConnected} = useAccount();

    return (
        <>
            <Head>
                <title>OAYC</title>
                <link rel="icon" href="/main/favicon.svg"/>
            </Head>
            <main className="px-5 min-100vh d-flex flex-column justify-content-between">

                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-sm-12 col-md-6 d-flex align-self-center justify-content-center justify-content-md-start mt-3">
                        <Link href={"/"}>
                            <Image className="cursor-pointer" src={"/main/favicon.svg"} width={60} height={60}
                                   alt="logo"/>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex align-self-center justify-content-center justify-content-md-end mt-3">
                        <UserDetails/>
                    </div>
                </div>


                <div className="d-flex flex-column align-self-center align-items-center mt-5">
                    {!isConnected ? <ConnectWalletButton/> : <MintView/>}
                </div>

                <div className="d-flex flex-column align-self-center align-items-center">
                    <Button
                        onClick={() => window.open("https://daemcrypto.notion.site/daemcrypto/OAYC-Guide-Preparing-for-the-mint-15f949e380964ecf8bb2be1065c00063")}
                        className="mt-5" color="red">HOW TO MINT FOR $OP</Button>
                </div>


                <Footer/>
            </main>

        </>
    );
};

export default Mint;

