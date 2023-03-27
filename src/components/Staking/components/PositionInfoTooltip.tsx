import React, { memo } from "react";
import Image from "next/image";
import { BigNumber, ethers } from "ethers";
import styled from "styled-components";

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
`;

const toHHMMSS = (secs: string) => {
  const sec_num = parseInt(secs, 10);
  let hours: string | number = Math.floor(sec_num / 3600);
  let minutes: string | number = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: string | number = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

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
        />
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
