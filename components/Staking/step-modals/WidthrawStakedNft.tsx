import React, { useState } from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { BigNumber } from "ethers";
import styled from "styled-components";
import ImageSelector from "../ImageSelector";
import { NftInfo } from "../../../types/NFT";
import { StakingButton } from "../../Button/StakingButton";
import { useAccount } from "wagmi";
import { useOaycNftsOfAddress } from "../../../hooks/contract/util/useOaycNftsOfAddress";
import { AddressZero } from "@ethersproject/constants";
import { useMoaycNftsOfAddress } from "../../../hooks/contract/util/useMoaycNftsOfAddress";
import { Tabs } from "../Tabs/Tabs";
import { Positions } from "../Positions/Positions";

const Title = styled.div`
  font-size: 42px;
  line-height: 90%;
  font-weight: 700;
  font-style: italic;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 15px;
  text-transform: uppercase;
`;

const StyledContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled.div`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0 auto;
  margin: 0;
  text-align: center;
`;

const StyledTabs = styled(Tabs)`
  margin: 0 auto 20px;
`;

const StyledBalance = styled.div`
  display: flex;
  margin: 0 auto 20px;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const ClaimButton = styled(StakingButton)`
  height: 30px;
  width: 200px;
`;

enum DepositType {
  staking,
  lock,
}

export const WidthrawStakedNft = () => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const { address } = useAccount();
  const { oaycNfts } = useOaycNftsOfAddress(address ?? AddressZero);
  const { moaycNfts } = useMoaycNftsOfAddress(address ?? AddressZero);
  const [selectedNft, setSelectedNft] = useState<NftInfo[]>([]);

  const [selectedDepositType, setSelectedDepositType] = useState<DepositType>(
    DepositType.staking
  );
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

  const nfts = [...oaycNfts, ...moaycNfts];

  return (
    <StyledContainer>
      <Title>Withdraw</Title>
      <Positions onSelect={(id) => setSelectedPosition(id)} />
      selectedPosition {selectedPosition}
      <StyledTabs
        value={selectedDepositType}
        tabs={["STAKED", "LOCKED"]}
        onChange={setSelectedDepositType}
      />
      <ImageSelector data={nfts} onSelected={setSelectedNft} />
      {selectedNft.length > 0 && (
        <StyledText>Selected: {selectedNft.length} nfts</StyledText>
      )}
      <StakingButton
        size="small"
        onClick={() => {
          claim.write?.();
        }}
        disabled={!selectedNft.length}
      >
        {selectedDepositType === DepositType.staking ? "UnStake" : "UnLock"}
      </StakingButton>
      {/* <Tabs
              selectedId={selectedTabId}
              tabs={tabs}
              onClick={setSelectedTabId}
            /> */}
      {/* <div className={styles.tabPageContent}>
              {selectedTabId === tabs[0].id && <div></div>}
              {selectedTabId === tabs[1].id && <div></div>}
            </div> */}
      {/*<Positions onSelect={(id) => setSelectedPosition(id)} />*/}
      {/* {staked?.map((nft: any) => {
              return (
                <button key={nft} className={styles.item}>
                  {nft} <img src={nft.uri} />
                </button>
              );
            })} */}
      {/*selectedPosition {selectedPosition}*/}
      <StyledText>
        WARNING!<br></br>In case of premature withdrawal, the penalty is 100%
      </StyledText>
      <StyledBalance>
        <StyledText>BALANCE</StyledText>
        <StyledText>{totalReward} $OAYC</StyledText>
        <ClaimButton
          onClick={() => claimAll.write?.()}
          disabled={!selectedNft.length}
        >
          Claim all
        </ClaimButton>
      </StyledBalance>
    </StyledContainer>
  );
};
