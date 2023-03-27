import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ethers } from "ethers";
import { useApedBalance } from "../../../hooks/contract/useApedBalance";

const StyledBalance = styled.div`
  display: flex;
  position: relative;
  border-radius: 100px;
  font-size: 12px;
  align-items: center;
  padding: 5px 5px 5px 17px;
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
  decimals?: number;
}

export const Balance = ({ decimals = 3 }: BalanceProps) => {
  const { balance } = useApedBalance();
  return (
    <StyledBalance>
      <StyledName>Balance</StyledName>
      <StyledTokens>
        {parseFloat(ethers.utils.formatEther(balance)).toFixed(decimals)}
        $OAYC
      </StyledTokens>
      <Image
        src="/images/svg/wallet.svg"
        alt="wallet_icon"
        width={23}
        height={23}
        layout="fixed"
      />
    </StyledBalance>
  );
};
