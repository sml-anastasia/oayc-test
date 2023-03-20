import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../../web3/config";
import { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import {
  oaycNftContractAbi,
  simpleTokenContractAbi,
} from "../../../web3/contracts";

export const usePublicMint = (price: BigNumber) => {
  const [tokenNum, setTokenNum] = useState(1);

  const { config: approveConfig } = usePrepareContractWrite({
    address: config.tokenContract,
    abi: simpleTokenContractAbi,
    functionName: "approve",
    args: [config.oaycContract, price?.mul(tokenNum)],
    enabled: tokenNum > 0,
  });
  const {
    write: approveWrite,
    data: approveData,
    reset: approveReset,
  } = useContractWrite(approveConfig);

  const { isSuccess: isApproveSuccess } = useWaitForTransaction({
    hash: approveData?.hash,
  });

  const {
    config: publicMintConfig,
    isSuccess: canMint,
    refetch: refetchContractWrite,
  } = usePrepareContractWrite({
    address: config.oaycContract,
    abi: oaycNftContractAbi,
    functionName: "mintPublic",
    args: [BigNumber.from(tokenNum)],
  });

  const {
    write: mintWrite,
    data,
    reset: mintReset,
  } = useContractWrite(publicMintConfig);
  const { isLoading, isSuccess: isMintSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const publicMint = async () => {
    if (canMint) {
      mintWrite?.();
      return;
    }
    approveWrite?.();
  };

  useEffect(() => {
    (async () => {
      if (isApproveSuccess) {
        approveReset();
        refetchContractWrite().then((i) => {
          if (i.isSuccess) {
            mintWrite?.();
          }
        });
      }
    })();
  }, [approveReset, isApproveSuccess, mintWrite, refetchContractWrite]);

  useEffect(() => {
    if (isMintSuccess) {
      mintReset();
      refetchContractWrite();
    }
  }, [isMintSuccess, mintReset, refetchContractWrite]);

  return {
    isLoading,
    isMintSuccess,
    setTokenNum,
    tokenNum,
    publicMint,
  };
};
