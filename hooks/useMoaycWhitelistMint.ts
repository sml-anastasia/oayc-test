import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { mutantContract, mutantContractABI, OPTokenABI, tokenContract } from "../connection/connection";
import { ethers } from "ethers";

export const useMoaycWhitelistMint = (price: number, amount: number, enable: boolean) => {

    const {
        config: approveConfig,
        isSuccess: canWlApprove,
    } = usePrepareContractWrite({
        address: tokenContract,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [mutantContract, ethers.utils.parseEther(price.toString()).mul(amount)],
        enabled: enable
    });


    const {
        write: approveWlOp,
        data: approveData,
        reset: approveReset
    } = useContractWrite(approveConfig);


    const {
        isLoading: isWlApproveLoading,
        isSuccess: isWlApproveSuccess,
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
        isSuccess: canWlMint,
        refetch: refetchContractWrite
    } = usePrepareContractWrite({
        address: mutantContract,
        abi: mutantContractABI,
        functionName: 'mintWhitelist',
        args: [amount, []],
        enabled: enable
    });


    const {
        write: mintWl,
        data: mintPublicData,
        reset: mintPublicReset
    } = useContractWrite(publicMintConfig);


    const {
        isLoading: isWlMintLoading,
        isSuccess: isWlMintSuccess,
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
        canWlApprove,
        canWlMint,
        isWlApproveLoading,
        isWlMintLoading,
        isWlMintSuccess,
        mintWl,
        approveWlOp,
        isWlError: isApproveError || isMintError
    };


};