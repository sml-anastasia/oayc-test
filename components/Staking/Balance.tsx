import React from "react";
import styled from "styled-components";
import type { FetchBalanceResult } from "@wagmi/core";

const StyledBalance = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  color: white;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
`;

const Styled = styled.div`
  position: relative;
`;

interface BalanceProps {
  balance: FetchBalanceResult | undefined;
}

const Balance = ({ balance }: BalanceProps) => {
  return (
    <div>
      <StyledBalance>
        <Styled>Balance</Styled>
        <Styled></Styled>
        <Styled> $OAYC</Styled>
      </StyledBalance>
    </div>
  );
};

export default Balance;
