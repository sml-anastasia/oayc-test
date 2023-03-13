import MoaycButton from "../common/buttons/MoaycButton";
import React from "react";
import styled from "styled-components";

const StakingButtonCss = styled.button`
  color: white;
  border-radius: 100px;
  border: none;
  min-width: 237px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
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
