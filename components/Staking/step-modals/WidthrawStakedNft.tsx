import React, { useState } from "react";
import { Positions } from "../Positions/Positions";
import { useStaking } from "../../../hooks/contract/useStaking";
import { BigNumber } from "ethers";

export const WidthrawStakedNft = () => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const { claim, claimAll, positions } = useStaking({
    claimPositionId:
      selectedPosition !== null ? BigNumber.from(selectedPosition) : undefined,
  });

  const totalReward =
    positions.reduce(
      (total, { accruedReward }) => total + +accruedReward.toString(),
      0
    ) /
    10 ** 18;

  return (
    <div
      style={{
        overflow: "auto",
      }}
    >
      <h1>Withdraw</h1>
      <Positions onSelect={(id) => setSelectedPosition(id)} />
      selectedPosition {selectedPosition}
      <div>WARNING! In case of premature withdrawal, the penalty is 100%</div>
      <div>
        <button
          onClick={() => {
            claim.write?.();
          }}
        >
          unstake
        </button>
        {/* <button onClick={}>unstake all</button> */}
      </div>
      {totalReward && (
        <div>
          BALANCE: {totalReward}
          <button onClick={() => claimAll.write?.()}>CLAIM ALL</button>
        </div>
      )}
    </div>
  );
};
