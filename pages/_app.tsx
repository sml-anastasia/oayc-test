import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { createClient, WagmiConfig } from "wagmi";
import { defaultConnector, provider, webSocketProvider } from "../connection/connection";


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
