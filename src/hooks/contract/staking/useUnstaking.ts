import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { useState } from "react";
import { stakingAbi } from "../../../web3/contracts";
import { BigNumber } from "ethers";
import { usePositions } from "./usePositions";

export const useUnstaking = (claimPositionId?: BigNumber) => {
  const { isConnected } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const setErrorState = () => setIsError(true);
  const dismissError = () => setIsError(false);
  const dismissSuccess = () => setIsSuccess(false);

  const { positions, refetchAllPositionsInfo } = usePositions();

  const claimPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimReward",
    args: [claimPositionId ?? BigNumber.from(0)],
    enabled: !!claimPositionId && isConnected,
  });

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
    enabled: isConnected,
  });

  const claimWrite = useContractWrite({
    ...claimPrepare.config,
    onError: setErrorState,
  });

  const claimAllWrite = useContractWrite({
    ...claimAllPrepare.config,
    onError: setErrorState,
  });

  const claimWait = useWaitForTransaction({
    hash: claimWrite.data?.hash,
    onSuccess: async () => {
      setIsSuccess(true);
      await refetchAllPositionsInfo();
    },
    onError: setErrorState,
  });

  const claimAllWait = useWaitForTransaction({
    hash: claimAllWrite.data?.hash,
    onSuccess: async () => {
      setIsSuccess(true);
      await refetchAllPositionsInfo();
    },
    onError: setErrorState,
  });

  const isLoading = claimWait.isLoading || claimAllWait.isLoading;

  const claim = () => claimWrite.write?.();

  const claimAll = () => claimAllWrite.write?.();

  return {
    claimWait,
    claimAllWait,
    claim,
    claimAll,
    positions,
    isSuccess,
    isError,
    isLoading,
    dismissError,
    dismissSuccess,
  };
};
