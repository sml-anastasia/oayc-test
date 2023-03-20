import { useConnect } from "wagmi";
import { defaultConnector } from "../../web3/config";

export const useDefaultConnect = () => {
  return useConnect({ connector: defaultConnector });
};
