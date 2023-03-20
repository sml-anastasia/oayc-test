import { useAccount, useContractRead } from "wagmi";
import { AddressZero } from "@ethersproject/constants";
import { config } from "../../../web3/config";
import { stakingAbi } from "../../../web3/contracts";
import { useMemo } from "react";
import { NftInfo } from "../../../web3/types/NFT";

export const usePositions = () => {
  const { address = AddressZero, isConnected } = useAccount();

  const { data: positionsRaw = [], refetch: refetchAllPositionsInfo } =
    useContractRead({
      address: config.stakingContract,
      abi: stakingAbi,
      functionName: "getAllPositionsInfo",
      args: [address],
      enabled: isConnected,
    });

  const positions = useMemo(
    () =>
      positionsRaw.map((position) => {
        const stakedNfts: NftInfo[] = [];

        for (const i of position.arrayIdsOayc) {
          const id = i.toString();

          id !== "0" &&
            stakedNfts.push({
              id: i.toString(),
              uri: `${config.oaycBaseUri}${i}.png`,
              level: 0,
            });
        }

        for (const i of position.arrayIdsMoayc) {
          const id = i.toString();

          id !== "0" &&
            stakedNfts.push({
              id: i.toString(),
              uri: `${config.moaycBaseUri}${i}.png`,
              level: 1,
            });
        }

        return {
          ...position,
          stakedNfts,
        };
      }),
    [positionsRaw]
  );

  return {
    positions,
    refetchAllPositionsInfo,
  };
};
