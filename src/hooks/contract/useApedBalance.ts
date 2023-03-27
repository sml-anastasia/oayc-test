import { useAccount, useContractRead } from "wagmi";
import { config } from "../../web3/config";
import { BigNumber, ethers } from "ethers";
import { AddressZero } from "@ethersproject/constants";
import { simpleTokenContractAbi } from "../../web3/contracts";

export const useApedBalance = () => {
  const { address, isConnected } = useAccount();

  const { data: balance = BigNumber.from(0), refetch: refetchBalanceOf } =
    useContractRead({
      abi: simpleTokenContractAbi,
      address: config.apedTokenContract,
      functionName: "balanceOf",
      args: [address ?? AddressZero],
      enabled: isConnected,
    });

  const refetch = async () => {
    await refetchBalanceOf();
  };

  const formattedBalance = parseFloat(
    ethers.utils.formatEther(balance)
  ).toFixed(2);

  return {
    balance,
    formattedBalance,
    refetch,
  };
};
