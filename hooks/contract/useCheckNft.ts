import { useAccount, useContractRead, useContractReads, } from "wagmi";
import { config } from "../../connection/connection";
import { useState } from "react";
import { oaycNftContractAbi } from "../../contracts";
import { NftMutate } from "../../types/NFT";

const getOaycNfts = {
    address: config.oaycContract,
    abi: oaycNftContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

export const useCheckNft = () => {

    const {address} = useAccount();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        data: oaycBalanceOf,
        isSuccess: oaycBalanceOfIsSuccess,
    } = useContractRead({
        address: config.oaycContract,
        abi: oaycNftContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
    });

    const getContractReads = () => {
        const reads = [];
        if (oaycBalanceOf) {
            for (let i = 0; i < oaycBalanceOf.toNumber(); i++) {
                reads.push({...getOaycNfts, args: [address, i]});
            }
        }
        return reads;
    };

    const {data: oaycNfts} = useContractReads({
        contracts: getContractReads(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `https://oayc.io:3000/${i.toString()}.png`,
            level: 0
        })),
        enabled: oaycBalanceOfIsSuccess
    });


    const nfts = [...(oaycNfts ?? [])] as unknown as NftMutate[];

    return {
        nfts,
        isSuccess,
        isError,
        setIsSuccess,
        setIsError
    };


};