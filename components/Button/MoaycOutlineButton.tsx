import React from 'react';
import styled, { css } from "styled-components";

interface ButtonProps {
    size?: "small" | "large";
}

const StyledButton = styled.div<ButtonProps>`
  display: flex;
  border-radius: 8px;

  border: 1.5px solid #87CC01;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 90%;
  text-transform: uppercase;
  color: #87CC01;
  transition: 0.3s;

  justify-content: center;
  align-items: center;
  padding: 17px;


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


const MoaycOutlineButton = ({
                                children,
                                size = "large",
                                ...rest
                            }: React.HTMLAttributes<HTMLDivElement> & ButtonProps) => {
    return (
        <StyledButton size={size} {...rest}>
            {children}
        </StyledButton>
    );
};

export default MoaycOutlineButton;