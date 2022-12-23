import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { mutantContract, mutantContractABI, OPTokenABI, tokenContract } from "../connection/connection";
import { ethers } from "ethers";

export const useMoaycPublicMint = (price: number, amount: number, enable: boolean) => {
    const {address} = useAccount();

    const {
        config: approveConfig,
        isSuccess: canPublicApprove,
    } = usePrepareContractWrite({
        address: tokenContract,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [mutantContract, ethers.utils.parseEther(price.toString()).mul(amount)],
        enabled: amount > 0 && enable
    });


    const {data: publicMints, refetch: updateSaleInfo} = useContractRead({
        address: mutantContract,
        abi: mutantContractABI,
        functionName: 'publicMints',
        args: [address],
        staleTime: 10000
    });

    const {
        write: approvePublicOp,
        data: approveData,
        reset: approveReset
    } = useContractWrite(approveConfig);


    const {
        isLoading: isPublicApproveLoading,
        isSuccess: isApproveSuccess,
        isError: isApproveError,
    } = useWaitForTransaction({
        hash: approveData?.hash,
        onSuccess: async () => {
            await refetchContractWrite();
            approveReset();
        },
        onError: async () => {
            await refetchContractWrite();
            approveReset();
        }
    });

    const {
        config: publicMintConfig,
        isSuccess: canPublicMint,
        refetch: refetchContractWrite
    } = usePrepareContractWrite({
        address: mutantContract,
        abi: mutantContractABI,
        functionName: 'mintPublic',
        args: [amount],
        enabled: enable
    });


    const {
        write: mintPublic,
        data: mintPublicData,
        reset: mintPublicReset
    } = useContractWrite(publicMintConfig);


    const {
        isLoading: isPublicMintLoading,
        isSuccess: isPublicMintSuccess,
        isError: isMintError,
    } = useWaitForTransaction({
        hash: mintPublicData?.hash,
        onSuccess: async () => {
            await refetchContractWrite();
            mintPublicReset();
        },
        onError: async () => {
            await refetchContractWrite();
            mintPublicReset();
        }
    });


    return {
        canPublicApprove,
        canPublicMint,
        isPublicApproveLoading,
        isPublicMintLoading,
        isPublicMintSuccess,
        mintPublic,
        approvePublicOp,
        isPublicError: isApproveError || isMintError,
        publicMints: publicMints?.toString() ?? '0',
        publicAllocation: 10,
        updateSaleInfo
    };


};