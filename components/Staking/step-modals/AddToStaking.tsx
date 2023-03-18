import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useOaycNftsOfAddress } from "../../../hooks/contract/util/useOaycNftsOfAddress";
import { AddressZero } from "@ethersproject/constants";
import { useMoaycNftsOfAddress } from "../../../hooks/contract/util/useMoaycNftsOfAddress";
import styled from "styled-components";
import { Tabs } from "../Tabs/Tabs";
import ImageSelector from "../ImageSelector";
import { NftInfo } from "../../../types/NFT";
import { StakingButton } from "../../Button/StakingButton";
import { StatusModals } from "../StatusModals/StatusModals";
import { useStaking } from "../../../hooks/contract/useStaking";
import { BigNumber } from "ethers";

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 42px;
  line-height: 90%;
  font-weight: 700;
  font-style: italic;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 40px;
`;

const StyledTabs = styled(Tabs)`
  margin: 0 auto 20px;
`;

enum DepositType {
  staking,
  lock,
}

enum StakingPeriod {
  _1h,
  _1d,
  _1w,
  _1m,
}

export const AddToStaking = () => {
  const { address } = useAccount();

  const { oaycNfts } = useOaycNftsOfAddress(address ?? AddressZero);
  const { moaycNfts } = useMoaycNftsOfAddress(address ?? AddressZero);

  const [selectedNft, setSelectedNft] = useState<NftInfo[]>([]);
  const [selectedDepositType, setSelectedDepositType] = useState<DepositType>(
    DepositType.staking
  );
  const [selectedPeriod, setSelectedPeriod] = useState<StakingPeriod>(
    StakingPeriod._1h
  );

  const { stake } = useStaking([
    [BigNumber.from(+selectedNft[0] || 0)],
    [BigNumber.from(0)],
    BigNumber.from(selectedPeriod),
  ]);

  const nfts = [...oaycNfts, ...moaycNfts];

  const { isSuccess, isError, isLoading, dismissSuccess, dismissError } =
    useStaking();

  return (
    <StyledContainer>
      <Title>Add</Title>

      <ImageSelector data={nfts} onSelected={setSelectedNft} />

      <StyledTabs
        value={selectedDepositType}
        tabs={["STAKE", "LOCK"]}
        onChange={setSelectedDepositType}
      />

      <StyledTabs
        value={selectedPeriod}
        tabs={["1 hour", "1 day", "7 days", "28 days"]}
        onChange={setSelectedPeriod}
      />

      <StakingButton onClick={stake} disabled={!selectedNft.length}>
        {selectedDepositType === DepositType.staking ? "Stake" : "Lock"}
      </StakingButton>

      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </StyledContainer>
  );
};
