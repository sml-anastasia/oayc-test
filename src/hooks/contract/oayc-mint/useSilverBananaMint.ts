import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import {
  bananaContractAbi,
  oaycNftContractAbi,
  simpleTokenContractAbi,
} from "../../../web3/contracts";

export const useSilverBananaMint = (price: BigNumber) => {
  const [bananaCount, setBananaCount] = useState(0);
  const { address } = useAccount();

  const { data: silverBananaCount, refetch: refetchBananaCount } =
    useContractRead({
      address: config.silverBananaContract,
      abi: bananaContractAbi,
      functionName: "balanceOf",
      args: address && [address],
      enabled: !!address,
    });

  useEffect(() => {
    if (silverBananaCount && silverBananaCount.toNumber() >= 0) {
      setBananaCount(silverBananaCount.toNumber());
    }
  }, [silverBananaCount]);

  const { data: silverBananaId, refetch: refetchBananaId } = useContractRead({
    address: config.silverBananaContract,
    abi: bananaContractAbi,
    functionName: "tokenOfOwnerByIndex",
    args: address && [address, BigNumber.from(0)],
    enabled: bananaCount > 0,
  });

  const { config: approveConfig } = usePrepareContractWrite({
    address: config.tokenContract,
    abi: simpleTokenContractAbi,
    functionName: "approve",
    args: [config.oaycContract, price],
    enabled: Boolean(bananaCount),
  });

  const { write: approveWrite, data: approveData } =
    useContractWrite(approveConfig);

  const {
    config: mintSilverBananaConfig,
    isSuccess: mintSuccess,
    refetch: refetchContractWrite,
  } = usePrepareContractWrite({
    address: config.oaycContract,
    abi: oaycNftContractAbi,
    functionName: "mintSilverBanana",
    args: silverBananaId && [silverBananaId],
    enabled: Boolean(bananaCount),
  });

  const { write, data } = useContractWrite(mintSilverBananaConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const { isLoading: isApproveLoading, isSuccess: isApproveSuccess } =
    useWaitForTransaction({
      hash: approveData?.hash,
    });

  const mintSilverBanana = () => {
    if (mintSuccess) {
      write?.();
      return;
    }
    approveWrite?.();
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      refetchBananaCount().then(async () => await refetchBananaId());
    }
  }, [isLoading, isSuccess, refetchBananaCount, refetchBananaId]);

  useEffect(() => {
    (async () => {
      if (isApproveSuccess && !isApproveLoading) {
        refetchContractWrite().then(() => write?.());
      }
    })();
  }, [isApproveLoading, isApproveSuccess]);

  return {
    isLoading,
    isSuccess,
    bananaCount,
    silverBananaId,
    mintSilverBanana,
  };
};
