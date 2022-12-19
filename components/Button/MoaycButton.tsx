import React from 'react';
import styled, { css } from "styled-components";
import { device } from "../../styles/device";

interface ButtonProps {
    size?: "small" | "large";
}

const StyledButton = styled.div<ButtonProps>`
  display: inline-block;
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  border-radius: 25px;


  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 90%;
  text-transform: uppercase;
  color: #191919;
  transition: 0.3s;

  padding: 15px 45px;
  @media screen and ${device.tablet} {
    padding: 19px 37px;
  }

  ${props => props.size === "small" && css`
    padding: 12px 31px !important;
  `}
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }

`;


const MoaycButton = ({children, size = "large", ...rest}: React.HTMLAttributes<HTMLDivElement> & ButtonProps) => {
    return (
        <StyledButton size={size} {...rest}>
            {children}
        </StyledButton>
    );
};

export default MoaycButton;