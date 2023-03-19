import React, { useEffect, useState } from "react";
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
  overflow: auto;
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
  padding-top: 15px;
  text-transform: uppercase;
`;

const StyledText = styled(Title)`
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

const StyledTabs = styled(Tabs)`
  margin: 0 auto 20px;
`;

enum DepositType {
  staking,
  lock,
}

enum StakingPeriod {
  _1d,
  _1w,
  _1m,
}

interface Props {
  closeModal: () => void;
}

export const AddToStaking = ({ closeModal }: Props) => {
  const { address, isConnected } = useAccount();

  const { oaycNfts } = useOaycNftsOfAddress(
    address ?? AddressZero,
    isConnected
  );
  const { moaycNfts } = useMoaycNftsOfAddress(
    address ?? AddressZero,
    isConnected
  );

  const [selectedNft, setSelectedNft] = useState<NftInfo[]>([]);
  const [selectedDepositType, setSelectedDepositType] = useState<DepositType>(
    DepositType.staking
  );
  const [selectedPeriod, setSelectedPeriod] = useState<StakingPeriod>(
    StakingPeriod._1d
  );

  const nfts = [...oaycNfts, ...moaycNfts];

  const {
    isSuccess,
    isError,
    isLoading,
    dismissSuccess,
    dismissError,
    positions,
    stake,
    lock,
    stakeWait,
    lockWait,
  } = useStaking({
    depositArgs: (() => {
      const oaycs: BigNumber[] = [];
      const moaycs: BigNumber[] = [];

      selectedNft.forEach((nft) => {
        const isMoayc = nft.level !== 0;

        (!isMoayc ? oaycs : moaycs).push(BigNumber.from(+nft.id));
      });

      // if (oyacs.length !== moyacs.length) {
      //   const maxLength = Math.max(oyacs.length, moyacs.length);

      //   for (let i = 0; i < maxLength; i++) {
      //     const element = array[i];

      //   }

      // }

      // // if (oyacs.length !== moaycNfts.length) {
      // //   // temp
      // //   alert("lenght not correct");
      // // }

      return [oaycs, moaycs, BigNumber.from(selectedPeriod)];
      // function filterSelected(selectedNft: NftInfo[]) {}
    })(),
  });

  useEffect(() => {
    if (stakeWait.isSuccess || lockWait.isSuccess) {
      closeModal();
    }
  }, [stakeWait.isSuccess, lockWait.isSuccess]);

  function submit() {
    (selectedDepositType === DepositType.staking ? stake : lock)?.();
  }

  const stakedNfts = positions.reduce<NftInfo[]>((all, position) => {
    all.push(...position.stakedNfts);
    return all;
  }, []);

  return (
    <StyledContainer>
      <Title>Add nft</Title>

      <ImageSelector
        data={nfts.filter(({ id, level }) => {
          // TODO: maybe refactor for optimization
          return !stakedNfts.find((stakedNft) => {
            return stakedNft.id === id && stakedNft.level === level;
          });
        })}
        onSelected={setSelectedNft}
      />

      {selectedNft.length > 0 && (
        <StyledText>Selected: {selectedNft.length} nfts</StyledText>
      )}

      <StyledTabs
        value={selectedDepositType}
        tabs={["STAKE", "LOCK"]}
        onChange={setSelectedDepositType}
      />

      <StyledTabs
        value={selectedPeriod}
        tabs={["1 day", "7 days", "28 days"]}
        onChange={setSelectedPeriod}
      />

      <StakingButton onClick={submit} disabled={!selectedNft.length}>
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
