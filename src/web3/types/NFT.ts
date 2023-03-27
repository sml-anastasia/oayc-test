import { BigNumber } from "ethers";

export interface NftInfo {
  id: string;
  uri: string;
  level: number;
}

export enum DepositType {
  staking,
  lock,
}

export interface PositionData {
  stakedNfts: NftInfo[];
  positionId: BigNumber;
  accruedReward: BigNumber;
  positionKind: DepositType;
  remainingPeriod: BigNumber;
}

export const getDefaultNftInfo = (): NftInfo => ({
  id: "-1",
  uri: "",
  level: -1,
});
