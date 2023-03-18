import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../connection/connection";
import { useMemo, useState } from "react";
import { stakingAbi } from "../../contracts";
import { BigNumber } from "ethers";
import { AddressZero } from "@ethersproject/constants";

export const useStaking = (
  stakeArgs?: unknown,
  claimPositionId?: BigNumber
) => {
  const { address, isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const dismissError = () => setIsError(false);
  const dismissSuccess = () => setIsSuccess(false);

  const stakePrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "stake",
    args: [[], [], BigNumber.from(1)],
    enabled: !!stakeArgs && isConnected,
  });

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
    enabled: isConnected,
  });

  const claimPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimReward",
    args: [claimPositionId ?? BigNumber.from(0)],
    enabled: isConnected,
  });

  const { data: positionsRaw, refetch: refetchAllPositionsInfo } =
    useContractRead({
      address: config.stakingContract,
      abi: stakingAbi,
      functionName: "getAllPositionsInfo",
      args: [address ?? AddressZero],
      enabled: isConnected,
    });

  const { data: stakeData, writeAsync: writeStake } = useContractWrite(
    stakePrepare.config
  );
  const claimAll = useContractWrite(claimAllPrepare.config);
  const claim = useContractWrite(claimPrepare.config);

  const claimAllWait = useWaitForTransaction({
    hash: claimAll.data?.hash,
  });

  const stakeWait = useWaitForTransaction({
    hash: stakeData?.hash,
    onSuccess: async () => {
      await refetchAllPositionsInfo();
    },
  });

  const claimWait = useWaitForTransaction({
    hash: claim.data?.hash,
    onSuccess: async () => {
      await refetchAllPositionsInfo();
    },
  });

  const positions = useMemo(
    () =>
      (positionsRaw ?? []).map((position) => {
        const stakedNfts = [];

        for (const i of position.arrayIdsMoayc) {
          stakedNfts.push({
            id: i.toNumber(),
            uri: `${config.moaycBaseUri}${i}.png`,
            level: 1,
          });
        }

        for (const i of position.arrayIdsOayc) {
          stakedNfts.push({
            id: i.toNumber(),
            uri: `${config.oaycBaseUri}${i}.png`,
            level: 0,
          });
        }

        return {
          ...position,
          stakedNfts,
        };
      }),
    [positionsRaw]
  );

  const stake = async () => {
    setIsLoading(true);
    await writeStake?.();
  };

  return {
    stake,
    claimWait,
    stakeWait,
    claim,
    claimAllWait,
    claimAll,
    positions,
    isSuccess,
    isError,
    isLoading,
    dismissError,
    dismissSuccess,
  };
};
