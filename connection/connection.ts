import { InjectedConnector } from "@wagmi/core";
import { Address, Chain, configureChains } from "wagmi";
import { optimism, polygonMumbai } from "@wagmi/core/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const defaultConnector = new InjectedConnector();

interface Config {
  defaultChain: Chain;
  goldenBananaContract: Address;
  silverBananaContract: Address;
  tokenContract: Address;
  moaycContract: Address;
  oaycContract: Address;
  mutagen1Contract: Address;
  mutagen2Contract: Address;
  mutagen3Contract: Address;
  stakingContract: Address;
  apiKey: string;
  oaycBaseUri: string;
  moaycBaseUri: string;
}

const DEV_CONFIG: Config = {
  defaultChain: polygonMumbai,
  goldenBananaContract: "0xA4921a23AF154eDd14926a9F50e74cd2A1EFF0C4",
  silverBananaContract: "0xA89EcbF1a89A9B6501F3651e2725fDc46C6AF20c",
  tokenContract: "0x984Cb843ff6d2FD1a93C54989A9C6320361526cE",
  moaycContract: "0x5b701C95cdCDeaFefC672571437BE17f395E2300",
  oaycContract: "0x68559eE6959BCD646b00741ac52C5BAFfD0f2CED",
  mutagen1Contract: "0xB1c9acFB939E746E6c7E17AbD23109ADf99ef602",
  mutagen2Contract: "0x34297C67bAdf235fB9bf95a27d8da51BC826b2C9",
  mutagen3Contract: "0x2AA79C491b13715932201301efFCb627878621a2",
  stakingContract: "0xC6Db8e8D84B18af7e7df44e6C389a3272dC74966",
  apiKey: "uT747kUZYmny3_vJDtaxPjtzlMPHLn7W",

  oaycBaseUri: "https://oayc.io:3000/",
  moaycBaseUri: "https://oayc.io:3001/",
};

const PROD_CONFIG: Config = {
  defaultChain: optimism,
  goldenBananaContract: "0xA4921a23AF154eDd14926a9F50e74cd2A1EFF0C4",
  silverBananaContract: "0xA89EcbF1a89A9B6501F3651e2725fDc46C6AF20c",
  tokenContract: "0x4200000000000000000000000000000000000042",
  moaycContract: "0x1Ff8382E43F5Cb5064044C2833CA4f1070Da5d51",
  oaycContract: "0x0deaAc29d8A3d4EbBAAa3eCd3cC97C9deF00f720",
  mutagen1Contract: "0xa2350dbc3dab591e1fb5ba7dc9ae4a587c80e575",
  mutagen2Contract: "0x19287b85b215c043974860361f8559a3ce1c3543",
  mutagen3Contract: "0xf68f8d089f2a1efe2395aca82288753dc2cea8a4",
  stakingContract: "0x",
  apiKey: "Kdb9I1fanjK6qJPSCUaGCa4KH9XOv3xP",

  oaycBaseUri: "https://oayc.io:3000/",
  moaycBaseUri: "https://oayc.io:3001/",
};

const getConfig = (): Config => {
  switch (process.env.NODE_ENV) {
    case "development":
      return DEV_CONFIG;
    case "production":
      return PROD_CONFIG;
    case "test":
      return DEV_CONFIG;
    default:
      return DEV_CONFIG;
  }
};
export const config = getConfig();

export const { chains, provider, webSocketProvider } = configureChains(
  [config.defaultChain],
  [alchemyProvider({ apiKey: config.apiKey }), publicProvider()]
);
