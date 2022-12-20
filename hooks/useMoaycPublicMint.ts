import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { mutantContract, mutantContractABI, OPTokenABI, tokenContract } from "../connection/connection";
import { ethers } from "ethers";

export const useMoaycPublicMint = (price: number, amount: number) => {

    const {
        config: approveConfig,
        isSuccess: canApprove,
    } = usePrepareContractWrite({
        address: tokenContract,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [mutantContract, ethers.utils.parseEther(price.toString()).mul(amount)],
        enabled: amount > 0
    });


    const {
        write: approveOp,
        data: approveData,
        reset: approveReset
    } = useContractWrite(approveConfig);


    const {
        isLoading: isApproveLoading,
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
        isSuccess: canMint,
        refetch: refetchContractWrite
    } = usePrepareContractWrite({
        address: mutantContract,
        abi: mutantContractABI,
        functionName: 'mintPublic',
        args: [amount]
    });


    const {
        write: mintPublic,
        data: mintPublicData,
        reset: mintPublicReset
    } = useContractWrite(publicMintConfig);


    const {
        isLoading: isMintLoading,
        isSuccess: isMintSuccess,
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
        canApprove,
        canMint,
        isApproveLoading,
        isMintLoading,
        isMintSuccess,
        mintPublic,
        approveOp,
        isError: isApproveError || isMintError
    };


};