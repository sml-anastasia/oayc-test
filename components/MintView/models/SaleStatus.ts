import { BigNumber } from "ethers";

export enum SaleStatus {
    Closed,
    SoldOut,
    WhiteListMint,
    PublicMint,
    NotStarted
}


export interface SaleInfo {
    stage: SaleStatus,
    whiteListStart: BigNumber,
    publicStart: BigNumber,
    saleOpen: boolean,
    supply: BigNumber,
    minted: BigNumber,
    pricePerTokenWl: BigNumber,
    pricePerTokenPublic: BigNumber,
}

