import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../../styles/device";

interface ButtonProps {
  size?: "small" | "large" | "x-small";
  backgroundColor?: "green" | "red";
}

export const MoaycStyledButton = styled.div<ButtonProps>`
  display: inline-block;
  background: ${(props) =>
    props.backgroundColor === "red"
      ? "#FF0420"
      : props.backgroundColor === "green"
      ? "linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%)"
      : "#DFDBCF"};
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 90%;
  text-transform: uppercase;
  color: ${(props) =>
    props.backgroundColor === "red"
      ? "#F0EBDF"
      : props.backgroundColor === "green"
      ? "#191919"
      : "#636363"};
  border-radius: 25px;
  transition: 0.3s;
  width: 100%;
  padding: 15px 45px;
  @media screen and ${device.tablet} {
    padding: "19px 37px;";
  }

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 12px 31px !important;
    `}
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }

  ${(props) =>
    props.size === "x-small" &&
    css`
      padding: 2px 5px 2px 20px !important;
    `}

  ${(props) =>
    (props.size === "x-small" || props.backgroundColor === "red") &&
    css`
      height:64px; !important;
      display: flex;
      align-items:center;
    `}
`;

const MoaycButton = ({
  children,
  size = "large",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & ButtonProps) => {
  return (
    <MoaycStyledButton size={size} {...rest}>
      {children}
    </MoaycStyledButton>
  );
};

export default MoaycButton;
