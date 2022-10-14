import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import {
    NFTContactABI,
    NFTContract,
    OPToken,
    OPTokenABI,
    silverBananaContactABI,
    silverBananaContract
} from "../connection/connection";
import { useEffect, useState } from "react";
import { Abi } from "abitype";
import { BigNumber } from "ethers";

export const useSilverBananaMint = (price: BigNumber) => {
    const [bananaCount, setBananaCount] = useState(0);
    const {address} = useAccount();

    const {data: silverBananaCount, refetch: refetchBananaCount} = useContractRead({
        address: silverBananaContract,
        abi: silverBananaContactABI,
        functionName: 'balanceOf',
        args: [address]
    });

    useEffect(() => {
        if (silverBananaCount?.toNumber() >= 0) {
            setBananaCount(silverBananaCount.toNumber());
        }
    }, [silverBananaCount]);


    const {data: silverBananaId, refetch: refetchBananaId} = useContractRead({
        address: silverBananaContract,
        abi: silverBananaContactABI,
        functionName: 'tokenOfOwnerByIndex',
        args: [address, 0],
        enabled: bananaCount > 0
    });

    const {config: approveConfig} = usePrepareContractWrite({
        address: OPToken,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [NFTContract, price],
        enabled: Boolean(bananaCount)
    });
    const {write: approveWrite, data: approveData} = useContractWrite(approveConfig);

    const {
        config: mintSilverBananaConfig,
        isSuccess: mintSuccess,
        refetch: refetchContractWrite
    } = usePrepareContractWrite({
        address: NFTContract,
        abi: NFTContactABI as Abi,
        functionName: 'mintSilverBanana',
        args: [silverBananaId?.toNumber()],
        enabled: Boolean(bananaCount)
    });

    const {write, data} = useContractWrite(mintSilverBananaConfig);

    const {isLoading, isSuccess} = useWaitForTransaction({
        hash: data?.hash,
    });

    const {isLoading: isApproveLoading, isSuccess: isApproveSuccess,} = useWaitForTransaction({
        hash: approveData?.hash,
    });

    const mintSilverBanana = () => {
        if (mintSuccess) {
            write?.();
            return;
        }
        approveWrite?.();
    };

    useEffect(() => {
        if (isSuccess && !isLoading) {
            refetchBananaCount().then(async () => await refetchBananaId());
        }
    }, [isLoading, isSuccess, refetchBananaCount, refetchBananaId]);

    useEffect(() => {
        (async () => {
            if (isApproveSuccess && !isApproveLoading) {
                refetchContractWrite().then(() => write?.());
            }
        })();

    }, [isApproveLoading, isApproveSuccess]);

    return {
        isLoading,
        isSuccess,
        bananaCount,
        silverBananaId,
        mintSilverBanana
    };


};