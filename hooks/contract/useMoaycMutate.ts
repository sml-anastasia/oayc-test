import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { config } from "../../connection/connection";
import { BigNumber } from "ethers";
import { useState } from "react";
import { NftInfo } from "../../types/NFT";
import { mutantContractAbi } from "../../contracts";
import { useMoaycStatus } from "./useMoaycStatus";
import { useOaycNftsOfAddress } from "./util/useOaycNftsOfAddress";
import { AddressZero } from "@ethersproject/constants";
import { useMoaycNftsOfAddress } from "./util/useMoaycNftsOfAddress";
import { useMutagenNftsOfAddress } from "./util/useMutagenNftsOfAddress";

export const useMoaycMutate = (
  enableNftSelection = false,
  enableMutagenSelection = false,
  selectedNft: NftInfo,
  selectedMutagen: NftInfo
) => {
  const { address } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { saleInfo } = useMoaycStatus();

  const { oaycNfts } = useOaycNftsOfAddress(
    address ?? AddressZero,
    enableNftSelection
  );

  const { moaycNfts, moaycNftLvlsRefetch } = useMoaycNftsOfAddress(
    address ?? AddressZero,
    enableNftSelection
  );

  const {
    mutagenNfts,
    mutagen1BalanceOfRefetch,
    mutagen1NftsRefetch,
    mutagen2BalanceOfRefetch,
    mutagen2NftsRefetch,
    mutagen3BalanceOfRefetch,
    mutagen3NftsRefetch,
  } = useMutagenNftsOfAddress(enableMutagenSelection, address ?? AddressZero);

  const nfts = [...oaycNfts, ...moaycNfts];

  const {
    config: mutate1Config,
    isSuccess: canMutate1,
    refetch: refetchCanMutate1,
  } = usePrepareContractWrite({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "mutate1",
    overrides: {
      value: saleInfo?.mutationPrice,
    },
    args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
    enabled:
      saleInfo &&
      enableNftSelection &&
      enableMutagenSelection &&
      selectedNft.level === 0 &&
      selectedMutagen.level === 1,
  });

  const { write: mutate1, data: mutate1Data } = useContractWrite(mutate1Config);

  const { isLoading: mutate1Loading } = useWaitForTransaction({
    hash: mutate1Data?.hash,
    enabled: !!mutate1Data?.hash,
    onSuccess: async (data) => {
      if (data.status === 1) {
        setIsSuccess(true);
        await mutagen1BalanceOfRefetch();
        await moaycNftLvlsRefetch();
        await mutagen1NftsRefetch();
        await refetchCanMutate1();
      } else {
        setIsError(true);
      }
    },
    onError: async () => {
      setIsError(true);
    },
  });

  const {
    config: mutate2Config,
    isSuccess: canMutate2,
    refetch: refetchCanMutate2,
  } = usePrepareContractWrite({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "mutate2",
    args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
    enabled:
      enableNftSelection &&
      enableMutagenSelection &&
      selectedNft.level === 1 &&
      selectedMutagen.level === 2,
  });

  const { write: mutate2, data: mutate2Data } = useContractWrite(mutate2Config);

  const { isLoading: mutate2Loading } = useWaitForTransaction({
    hash: mutate2Data?.hash,
    enabled: !!mutate2Data?.hash,
    onSuccess: async (data) => {
      if (data.status === 1) {
        setIsSuccess(true);
        await mutagen2BalanceOfRefetch();
        await moaycNftLvlsRefetch();
        await mutagen2NftsRefetch();
        await refetchCanMutate2();
      } else {
        setIsError(true);
      }
    },
    onError: async () => {
      setIsError(true);
    },
  });

  const {
    config: mutate3Config,
    isSuccess: canMutate3,
    refetch: refetchCanMutate3,
  } = usePrepareContractWrite({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "mutate3",
    args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
    enabled:
      enableNftSelection &&
      enableMutagenSelection &&
      selectedNft.level === 2 &&
      selectedMutagen.level === 3,
  });

  const { write: mutate3, data: mutate3Data } = useContractWrite(mutate3Config);

  const { isLoading: mutate3Loading } = useWaitForTransaction({
    hash: mutate3Data?.hash,
    enabled: !!mutate3Data?.hash,
    onSuccess: async (data) => {
      if (data.status === 1) {
        setIsSuccess(true);
        await mutagen3BalanceOfRefetch();
        await moaycNftLvlsRefetch();
        await mutagen3NftsRefetch();
        await refetchCanMutate3();
      } else {
        setIsError(true);
      }
    },
    onError: async () => {
      setIsError(true);
    },
  });

  const canMutate =
    (canMutate1 || canMutate2 || canMutate3) &&
    selectedMutagen.id !== "-1" &&
    selectedNft.id !== "-1" &&
    selectedNft.level === selectedMutagen.level - 1;

  const handleMutate = () => {
    if (canMutate && selectedMutagen.level === 1) {
      mutate1?.();
    }
    if (canMutate && selectedMutagen.level === 2) {
      mutate2?.();
    }
    if (canMutate && selectedMutagen.level === 3) {
      mutate3?.();
    }
  };

  const isLoading = mutate1Loading || mutate2Loading || mutate3Loading;

  return {
    nfts,
    mutagenNfts,
    canMutate,
    handleMutate,
    isLoading,
    isSuccess,
    isError,
    setIsSuccess,
    setIsError,
  };
};
