import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { optimism, optimismGoerli } from "@wagmi/core/chains";
import { defaultConnector } from "../connection/connection";

const {chains, provider, webSocketProvider} = configureChains([optimismGoerli], [
    // alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
    publicProvider(),
]);

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
