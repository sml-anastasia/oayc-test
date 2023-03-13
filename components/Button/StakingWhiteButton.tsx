import React from "react";
import MoaycButton from "../common/buttons/MoaycButton";
import styled from "styled-components";

const StakingButtonCss = styled.button`
  color: white;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: start;
`;

const StakingWhiteButton = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StakingButtonCss>
      <MoaycButton size="x-small" {...rest}>
        {children}
      </MoaycButton>
    </StakingButtonCss>
  );
};

export default StakingWhiteButton;
