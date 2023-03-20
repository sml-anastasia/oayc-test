import { useNetwork, useSwitchNetwork } from "wagmi";
import { useEffect } from "react";
import { chains } from "../../web3/config";

const useChangeNetwork = () => {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (chain?.id !== chains[0].id) {
      switchNetwork?.(chains[0].id);
    }
  }, [chain, switchNetwork]);
};

export default useChangeNetwork;
