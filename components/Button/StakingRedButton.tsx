import React from "react";
import MoaycButton from "../common/buttons/MoaycButton";
import styled from "styled-components";

const StakingButtonCss = styled.button`
  background-color: "#ff0420";
  color: white;
  min-width: 237px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: inline-flex;
`;

const StakingRedButton = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StakingButtonCss>
      <MoaycButton backgroundColor="red" {...rest}>
        {children}
      </MoaycButton>
    </StakingButtonCss>
  );
};

export default StakingRedButton;
