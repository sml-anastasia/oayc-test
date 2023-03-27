import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import { createClient, WagmiConfig } from "wagmi";
import {
  defaultConnector,
  provider,
  webSocketProvider,
} from "../src/web3/config";
import { ThemedRouteProvider } from "../src/providers/ThemedRouteProvider";

const client = createClient({
  autoConnect: false,
  connectors: [defaultConnector],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemedRouteProvider>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ThemedRouteProvider>
  );
}

export default MyApp;
