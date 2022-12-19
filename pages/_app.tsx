import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { optimism } from "@wagmi/core/chains";
import { defaultConnector } from "../connection/connection";
import { alchemyProvider } from "wagmi/providers/alchemy";

const {chains, provider, webSocketProvider} = configureChains(
    [optimism],
    [
        alchemyProvider({apiKey: 'Kdb9I1fanjK6qJPSCUaGCa4KH9XOv3xP'}),
        publicProvider(),
    ]
);

const client = createClient(
    {
        autoConnect: false,
        connectors: [defaultConnector],
        provider,
        webSocketProvider
    });

function MyApp({Component, pageProps}: AppProps) {
    return (
        <WagmiConfig client={client}>
            <Component {...pageProps} />
        </WagmiConfig>
    );
}

export default MyApp;
