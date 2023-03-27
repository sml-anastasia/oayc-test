import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Tabs } from "./components/Tabs";
import ImageSelector from "./components/ImageSelector";
import { NftInfo } from "../../web3/types/NFT";
import { StatusModals } from "./components/StatusModals/StatusModals";
import { useStaking } from "../../hooks/contract/staking/useStaking";
import { BigNumber } from "ethers";
import Modal from "../common/ovarlays/Modal";
import { RedRoundCloseButton } from "./components/RedRoundCloseButton";
import OaycButton from "../common/buttons/OaycButton";

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
  padding: 15px 0 15px;
  text-transform: uppercase;
`;

const StyledText = styled(Title)`
  font-size: 18px;
  margin: 15px auto 0;
  padding: 0;
`;

const StyledModal = styled(Modal)`
  position: relative;
  color: #ff0420;
  background-color: #f0ebdf;
  border: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  margin: 15px auto 15px;

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }

  @media (max-width: 375px) {
    height: 60px;
  }
`;

const StyledTabs2 = styled(StyledTabs)`
  margin: 0 auto 15px;

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
    width: 450px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 340px;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 60px;
  }
`;

const StyledStakingButton = styled(OaycButton)`
  @media (max-width: 480px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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

interface AddToStakingProps {
  onClose: () => void;
  isOpen: boolean;
}

export const AddToStaking = ({ onClose, isOpen }: AddToStakingProps) => {
  const [selectedNft, setSelectedNft] = useState<NftInfo[]>([]);
  const [selectedDepositType, setSelectedDepositType] = useState<DepositType>(
    DepositType.staking
  );
  const [selectedPeriod, setSelectedPeriod] = useState<StakingPeriod>(
    StakingPeriod._1d
  );
  const depositArgs: [BigNumber[], BigNumber[], BigNumber] = useMemo(() => {
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
  }, [selectedNft, selectedPeriod]);

  const resetSelectedNfts = () => setSelectedNft([]);

  const {
    isSuccess,
    isError,
    isApproveNeeded,
    setApprovalForAll,
    isLoading,
    dismissSuccess,
    dismissError,
    availableForStaking,
    lockOrStake,
  } = useStaking(
    selectedDepositType,
    depositArgs,
    resetSelectedNfts,
    resetSelectedNfts
  );

  return (
    <StyledModal isOpen={isOpen} width={688} onClose={onClose}>
      <RedRoundCloseButton onClose={onClose} />
      <StyledContainer>
        <Title>Add nft</Title>
        {availableForStaking.length > 0 ? (
          <>
            <ImageSelector
              twoColumns={false}
              data={availableForStaking}
              onSelected={setSelectedNft}
            />
            <StyledText>Selected: {selectedNft.length} nfts</StyledText>
          </>
        ) : (
          <StyledText>no nft for staking</StyledText>
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

        {selectedDepositType === DepositType.lock && isApproveNeeded ? (
          <StyledStakingButton
            onClick={setApprovalForAll}
            disabled={!selectedNft.length}
          >
            {"Approve"}
          </StyledStakingButton>
        ) : (
          <StyledStakingButton
            onClick={lockOrStake}
            disabled={!selectedNft.length}
          >
            {selectedDepositType === DepositType.staking ? "Stake" : "Lock"}
          </StyledStakingButton>
        )}

        <StatusModals
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          dismissSuccess={dismissSuccess}
          dismissError={dismissError}
        />
      </StyledContainer>
    </StyledModal>
  );
};
