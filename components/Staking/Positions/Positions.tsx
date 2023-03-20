import React, { useState } from "react";
import { useStaking } from "../../../hooks/contract/useStaking";
import { BigNumber, ethers } from "ethers";
import ImageSelector from "../ImageSelector";
import styled from "styled-components";
import InfoIcon from "./InfoIcon";
import Image from "next/image";
import { StatusModals } from "../StatusModals/StatusModals";

const StyledPositionList = styled(ImageSelector)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 60px;
  gap: 5px;
  justify-items: center;
  align-items: center;
`;

const StyledItem = styled.div<{ active: boolean }>`
  position: relative;
  width: 165px;
  height: 165px;
  border: 1.5px solid #ff0420;

  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
  z-index: 2;

  &:hover {
    border-color: #ff0420;
  }
`;

const UnstakeButton = styled.button`
  position: absolute;
  border: 1px solid #ff0420;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f0ebdf;
  color: #ff0420;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0420;
    color: white;
  }
`;

const PositionsContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  height: 100%;
  overflow-y: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: center;
    margin: 0px auto;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin: 20px 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 11;
`;

const StyledInfoIcon = styled(InfoIcon)`
  cursor: pointer;
  transition: color 0.3s;
  z-index: 10;

  &:hover {
    color: #ff0420;
  }
`;

const InfoTooltip = styled.div`
  position: absolute;
  background-color: #f0ebdf;
  border-radius: 0 0 5px 5px;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ff0420;
  color: #ff0420;
  white-space: nowrap;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

interface Props {
  onSelect?: (id: number) => void;
}

export const Positions = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState<number | null>(null);

  const {
    positions,
    claim,
    isSuccess,
    isError,
    isLoading,
    dismissSuccess,
    dismissError,
  } = useStaking({
    claimPositionId: selected !== null ? BigNumber.from(selected) : undefined,
  });

  function handleSelect(id: number) {
    setSelected(id);
    onSelect?.(id);
  }

  return (
    <PositionsContainer>
      {positions.map(
        ({ positionId, stakedNfts, accruedReward, remainingPeriod }) => {
          const id = +positionId.toString();
          return (
            <StyledItem
              key={id}
              onClick={() => {
                handleSelect(id);
              }}
              active={id === selected}
            >
              <StyledInfoIcon
                handleMouseEnter={() => setShowInfo(id)}
                handleMouseLeave={() => setShowInfo(null)}
              />
              <StyledPositionList
                twoColumns={true}
                data={stakedNfts}
                selectable={false}
              />
              <InfoContainer>
                {showInfo === id ? (
                  <InfoTooltip>
                    <Image
                      src="/images/svg/money.svg"
                      alt="money"
                      width="12px"
                      height="12px"
                    />
                    {parseFloat(
                      ethers.utils.formatEther(accruedReward)
                    ).toFixed(4)}{" "}
                    $OAYC
                    <br />
                    <span>
                      <Image
                        src="/images/svg/time.svg"
                        alt="time"
                        width="10px"
                        height="10px"
                      />{" "}
                      {(+remainingPeriod.toString() / 60).toFixed(1)} mins
                    </span>
                  </InfoTooltip>
                ) : (
                  <UnstakeButton
                    onClick={() => {
                      claim.write?.({
                        recklesslySetUnpreparedArgs: [
                          BigNumber.from(positionId),
                        ],
                      });
                    }}
                  >
                    Unstake
                  </UnstakeButton>
                )}
              </InfoContainer>
            </StyledItem>
          );
        }
      )}

      <StatusModals
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        dismissSuccess={dismissSuccess}
        dismissError={dismissError}
      />
    </PositionsContainer>
  );
};
