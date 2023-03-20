import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { BigNumber, ethers } from "ethers";
import {
  mutantContractAbi,
  simpleTokenContractAbi,
} from "../../../web3/contracts";

export const useMoaycPublicMint = (
  price: number,
  amount: number,
  enable: boolean
) => {
  const { address } = useAccount();

  const { config: approveConfig, isSuccess: canPublicApprove } =
    usePrepareContractWrite({
      address: config.tokenContract,
      abi: simpleTokenContractAbi,
      functionName: "approve",
      args: [
        config.moaycContract,
        ethers.utils.parseEther(price.toString()).mul(amount),
      ],
      enabled: amount > 0 && enable,
    });

  const { data: publicMints, refetch: updateSaleInfo } = useContractRead({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "publicMints",
    args: address && [address],
    staleTime: 10000,
  });

  const {
    write: approvePublicOp,
    data: approveData,
    reset: approveReset,
  } = useContractWrite(approveConfig);

  const { isLoading: isPublicApproveLoading, isError: isApproveError } =
    useWaitForTransaction({
      hash: approveData?.hash,
      onSuccess: async () => {
        await refetchContractWrite();
        approveReset();
      },
      onError: async () => {
        await refetchContractWrite();
        approveReset();
      },
    });

  const {
    config: publicMintConfig,
    isSuccess: canPublicMint,
    refetch: refetchContractWrite,
  } = usePrepareContractWrite({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "mintPublic",
    args: [BigNumber.from(amount)],
    enabled: enable,
  });

  const {
    write: mintPublic,
    data: mintPublicData,
    reset: mintPublicReset,
  } = useContractWrite(publicMintConfig);

  const {
    isLoading: isPublicMintLoading,
    isSuccess: isPublicMintSuccess,
    isError: isMintError,
  } = useWaitForTransaction({
    hash: mintPublicData?.hash,
    onSuccess: async () => {
      await refetchContractWrite();
      mintPublicReset();
    },
    onError: async () => {
      await refetchContractWrite();
      mintPublicReset();
    },
  });

  return {
    canPublicApprove,
    canPublicMint,
    isPublicApproveLoading,
    isPublicMintLoading,
    isPublicMintSuccess,
    mintPublic,
    approvePublicOp,
    isPublicError: isApproveError || isMintError,
    publicMints: publicMints?.toString() ?? "0",
    publicAllocation: 10,
    updateSaleInfo,
  };
};
