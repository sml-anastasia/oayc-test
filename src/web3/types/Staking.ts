export type StakingPosition = {
  remainingPeriod: bigint;
  maximumReward: bigint;
  stakedPeriod: bigint;
  accruedReward: bigint;
  arrayIdsMoayc: bigint[];
  positionKind: boolean;
  arrayIdsOayc: bigint[];
};

export type StakeMode = "widthraw" | "stake" | "none";
