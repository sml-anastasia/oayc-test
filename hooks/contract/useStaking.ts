import {
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../connection/connection";
import { useState } from "react";
import { stakingAbi } from "../../contracts";
import { NftMutate } from "../../types/NFT";
import { StakingPosition } from "../../types/Staking";
import { BigNumber } from "ethers";

// const getOaycNfts = {
//   address: config.stakingContract,
//   abi: stakingAbi,
//   functionName: "tokenOfOwnerByIndex",
// };

export const useStaking = (stakeArgs?: any, claimPositionId?: BigNumber) => {
  const { address } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const stakePrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "stake",
    args: stakeArgs || [[], [], 0],
  });

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
  });

  const claimPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimReward",
    args: [claimPositionId],
  });

  console.log(claimPositionId?.toString());

  const readPositions = useContractRead({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "getAllPositionsInfo",
    args: [address],
    select: (data: any) => {
      return data;
    },
  });

  const stake = useContractWrite(stakePrepare.config);
  const claimAll = useContractWrite(claimAllPrepare.config);
  const claim = useContractWrite(claimPrepare.config);

  const claimAllWait = useWaitForTransaction({
    hash: claimAll.data?.hash,
    onSuccess: async () => {
      // await refetchContractWrite();
      // approveReset();
      alert("sucss");
    },
    onError: async () => {
      // await refetchContractWrite();
      // approveReset();
      alert("erorr");
    },
  });

  const stakeWait = useWaitForTransaction({
    hash: stake.data?.hash,
    onSuccess: async () => {
      // await refetchContractWrite();
      // approveReset();
      readPositions.refetch();
      alert("sucss");
    },
    onError: async () => {
      // await refetchContractWrite();
      // approveReset();
      alert("erorr");
    },
  });

  const claimWait = useWaitForTransaction({
    hash: claim.data?.hash,
    onSuccess: async () => {
      // await refetchContractWrite();
      // approveReset();
      readPositions.refetch();
      alert("sucss");
    },
    onError: async () => {
      // await refetchContractWrite();
      // approveReset();
      alert("erorr");
    },
  });

  const staked = readPositions.data?.reduce(
    (total, { arrayIdsOayc }) => [
      ...total,
      ...arrayIdsOayc.map((id) => id.toString()),
    ],
    []
  );

  return {
    positions: {
      ...readPositions,
      data: readPositions.data as StakingPosition[],
    },
    stake,
    claimWait,
    stakeWait,
    claim,
    claimAllWait,
    claimAll,
    staked,
    isSuccess,
    isError,
    setIsSuccess,
    setIsError,
  };
};
