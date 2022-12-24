import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { bananaAbi, goldenBananaContract, oaycContactABI, oaycContract } from "../connection/connection";
import { useEffect, useState } from "react";
import { Abi } from "abitype";

export const useGoldenBananaMint = () => {
    const [bananaCount, setBananaCount] = useState(0);
    const {address} = useAccount();

    const {data: goldenBananaCount, refetch: refetchBananaCount} = useContractRead({
        address: goldenBananaContract,
        abi: bananaAbi,
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
        abi: bananaAbi,
        functionName: 'tokenOfOwnerByIndex',
        args: [address, 0],
        enabled: bananaCount > 0
    });

    const {config} = usePrepareContractWrite({
        address: oaycContract,
        abi: oaycContactABI as Abi,
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