import { Address, useContractRead, useContractReads } from "wagmi";
import { config } from "../../../connection/connection";
import { mutagenContractAbi } from "../../../contracts";
import { useMemo } from "react";

const getMutagen1Nfts = {
  address: config.mutagen1Contract,
  abi: mutagenContractAbi,
  functionName: "tokenOfOwnerByIndex",
};

const getMutagen2Nfts = {
  address: config.mutagen2Contract,
  abi: mutagenContractAbi,
  functionName: "tokenOfOwnerByIndex",
};

const getMutagen3Nfts = {
  address: config.mutagen3Contract,
  abi: mutagenContractAbi,
  functionName: "tokenOfOwnerByIndex",
};

export const useMutagenNftsOfAddress = (enabled: boolean, address: Address) => {
  const {
    data: mutagen1BalanceOf,
    isSuccess: mutagen1BalanceOfIsSuccess,
    refetch: mutagen1BalanceOfRefetch,
  } = useContractRead({
    address: config.mutagen1Contract,
    abi: mutagenContractAbi,
    functionName: "balanceOf",
    args: [address],
    enabled: enabled,
  });

  const {
    data: mutagen2BalanceOf,
    isSuccess: mutagen2BalanceOfIsSuccess,
    refetch: mutagen2BalanceOfRefetch,
  } = useContractRead({
    address: config.mutagen2Contract,
    abi: mutagenContractAbi,
    functionName: "balanceOf",
    args: [address],
    enabled: enabled,
  });

  const {
    data: mutagen3BalanceOf,
    isSuccess: mutagen3BalanceOfIsSuccess,
    refetch: mutagen3BalanceOfRefetch,
  } = useContractRead({
    address: config.mutagen3Contract,
    abi: mutagenContractAbi,
    functionName: "balanceOf",
    args: [address],
    enabled: enabled,
  });

  const { data: mutagen1NftsRaw, refetch: mutagen1NftsRefetch } =
    useContractReads({
      contracts: (() => {
        const reads = [];
        for (let i = 0; i < Number(mutagen1BalanceOf?.toString() ?? "0"); i++) {
          reads.push({ ...getMutagen1Nfts, args: [address, i] });
        }
        return reads;
      })(),
      enabled: enabled && mutagen1BalanceOfIsSuccess,
    });

  const mutagen1Nfts = useMemo(
    () =>
      mutagen1NftsRaw?.map((i) => ({
        id: i.toString(),
        uri: `/images/mutagens/${((Number(i.toString()) - 1) % 3) + 1}.png`,
        level: 1,
      })) ?? [],
    [mutagen1NftsRaw]
  );

  const { data: mutagen2NftsRaw, refetch: mutagen2NftsRefetch } =
    useContractReads({
      contracts: (() => {
        const reads = [];
        for (let i = 0; i < Number(mutagen2BalanceOf?.toString() ?? "0"); i++) {
          reads.push({ ...getMutagen2Nfts, args: [address, i] });
        }
        return reads;
      })(),
      enabled: enabled && mutagen2BalanceOfIsSuccess,
    });

  const mutagen2Nfts = useMemo(
    () =>
      mutagen2NftsRaw?.map((i) => ({
        id: i.toString(),
        uri: `/images/mutagens/${((Number(i.toString()) - 1) % 3) + 4}.png`,
        level: 2,
      })) ?? [],
    [mutagen2NftsRaw]
  );

  const { data: mutagen3NftsRaw, refetch: mutagen3NftsRefetch } =
    useContractReads({
      contracts: (() => {
        const reads = [];
        for (let i = 0; i < Number(mutagen3BalanceOf?.toString() ?? "0"); i++) {
          reads.push({ ...getMutagen3Nfts, args: [address, i] });
        }
        return reads;
      })(),
      enabled: enabled && mutagen3BalanceOfIsSuccess,
    });

  const mutagen3Nfts = useMemo(
    () =>
      mutagen3NftsRaw?.map((i) => ({
        id: i.toString(),
        uri: `/images/mutagens/${((Number(i.toString()) - 1) % 3) + 7}.png`,
        level: 3,
      })) ?? [],
    [mutagen3NftsRaw]
  );

  const mutagenNfts = useMemo(
    () => [...mutagen1Nfts, ...mutagen2Nfts, ...mutagen3Nfts],
    [mutagen1Nfts, mutagen2Nfts, mutagen3Nfts]
  );

  return {
    mutagen1BalanceOf,
    mutagen1BalanceOfIsSuccess,
    mutagen1BalanceOfRefetch,
    mutagen1NftsRefetch,
    mutagen2BalanceOf,
    mutagen2BalanceOfIsSuccess,
    mutagen2BalanceOfRefetch,
    mutagen2NftsRefetch,
    mutagen3BalanceOf,
    mutagen3BalanceOfIsSuccess,
    mutagen3BalanceOfRefetch,
    mutagen3NftsRefetch,

    mutagen1Nfts,
    mutagen2Nfts,
    mutagen3Nfts,
    mutagenNfts,
  };
};
