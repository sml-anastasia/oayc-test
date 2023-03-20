import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { mutantContractAbi } from "../../contracts";
import { config } from "../../connection/connection";

import { AddressZero } from "@ethersproject/constants";
import { TransactionReceipt } from "@ethersproject/abstract-provider";

export const useMoaycStakingApprove = (
  onSuccess?: (data: TransactionReceipt) => void,
  onError?: (err?: Error) => void
) => {
  const { address, isConnected } = useAccount();

  const { data: isApprovedForAll, refetch: refetchIsApprovedForAll } =
    useContractRead({
      address: config.moaycContract,
      abi: mutantContractAbi,
      functionName: "isApprovedForAll",
      args: [address ?? AddressZero, config.stakingContract],
      enabled: isConnected,
    });

  const { config: approveConfig } = usePrepareContractWrite({
    address: config.moaycContract,
    abi: mutantContractAbi,
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
