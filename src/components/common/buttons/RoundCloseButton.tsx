import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 29px;
  width: 29px;
  border-radius: 50%;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

const CloseIcon = styled.div`
  background: url("/images/svg/close-icon.svg") no-repeat center;
  height: 11px;
  width: 11px;
`;

const RoundCloseButton: FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <StyledButton {...props}>
      <CloseIcon />
    </StyledButton>
  );
};

export default RoundCloseButton;
