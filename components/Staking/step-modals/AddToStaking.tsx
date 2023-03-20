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
  padding: 15px 0px 15px;
  text-transform: uppercase;
`;

const StyledText = styled(Title)`
  font-size: 18px;
  margin: 15px auto 0px;
  padding: 0;
`;

const StyledTabs = styled(Tabs)`
  margin: 15px auto 15px;
`;

const StyledTabs2 = styled(StyledTabs)`
  margin: 0px auto 15px;
`;

// chatGPT func
function sortArraysBySameValues(
  arr1: number[],
  arr2: number[]
): [number[], number[]] {
  const maxLength = Math.max(arr1.length, arr2.length);
  const sortedArr1: number[] = new Array(maxLength).fill(0);
  const sortedArr2: number[] = new Array(maxLength).fill(0);

  const commonValues = arr1.filter((val) => arr2.includes(val));
  commonValues.sort((a, b) => a - b);

  const uniqueArr1 = arr1
    .filter((val) => !arr2.includes(val))
    .sort((a, b) => a - b);
  const uniqueArr2 = arr2
    .filter((val) => !arr1.includes(val))
    .sort((a, b) => a - b);

  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < maxLength; i++) {
    if (commonValues.length > 0) {
      const commonVal = commonValues.shift()!;
      sortedArr1[i] = commonVal;
      sortedArr2[i] = commonVal;
    } else {
      if (uniqueArr1[idx1] !== undefined) {
        sortedArr1[i] = uniqueArr1[idx1++];
      }
      if (uniqueArr2[idx2] !== undefined) {
        sortedArr2[i] = uniqueArr2[idx2++];
      }
    }
  }

  return [sortedArr1, sortedArr2];
}

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
  } = useStaking({
    depositArgs: (() => {
      const oaycs: number[] = [];
      const moaycs: number[] = [];

      selectedNft.forEach((nft) => {
        const isMoayc = nft.level !== 0;

        (!isMoayc ? oaycs : moaycs).push(+nft.id);
      });

      const [o, mo] = sortArraysBySameValues(oaycs, moaycs);

      return [
        o.map((i) => BigNumber.from(i)),
        mo.map((i) => BigNumber.from(i)),
        BigNumber.from(selectedPeriod),
      ];
    })(),
  });

  // useEffect(() => {
  //   if (stakeWait.isSuccess || lockWait.isSuccess) {
  //     closeModal();
  //   }
  // }, [stakeWait.isSuccess, lockWait.isSuccess]);

  function submit() {
    (selectedDepositType === DepositType.staking ? stake : lock)?.();
  }

  const stakedNfts = positions.reduce<NftInfo[]>((all, position) => {
    all.push(...position.stakedNfts);
    return all;
  }, []);

  const availableForStaking = nfts.filter(({ id, level }) => {
    // TODO: maybe refactor for optimization
    return !stakedNfts.find((stakedNft) => {
      return stakedNft.id === id && stakedNft.level === level;
    });
  });

  return (
    <StyledContainer>
      <Title>Add nft</Title>

      {availableForStaking.length > 0 ? (
        <ImageSelector
          twoColumns={false}
          data={availableForStaking}
          onSelected={setSelectedNft}
        />
      ) : (
        "no nft for staking"
      )}

      {selectedNft.length > 0 && (
        <StyledText>Selected: {selectedNft.length} nfts</StyledText>
      )}

      <StyledTabs
        value={selectedDepositType}
        tabs={["STAKE", "LOCK"]}
        onChange={setSelectedDepositType}
      />

      <StyledTabs2
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
        dismissSuccess={() => {
          dismissSuccess();
          closeModal();
        }}
        dismissError={dismissError}
      />
    </StyledContainer>
  );
};
