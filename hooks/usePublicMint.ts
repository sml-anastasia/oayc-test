import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { oaycContactABI, oaycContract, tokenContract, OPTokenABI } from "../connection/connection";
import { useEffect, useState } from "react";
import { Abi } from "abitype";
import { BigNumber } from "ethers";

export const usePublicMint = (price: BigNumber) => {
    const [tokenNum, setTokenNum] = useState(1);

    const {config: approveConfig} = usePrepareContractWrite({
        address: tokenContract,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [oaycContract, price?.mul(tokenNum)],
        enabled: tokenNum > 0
    });
    const {write: approveWrite, data: approveData, reset: approveReset} = useContractWrite(approveConfig);
    const {isSuccess: isApproveSuccess} = useWaitForTransaction({
        hash: approveData?.hash,
    });

    // console.log("approveData", approveData);
    const {
        config: publicMintConfig,
        isSuccess: canMint,
        refetch: refetchContractWrite
    } = usePrepareContractWrite({
        address: oaycContract,
        abi: oaycContactABI as Abi,
        functionName: 'mintPublic',
        args: [tokenNum]
    });

    const {write: mintWrite, data, reset: mintReset} = useContractWrite(publicMintConfig);
    const {isLoading, isSuccess: isMintSuccess} = useWaitForTransaction({
        hash: data?.hash,
    });

    const publicMint = async () => {
        if (canMint) {
            console.log("minting without approve");
            mintWrite?.();
            return;
        }
        approveWrite?.();
    };


    useEffect(() => {
        (async () => {
            if (isApproveSuccess) {
                approveReset();
                refetchContractWrite().then((i) => {
                    console.log(i)
                    if (i.isSuccess) {
                        mintWrite?.();
                    }
                });
            }
        })();
    }, [isApproveSuccess, refetchContractWrite]);

    useEffect(() => {
        if (isMintSuccess) {
            mintReset();
            refetchContractWrite();
        }
    }, [isMintSuccess, mintReset, refetchContractWrite]);


    return {
        isLoading,
        isMintSuccess,
        setTokenNum,
        tokenNum,
        publicMint
    };


};