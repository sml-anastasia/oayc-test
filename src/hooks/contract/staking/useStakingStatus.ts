import { useAccount, useContractRead } from "wagmi";
import { config } from "../../../web3/config";
import { stakingAbi } from "../../../web3/contracts";

export const useStakingStatus = () => {
  const { isConnected } = useAccount();
  const { data: isStarted = false } = useContractRead({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "isStarted",
    enabled: isConnected,
  });

  return {
    isStarted,
  };
};
