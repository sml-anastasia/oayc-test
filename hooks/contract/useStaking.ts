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

// const getOaycNfts = {
//   address: config.stakingContract,
//   abi: stakingAbi,
//   functionName: "tokenOfOwnerByIndex",
// };

export const useStaking = () => {
  const { address } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const stakePrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "stake",
    args: [[], [], 0],
  });

  const claimAllPrepare = usePrepareContractWrite({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "claimAllRewards",
  });

  const readPositions = useContractRead({
    address: config.stakingContract,
    abi: stakingAbi,
    functionName: "getAllPositionsInfo",
    args: [address],
    watch: true,
  });

  const stake = useContractWrite(stakePrepare.config);
  const claimAll = useContractWrite(claimAllPrepare.config);

  const {} = useWaitForTransaction({
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

  const {} = useWaitForTransaction({
    hash: stake.data?.hash,
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
    claimAll,
    staked,
    isSuccess,
    isError,
    setIsSuccess,
    setIsError,
  };
};
