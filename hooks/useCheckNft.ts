import {
    useAccount,
    useContractRead,
    useContractReads,
} from "wagmi";
import {
    moaycContract,
    oaycContactABI,
    oaycContract
} from "../connection/connection";
import { useState } from "react";
import { NftMutate } from "../types/NFT";

const getOaycNfts = {
    address: oaycContract,
    abi: oaycContactABI,
    functionName: 'tokenOfOwnerByIndex',
};

export const useCheckNft = () => {

    const {address} = useAccount();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        data: oaycBalanceOf,
        isSuccess: oaycBalanceOfIsSuccess,
        refetch: oaycBalanceOfIsRefetch,
    } = useContractRead({
        address: oaycContract,
        abi: oaycContactABI,
        functionName: 'balanceOf',
        args: [address],
    });

    const {
        data: oaycNfts,
        isSuccess: oaycNftsIsSuccess,
        refetch: oaycNftsRefetch,
    }: any = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(oaycBalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getOaycNfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `https://oayc.io:3000/${i.toString()}.png`,
            level: 0
        })),
        enabled: oaycBalanceOfIsSuccess
    });


    const nfts = [...(oaycNfts ?? [])];




    return {
        nfts,
        isSuccess,
        isError,
        setIsSuccess,
        setIsError
    };


};