import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { oaycNftContractAbi } from "../../contracts";
import { config } from "../../connection/connection";

import { AddressZero } from "@ethersproject/constants";
import { TransactionReceipt } from "@ethersproject/abstract-provider";

export const useOaycStakingApprove = (
  onSuccess?: (data: TransactionReceipt) => void,
  onError?: (err?: Error) => void
) => {
  const { address, isConnected } = useAccount();

  const { data: isApprovedForAll, refetch: refetchIsApprovedForAll } =
    useContractRead({
      address: config.oaycContract,
      abi: oaycNftContractAbi,
      functionName: "isApprovedForAll",
      args: [address ?? AddressZero, config.stakingContract],
      enabled: isConnected,
    });

  const { config: approveConfig } = usePrepareContractWrite({
    address: config.oaycContract,
    abi: oaycNftContractAbi,
    functionName: "setApprovalForAll",
    args: [config.stakingContract, true],
    enabled: isConnected && !isApprovedForAll,
  });

  const { data: approveData, write: writeApprove } =
    useContractWrite(approveConfig);

  const { isLoading: isApproveLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    enabled: !!approveData?.hash,
    onSuccess: async (data) => {
      if (data.status === 1) {
        await refetchIsApprovedForAll();
        await onSuccess?.(data);
      } else {
        await onError?.();
      }
    },
    onError: onError,
  });

  const approve = () => writeApprove?.();

  return {
    approve,
    isApprovedForAll,
    isApproveLoading,
    refetchIsApprovedForAll,
  };
};
