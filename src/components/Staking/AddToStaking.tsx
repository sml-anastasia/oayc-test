import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ImageSelector from "./components/ImageSelector";
import { NftInfo } from "../../web3/types/NFT";
import { StatusModals } from "./components/StatusModals/StatusModals";
import { useStaking } from "../../hooks/contract/staking/useStaking";
import { BigNumber } from "ethers";
import Modal from "../common/ovarlays/Modal";
import { RedRoundCloseButton } from "./components/RedRoundCloseButton";
import OaycButton from "../common/buttons/OaycButton";
import { sortArraysBySameValues } from "./utils/sorting";
import { device } from "../../styles/device";
import { Select } from "./components/Select";

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin: 0;

  display: flex;
  overflow: auto;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 14px;

  transition: 0.3s;

  @media screen and ${device.tablet} {
    width: 420px;
    margin: 0 122px 61px;
  }
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

const SelectWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
`;

const StyledStakingButton = styled(OaycButton)`
  width: 100%;
  @media (max-width: 480px) {
    width: 315px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
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
    <StyledModal isOpen={isOpen} onClose={onClose}>
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

        <SelectWrapper>
          <Select
            value={selectedDepositType}
            options={["STAKE", "LOCK"]}
            onChange={setSelectedDepositType}
            selectedOption={["STAKE", "LOCK"].find(
              (item: string, index: number) => selectedDepositType === index
            )}
          />
          <Select
            value={selectedPeriod}
            options={["1 day", "7 days", "28 days"]}
            onChange={setSelectedPeriod}
            selectedOption={["1 day", "7 days", "28 days"].find(
              (item: string, index: number) => selectedPeriod === index
            )}
          />
        </SelectWrapper>

        {isApproveNeeded ? (
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
