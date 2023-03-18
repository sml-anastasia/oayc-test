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

export const useStaking = ({
  depositArgs,
  claimPositionId,
}: {
  depositArgs?: [BigNumber[], BigNumber[], BigNumber];
  claimPositionId?: BigNumber;
}) => {
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
    args: depositArgs,
    enabled: !!depositArgs && isConnected,
  });

  const lockPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "lock",
    args: depositArgs,
    enabled: !!depositArgs && isConnected,
  });

  const claimPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimReward",
    args: [claimPositionId ?? BigNumber.from(0)],
    enabled: isConnected,
  });

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
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

  const stakeWrite = useContractWrite({
    ...stakePrepare.config,
    onMutate() {
      setIsLoading(true);
    },
    onError(error) {
      /* eslint-disable-next-line */
      // @ts-ignore
      if (error.code !== "ACTION_REJECTED") {
        setIsError(true);
      }

      setIsLoading(false);
    },
  });

  const lockWrite = useContractWrite({
    ...lockPrepare.config,
    onMutate() {
      setIsLoading(true);
    },
    onError() {
      /* eslint-disable-next-line */
      // @ts-ignore
      if (error.code !== "ACTION_REJECTED") {
        setIsError(true);
      }

      setIsLoading(false);
    },
  });
  const claim = useContractWrite(claimPrepare.config);
  const claimAll = useContractWrite(claimAllPrepare.config);

  const lockWait = useWaitForTransaction({
    hash: lockWrite.data?.hash,
    onSuccess: async () => {
      await refetchAllPositionsInfo();
    },
    onError() {
      setIsLoading(false);
      setIsError(true);
    },
  });

  const stakeWait = useWaitForTransaction({
    hash: stakeWrite.data?.hash,
    onSuccess: async () => {
      await refetchAllPositionsInfo();
    },
    onError() {
      setIsLoading(false);
      setIsError(true);
    },
  });

  const claimWait = useWaitForTransaction({
    hash: claim.data?.hash,
    onSuccess: () => {
      setIsSuccess(true);
      refetchAllPositionsInfo();
    },
    onSettled() {
      setIsLoading(false);
    },
    onError() {
      setIsError(true);
    },
  });

  const claimAllWait = useWaitForTransaction({
    hash: claimAll.data?.hash,
    onError() {
      setIsLoading(false);
      setIsError(true);
    },
  });

  const positions = useMemo(
    () =>
      (positionsRaw ?? []).map((position) => {
        const stakedNfts = [];

        for (const i of position.arrayIdsOayc) {
          stakedNfts.push({
            id: i.toNumber(),
            uri: `${config.oaycBaseUri}${i}.png`,
            level: 0,
          });
        }

        for (const i of position.arrayIdsMoayc) {
          stakedNfts.push({
            id: i.toNumber(),
            uri: `${config.moaycBaseUri}${i}.png`,
            level: 1,
          });
        }

        return {
          ...position,
          stakedNfts,
        };
      }),
    [positionsRaw]
  );

  return {
    stake: stakeWrite.write,
    lock: lockWrite.write,
    claimWait,
    stakeWait,
    lockWait,
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
