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
import { NftInfo } from "../../types/NFT";
import { useOaycStakingApprove } from "./useOaycStakingApprove";
import { useMoaycStakingApprove } from "./useMoaycStakingApprove";

const contractConfig = {
  address: config.stakingContract,
  abi: stakingAbi,
};

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

  const oaycApprove = useOaycStakingApprove();
  const moaycApprove = useMoaycStakingApprove();

  const stakePrepare = usePrepareContractWrite({
    ...contractConfig,
    functionName: "stake",
    args: depositArgs,
    enabled: !!depositArgs && isConnected,
  });

  const lockPrepare = usePrepareContractWrite({
    ...contractConfig,
    functionName: "lock",
    args: depositArgs,
    enabled: !!depositArgs && isConnected,
  });

  const claimPrepare = usePrepareContractWrite({
    ...contractConfig,
    functionName: "claimReward",
    args: [claimPositionId ?? BigNumber.from(0)],
    enabled: isConnected,
  });

  const claimAllPrepare = usePrepareContractWrite({
    ...contractConfig,
    functionName: "claimAllRewards",
    enabled: isConnected,
  });

  const { data: isStarted } = useContractRead({
    ...contractConfig,
    functionName: "isStarted",
    enabled: isConnected,
  });

  const { data: positionsRaw, refetch: refetchAllPositionsInfo } =
    useContractRead({
      ...contractConfig,
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
    onError(error) {
      /* eslint-disable-next-line */
      // @ts-ignore
      if (error.code !== "ACTION_REJECTED") {
        setIsError(true);
      }

      setIsLoading(false);
    },
  });
  const claim = useContractWrite({
    ...claimPrepare.config,
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
  const claimAll = useContractWrite({
    ...claimAllPrepare.config,
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

  const lockWait = useWaitForTransaction({
    hash: lockWrite.data?.hash,
    onSettled() {
      setIsLoading(false);
    },
    onSuccess() {
      setIsSuccess(true);
      refetchAllPositionsInfo();
    },
    onError() {
      setIsError(true);
    },
  });

  const stakeWait = useWaitForTransaction({
    hash: stakeWrite.data?.hash,
    onSettled() {
      setIsLoading(false);
    },
    onSuccess() {
      setIsSuccess(true);
      refetchAllPositionsInfo();
    },
    onError() {
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

  const positions = useMemo(
    () =>
      (positionsRaw ?? []).map((position) => {
        const stakedNfts: NftInfo[] = [];

        for (const i of position.arrayIdsOayc) {
          const id = i.toString();

          id !== "0" &&
            stakedNfts.push({
              id: i.toString(),
              uri: `${config.oaycBaseUri}${i}.png`,
              level: 0,
            });
        }

        for (const i of position.arrayIdsMoayc) {
          const id = i.toString();

          id !== "0" &&
            stakedNfts.push({
              id: i.toString(),
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

  function approve() {
    oaycApprove.approve();
    moaycApprove.approve();
  }

  // console.log(positions, claimPositionId);

  return {
    stake: stakeWrite.write,
    lock: lockWrite.write,
    stakeWait,
    approve,
    claimWait,
    lockWait,
    claimAllWait,
    isStarted,
    claim,
    claimAll,
    positions,
    isSuccess,
    isError,
    isLoading,
    isApproveNeeded:
      !oaycApprove.isApprovedForAll || !moaycApprove.isApprovedForAll,
    dismissError,
    dismissSuccess,
  };
};
