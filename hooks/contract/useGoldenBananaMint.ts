import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useEffect, useState } from "react";
import { config } from "../../connection/connection";
import { bananaContractAbi, oaycNftContractAbi } from "../../contracts";
import { BigNumber } from "ethers";

export const useGoldenBananaMint = () => {
    const [bananaCount, setBananaCount] = useState(0);
    const {address} = useAccount();

    const {
        data: goldenBananaCount,
        refetch: refetchBananaCount
    } = useContractRead({
        address: config.goldenBananaContract,
        abi: bananaContractAbi,
        functionName: 'balanceOf',
        args: address && [address]
    });

    useEffect(() => {
        if (goldenBananaCount && goldenBananaCount.toNumber() >= 0) {
            setBananaCount(goldenBananaCount.toNumber());
        }
    }, [goldenBananaCount]);


    const {
        data: goldenBananaId,
        refetch: refetchBananaId
    } = useContractRead({
        address: config.goldenBananaContract,
        abi: bananaContractAbi,
        functionName: 'tokenOfOwnerByIndex',
        args: address && [address, BigNumber.from(0)],
        enabled: bananaCount > 0
    });

    const {config: mintGoldenBananaConfig} = usePrepareContractWrite({
        address: config.oaycContract,
        abi: oaycNftContractAbi,
        functionName: 'mintGoldenBanana',
        args: goldenBananaId && [goldenBananaId],
        enabled: Boolean(bananaCount)
    });

    const {write, data} = useContractWrite(mintGoldenBananaConfig);

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