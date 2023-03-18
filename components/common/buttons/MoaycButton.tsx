import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  size?: "small" | "large" | "x-small";
}

export const MoaycStyledButton = styled.button<ButtonProps>`
  display: flex;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 90%;
  text-transform: uppercase;
  color: #191919;
  transition: 0.3s;
  width: 100%;
  padding: 15px 45px;
  justify-content: center;

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

const MoaycButton = ({
  children,
  size = "large",
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <MoaycStyledButton size={size} {...rest}>
      {children}
    </MoaycStyledButton>
  );
};

export default MoaycButton;
