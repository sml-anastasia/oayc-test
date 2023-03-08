import { useContractRead } from "wagmi";
import { config } from "../../connection/connection";
import { SaleStatus } from "../../components/Mint/MintView/models/SaleStatus";
import { BigNumber, ethers } from "ethers";
import { mutantContractAbi } from "../../contracts";

export enum Status {
    Closed,
    SoldOut,
    WhiteListMint,
    PublicMint,
    Mutation,
    NotStarted
}


export const useMoaycStatus = () => {
    const {
        data: saleInfo,
        refetch: updateSaleInfo
    } = useContractRead({
        address: config.moaycContract,
        abi: mutantContractAbi,
        functionName: 'info',
        staleTime: 10000
    });

    const pricePerTokenWl = saleInfo?.pricePerTokenWl ? ethers.utils.formatEther(saleInfo?.pricePerTokenWl) : 0;
    const pricePerTokenPublic = saleInfo?.pricePerTokenPublic ? ethers.utils.formatEther(saleInfo?.pricePerTokenPublic) : 0;
    const mutationPrice = saleInfo?.mutationPrice ? ethers.utils.formatEther(saleInfo?.mutationPrice) : 0;

    const notStarted = saleInfo?.stage === Status.NotStarted;
    const mutation = saleInfo?.stage === Status.Mutation;
    const publicMint = saleInfo?.stage === Status.PublicMint;
    const whitelistMint = saleInfo?.stage === Status.WhiteListMint;
    const soldOut = saleInfo?.stage === Status.SoldOut;
    const closed = saleInfo?.stage === SaleStatus.Closed;

    const getCurrentPrice = () => {
        if (publicMint) {
            return Number(pricePerTokenPublic);
        } else if (whitelistMint) {
            return Number(pricePerTokenWl);
        } else if (mutation) {
            return Number(mutationPrice);
        } else {
            return 0;
        }
    };

    return {
        saleInfo,
        notStarted,
        mutation,
        publicMint,
        whitelistMint,
        soldOut,
        closed,
        pricePerTokenWl,
        pricePerTokenPublic,
        mutationPrice,
        supply: saleInfo?.supply || BigNumber.from(0),
        minted: saleInfo?.minted || BigNumber.from(0),
        currentPrice: getCurrentPrice(),
        updateSaleInfo,
    };

};