import React, { useRef, useState } from "react";
import { PositionInfoTooltip } from "./components/PositionInfoTooltip";
import styled from "styled-components";
import ImageSelector from "./components/ImageSelector";
import { useOutsideClick } from "../../hooks/utils/useOutsideClick";
import { NftInfo } from "../../web3/types/NFT";
import { BigNumber } from "ethers";

const StyledPositionList = styled(ImageSelector)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 60px;
  gap: 5px;
  justify-items: center;
  align-items: center;
`;

const StyledItem = styled.div`
  position: relative;
  width: 165px;
  height: 165px;
  border: 2px solid #ff0420;

  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: #ff0420;
  }
`;

const UnstakeButton = styled.button`
  position: absolute;
  outline: 1px solid #ff0420;
  border: none;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f0ebdf;
  color: #ff0420;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0420;
    color: white;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const StyledInfoIcon = styled.div`
  background: url("/images/svg/info-icon.svg");
  height: 24px;
  width: 24px;
  position: absolute;
  top: -1px;
  right: -1px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

enum DepositType {
  staking,
  lock,
}

interface PositionProps {
  stakedNfts: NftInfo[];
  accruedReward: BigNumber;
  remainingPeriod: BigNumber;
  positionKind: DepositType;
  claim: () => void;
}

export const Position = (props: PositionProps) => {
  const { stakedNfts, accruedReward, remainingPeriod, positionKind, claim } =
    props;

  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef(null);
  const { current: hideInfo } = useRef(() => setShowInfo(false));
  useOutsideClick(infoRef, hideInfo);

  return (
    <StyledItem>
      <StyledPositionList
        twoColumns={true}
        data={stakedNfts}
        selectable={false}
      />
      <StyledInfoIcon ref={infoRef} onClick={() => setShowInfo(true)} />
      <InfoContainer>
        <PositionInfoTooltip
          show={showInfo}
          accruedReward={accruedReward}
          remainingPeriod={remainingPeriod}
        />
        <UnstakeButton hidden={showInfo} onClick={claim}>
          {positionKind === DepositType.staking ? "Unstake" : "Unlock"}
        </UnstakeButton>
      </InfoContainer>
    </StyledItem>
  );
};
