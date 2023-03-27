import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { useState } from "react";
import { stakingAbi } from "../../../web3/contracts";
import { usePositions } from "./usePositions";

export const useUnstaking = () => {
  const { isConnected } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const setErrorState = () => setIsError(true);
  const dismissError = () => setIsError(false);
  const dismissSuccess = () => setIsSuccess(false);

  const {
    positions,
    lockedPositions,
    stakedPositions,
    refetchAllPositionsInfo,
  } = usePositions();

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
    enabled: isConnected,
  });

  const claimWrite = useContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimReward",
    mode: "recklesslyUnprepared",
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

  const claimAll = () => claimAllWrite.write?.();

  return {
    claimWait,
    claimAllWait,
    claim: claimWrite.write,
    claimAll,
    positions,
    lockedPositions,
    stakedPositions,
    isSuccess,
    isError,
    isLoading,
    dismissError,
    dismissSuccess,
  };
};
