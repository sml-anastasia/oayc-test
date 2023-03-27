import React, { memo } from "react";
import Image from "next/image";
import { BigNumber, ethers } from "ethers";
import styled from "styled-components";
import { toHHMMSS } from "../utils/time";

interface PositionInfoTooltipProps {
  show: boolean;
  accruedReward: BigNumber;

  remainingPeriod: BigNumber;
}

const InfoTooltip = styled.div`
  position: absolute;
  background-color: #f0ebdf;
  border-radius: 10px 10px 8px 8px;
  padding: 5px 10px;
  font-size: 14px;
  outline: 2px solid #ff0420;
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
  font-style: italic;
  font-weight: 700;
`;

// eslint-disable-next-line react/display-name
export const PositionInfoTooltip = memo((props: PositionInfoTooltipProps) => {
  const { show, accruedReward, remainingPeriod } = props;

  const formattedReward = parseFloat(
    ethers.utils.formatEther(accruedReward)
  ).toFixed(4);

  const formattedRemainingPeriod = toHHMMSS(remainingPeriod.toString());

  return (
    <InfoTooltip hidden={!show}>
      <span>
        <Image
          src="/images/svg/money.svg"
          alt="money"
          width="12px"
          height="12px"
        />{" "}
        {formattedReward} $OAYC
      </span>
      <span>
        <Image
          src="/images/svg/time.svg"
          alt="time"
          width="10px"
          height="10px"
        />{" "}
        {formattedRemainingPeriod}
      </span>
    </InfoTooltip>
  );
});
