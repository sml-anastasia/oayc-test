import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  size?: "small" | "large" | "x-small";
  fullWidth?: boolean;
}

export const OaycStyledButton = styled.button<ButtonProps>`
  display: flex;
  background: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.secondaryTextColor};
  border-radius: 100px;
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 90%;
  text-transform: uppercase;
  transition: 0.3s;
  width: ${({ fullWidth }) => fullWidth && "100%"};
  padding: 15px 45px;
  justify-content: center;
  align-items: center;
  border: none;

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 12px 31px;
    `}
  ${(props) =>
    props.size === "x-small" &&
    css`
      padding: 2px 5px 2px 20px;
    `}
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

const OaycButton = ({
  children,
  size = "large",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <OaycStyledButton size={size} {...rest}>
      {children}
    </OaycStyledButton>
  );
};

export default OaycButton;
