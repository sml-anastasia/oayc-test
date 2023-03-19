import { Address, useContractRead, useContractReads } from "wagmi";
import { config } from "../../../connection/connection";
import { mutantContractAbi } from "../../../contracts";
import { useMemo } from "react";
import { BigNumber } from "ethers";

const getMoaycNfts = {
  address: config.moaycContract,
  abi: mutantContractAbi,
  functionName: "tokenOfOwnerByIndex",
};

const getMoaycNftsLvl = {
  address: config.moaycContract,
  abi: mutantContractAbi,
  functionName: "mutationLvl",
};

const getMoaycImage = (id: string, level: number) => {
  if (level === 1) {
    return `https://oayc.io:3001/${Number(id)}.png`;
  } else if (level === 2) {
    return `https://oayc.io:3001/${Number(id) + 100000}.png`;
  } else if (level === 3) {
    return `https://oayc.io:3001/${Number(id) + 200000}.png`;
  } else {
    return `https://oayc.io:3001/${Number(id)}.png`;
  }
};

export const useMoaycNftsOfAddress = (address: Address, enabled = true) => {
  const { data: moaycBalanceOf, isSuccess: moaycBalanceOfIsSuccess } =
    useContractRead({
      address: config.moaycContract,
      abi: mutantContractAbi,
      functionName: "balanceOf",
      args: [address],
      enabled: enabled,
    });

  const { data: moaycNftsPreRaw, isSuccess: moaycNftsPreIsSuccess } =
    useContractReads({
      contracts: (() => {
        const reads = [];
        for (let i = 0; i < Number(moaycBalanceOf?.toString() ?? "0"); i++) {
          reads.push({ ...getMoaycNfts, args: [address, i] });
        }
        return reads;
      })(),
      enabled: enabled && moaycBalanceOfIsSuccess,
    });

  const moaycNftsPre = useMemo(
    () =>
      moaycNftsPreRaw?.map((i) => ({
        id: i.toString(),
        uri: `https://oayc.io:3001/${i.toString()}.png`,
        level: 1,
      })),
    [moaycNftsPreRaw]
  );

  const { data: moaycNftLvlsRaw, refetch: moaycNftLvlsRefetch } =
    useContractReads({
      contracts: (() => {
        const reads = [];
        for (const nft of moaycNftsPre ?? []) {
          reads.push({ ...getMoaycNftsLvl, args: [nft.id] });
        }
        return reads;
      })(),
      enabled:
        enabled &&
        moaycBalanceOfIsSuccess &&
        moaycNftsPreIsSuccess &&
        !!moaycNftsPre,
    });

  const moaycNftLvls = useMemo(
    () =>
      (moaycNftLvlsRaw as unknown as BigNumber[] | undefined)?.map((i) =>
        i.toNumber()
      ),
    [moaycNftLvlsRaw]
  );

  const moaycNfts = useMemo(
    () =>
      (moaycNftsPre ?? []).map((i, index) => ({
        ...i,
        level: moaycNftLvls?.[index] ?? 1,
        uri: getMoaycImage(i.id, moaycNftLvls?.[index] ?? 1),
      })),
    [moaycNftsPre, moaycNftLvls]
  );

  return {
    moaycBalanceOf,
    moaycBalanceOfIsSuccess,
    moaycNfts,
    moaycNftLvlsRefetch,
  };
};
