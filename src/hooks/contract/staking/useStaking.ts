import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { useEffect, useMemo, useState } from "react";
import { stakingAbi } from "../../../web3/contracts";
import { BigNumber } from "ethers";
import { useOaycStakingApprove } from "../oayc-mint/useOaycStakingApprove";
import { useMoaycStakingApprove } from "../moayc-mint/useMoaycStakingApprove";
import { usePositions } from "./usePositions";
import { useOaycNftsOfAddress } from "../util/useOaycNftsOfAddress";
import { useMoaycNftsOfAddress } from "../util/useMoaycNftsOfAddress";
import { AddressZero } from "@ethersproject/constants";
import { NftInfo } from "../../../web3/types/NFT";
import { useStakingStatus } from "./useStakingStatus";

export enum DepositType {
  staking,
  lock,
}

export const useStaking = (
  depositType: DepositType,
  depositArgs?: [BigNumber[], BigNumber[], BigNumber],
  onStakeSuccess?: () => void,
  onLockSuccess?: () => void
) => {
  const { address = AddressZero, isConnected } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { oaycNfts } = useOaycNftsOfAddress(address, isConnected);
  const { moaycNfts } = useMoaycNftsOfAddress(address, isConnected);
  const { positions, refetchAllPositionsInfo } = usePositions();

  const { isStarted } = useStakingStatus();

  const setErrorState = () => setIsError(true);
  const dismissError = () => setIsError(false);
  const dismissSuccess = () => setIsSuccess(false);

  const oaycApprove = useOaycStakingApprove();
  const moaycApprove = useMoaycStakingApprove();

  const availableForStaking = useMemo(() => {
    const nfts = [...oaycNfts, ...moaycNfts];
    const stakedNfts = positions.reduce<NftInfo[]>((all, position) => {
      all.push(...position.stakedNfts);
      return all;
    }, []);
    return nfts.filter(({ id, level }) => {
      return !stakedNfts.find((stakedNft) => {
        return stakedNft.id === id && stakedNft.level === level;
      });
    });
  }, [moaycNfts, oaycNfts, positions]);

  const stakePrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "stake",
    args: depositArgs,
    enabled:
      !!depositArgs && depositType === DepositType.staking && isConnected,
  });

  const lockPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "lock",
    args: depositArgs,
    enabled: !!depositArgs && depositType === DepositType.lock && isConnected,
  });

  const stakeWrite = useContractWrite({
    ...stakePrepare.config,
    onError: setErrorState,
  });

  const lockWrite = useContractWrite({
    ...lockPrepare.config,
    onError: setErrorState,
  });

  const lockWait = useWaitForTransaction({
    hash: lockWrite.data?.hash,
    onSuccess: async () => {
      setIsSuccess(true);
      onLockSuccess?.();
      await refetchAllPositionsInfo();
    },
    onError: setErrorState,
  });

  const stakeWait = useWaitForTransaction({
    hash: stakeWrite.data?.hash,
    onSuccess: async () => {
      setIsSuccess(true);
      onStakeSuccess?.();
      await refetchAllPositionsInfo();
    },
    onError: setErrorState,
  });

  const setApprovalForAll = async () => {
    oaycApprove.approve();
    moaycApprove.approve();
  };

  const isLoading = stakeWait.isLoading || lockWait.isLoading;

  const isApproveNeeded =
    !oaycApprove.isApprovedForAll || !moaycApprove.isApprovedForAll;

  useEffect(() => {
    stakePrepare.refetch();
    lockPrepare.refetch();
  }, [isApproveNeeded]);

  const stake = () => stakeWrite.write?.();
  const lock = () => lockWrite.write?.();

  const lockOrStake = () => {
    if (depositType === DepositType.staking) {
      stake();
    } else if (depositType === DepositType.lock) {
      lock();
    }
  };

  return {
    stake,
    lock,
    lockOrStake,
    stakeWait,
    positions,
    availableForStaking,
    setApprovalForAll,
    lockWait,
    isStarted,
    isSuccess,
    isError,
    isLoading,
    isApproveNeeded,
    dismissError,
    dismissSuccess,
  };
};
