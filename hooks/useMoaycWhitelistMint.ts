import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { moaycContract, moaycContractABI, OPTokenABI, tokenContract } from "../connection/connection";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";

export const useMoaycWhitelistMint = (price: number, amount: number, enable: boolean) => {

    const [proof, setProof] = useState([]);
    const {address} = useAccount();

    const {
        config: approveConfig,
        isSuccess: canWlApprove,
    } = usePrepareContractWrite({
        address: tokenContract,
        abi: OPTokenABI,
        functionName: 'approve',
        args: [moaycContract, ethers.utils.parseEther(price.toString()).mul(amount)],
        enabled: enable
    });

    const {data: whitelistMints, refetch: updateSaleInfo} = useContractRead({
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'whitelistMints',
        args: [address],
        staleTime: 10000
    });


    useEffect(() => {
        if (enable) {
            axios
                .get(`/api/proof?address=${address}`)
                .then(res => {
                    setProof(res.data.proof);
                })
                .catch();
        }
    }, [address, enable]);


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
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'mintWhitelist',
        args: [amount, proof],
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
        isWled: proof.length > 0,
        isWlMintLoading,
        isWlMintSuccess,
        mintWl,
        approveWlOp,
        isWlError: isApproveError || isMintError,
        whitelistMints: whitelistMints?.toString() ?? '0',
        whiteListAllocation: proof.length > 0 ? 3 : 0,
        updateSaleInfo
    };


};