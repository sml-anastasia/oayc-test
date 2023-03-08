import React from 'react';
import styled from "styled-components";

type ButtonColor = "default" | "red";
type ButtonVariant = "contained" | "outline";

interface OaycButtonStyleProps {
    color?: ButtonColor;
    variant?: ButtonVariant;

}


const getButtonBgColor = (variant?: ButtonColor) => {
    switch (variant) {
        case "default":
            return "rgba(0,0,0,0.07)";
        case "red":
            return "#FF0420";
        default:
            return "rgba(0,0,0,0.07)";
    }
};

const getButtonHoverColor = (variant?: ButtonColor) => {
    switch (variant) {
        case "default":
            return "#FF0420";
        case "red":
            return "#636363";
        default:
            return "#FF0420";
    }
};

const getButtonTextColor = (variant?: ButtonColor) => {
    switch (variant) {
        case "default":
            return "#636363";
        case "red":
            return "#F0EBDF";
        default:
            return "#636363";
    }
};

const getButtonTextHoverColor = (variant?: ButtonColor) => {
    switch (variant) {
        case "default":
            return "#F0EBDF";
        case "red":
            return "#F0EBDF";
        default:
            return "#F0EBDF";
    }
};


const StyledButton = styled.button<OaycButtonStyleProps>`
  font-family: "Rubik", serif;

  background: ${(props) => getButtonBgColor(props.color)};
  color: ${(props) => getButtonTextColor(props.color)};

  border-radius: 100px;
  border: none;
  padding: 1em 2em;
  font-weight: 700;
  font-size: 18px;
  line-height: 90%;

  font-style: italic;

  &:hover {
    background: ${(props) => getButtonHoverColor(props.color)};
    color: ${(props) => getButtonTextHoverColor(props.color)};
    transition: 0.3s;
  }

  &:disabled {
    opacity: 0.4;

    &:hover {
      background: ${(props) => getButtonBgColor(props.color)};
      color: ${(props) => getButtonTextColor(props.color)};
    }
  }
`;


const Button = ({
                    color = "default",
                    variant = "contained",
                    children,
                    ...props
                }: React.ButtonHTMLAttributes<HTMLButtonElement> & OaycButtonStyleProps) => {
    return (
        <div>
            <StyledButton color={color} variant={variant} {...props}>
                {children}
            </StyledButton>
        </div>

    );
};

export default Button;