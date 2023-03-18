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

const StyledContaier = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
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

export const AddToStaking = () => {
  const { address } = useAccount();

  const { oaycNfts } = useOaycNftsOfAddress(address ?? AddressZero);
  const { moaycNfts } = useMoaycNftsOfAddress(address ?? AddressZero);

  const [, setSelectedNft] = useState<NftInfo[]>([]);
  const [selectedTabId, setSelectedTabId] = useState(0);

  const nfts = [...oaycNfts, ...moaycNfts];

  const { isSuccess, isError, isLoading, dismissSuccess, dismissError } =
    useStaking();

  return (
    <StyledContaier>
      <Title>Add</Title>

      <ImageSelector data={nfts} onSelected={setSelectedNft} />

      <StyledTabs
        value={selectedTabId}
        tabs={["STAKE", "LOCK"]}
        onChange={setSelectedTabId}
      />

      <StakingButton>Stake</StakingButton>

      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </StyledContaier>
  );
};
