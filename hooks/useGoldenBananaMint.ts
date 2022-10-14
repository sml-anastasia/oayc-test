import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { goldenBananaContactABI, goldenBananaContract, NFTContactABI, NFTContract } from "../connection/connection";
import { useEffect, useState } from "react";
import { Abi } from "abitype";

export const useGoldenBananaMint = () => {
    const [bananaCount, setBananaCount] = useState(0);
    const {address} = useAccount();

    const {data: goldenBananaCount, refetch: refetchBananaCount} = useContractRead({
        address: goldenBananaContract,
        abi: goldenBananaContactABI,
        functionName: 'balanceOf',
        args: [address]
    });

    useEffect(() => {
        if (goldenBananaCount?.toNumber() >= 0) {
            setBananaCount(goldenBananaCount.toNumber());
        }
    }, [goldenBananaCount]);


    const {data: goldenBananaId, refetch: refetchBananaId} = useContractRead({
        address: goldenBananaContract,
        abi: goldenBananaContactABI,
        functionName: 'tokenOfOwnerByIndex',
        args: [address, 0],
        enabled: bananaCount > 0
    });

    const {config} = usePrepareContractWrite({
        address: NFTContract,
        abi: NFTContactABI as Abi,
        functionName: 'mintGoldenBanana',
        args: [goldenBananaId?.toNumber()],
        enabled: Boolean(bananaCount)
    });

    const {write, data} = useContractWrite(config);

    const {isLoading, isSuccess} = useWaitForTransaction({
        hash: data?.hash,
    });

    const mintGoldenBanana = () => {
        write?.();
    };

    useEffect(() => {
        if (isSuccess && !isLoading) {
            refetchBananaCount().then(async () => await refetchBananaId());
        }
    }, [isLoading, isSuccess]);

    return {
        isLoading,
        isSuccess,
        bananaCount,
        goldenBananaId,
        mintGoldenBanana
    };


};