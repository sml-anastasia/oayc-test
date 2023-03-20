import { Address, useContractRead, useContractReads } from "wagmi";
import { config } from "../../../web3/config";
import { oaycNftContractAbi } from "../../../web3/contracts";
import { useMemo } from "react";

const getOaycNfts = {
  address: config.oaycContract,
  abi: oaycNftContractAbi,
  functionName: "tokenOfOwnerByIndex",
};

export const useOaycNftsOfAddress = (address: Address, enabled = true) => {
  const { data: oaycBalanceOf, isSuccess: oaycBalanceOfIsSuccess } =
    useContractRead({
      address: config.oaycContract,
      abi: oaycNftContractAbi,
      functionName: "balanceOf",
      args: [address],
      enabled: enabled,
    });

  const { data: oaycNftsRaw = [] } = useContractReads({
    contracts: (() => {
      const reads = [];
      for (let i = 0; i < Number(oaycBalanceOf?.toString() ?? "0"); i++) {
        reads.push({ ...getOaycNfts, args: [address, i] });
      }
      return reads;
    })(),
    enabled: enabled && oaycBalanceOfIsSuccess,
  });

  const oaycNfts = useMemo(
    () =>
      oaycNftsRaw
        .filter((i) => i)
        .map((i) => ({
          id: i.toString(),
          uri: `https://oayc.io:3000/${i.toString()}.png`,
          level: 0,
        })) ?? [],
    [oaycNftsRaw]
  );

  return {
    oaycBalanceOf,
    oaycBalanceOfIsSuccess,
    oaycNfts,
  };
};
