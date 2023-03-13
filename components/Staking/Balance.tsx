import React from "react";
import styled from "styled-components";
import type { FetchBalanceResult } from "@wagmi/core";
import Image from "next/image";

const StyledBalance = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  align-items: center;
  flex-direction: row;
  padding: 5px 5px 5px 15px;
  align-items: center;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;
  background-color: #dfdbcf;
`;

const StyledName = styled.div`
  color: #636363;
  text-transform: uppercase;
  padding-right: 32px;
`;

const StyledTokens = styled.div`
  color: #ff0420;
  padding-right: 16px;
`;

interface BalanceProps {
  balance: FetchBalanceResult | undefined;
}

const Balance = ({ balance }: BalanceProps) => {
  return (
    <div>
      <StyledBalance>
        <StyledName>Balance</StyledName>
        <StyledTokens>{balance?.decimals} $OAYC</StyledTokens>
        <Image
          src="/images/svg/wallet.svg"
          alt="wallet_icon"
          width={23}
          height={23}
        />
      </StyledBalance>
    </div>
  );
};

export default Balance;
