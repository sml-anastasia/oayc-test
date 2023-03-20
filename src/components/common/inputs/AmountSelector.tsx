import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1.5px solid #87cc01;
  border-radius: 6px;
  padding: 5.5px;
  display: flex;
`;

const StyledSelector = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-grow: 1;
`;

const SelectorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

const PlusButton = styled.div`
  background: url("/images/svg/plus-icon.svg") no-repeat center;
  height: 10px;
  width: 10px;
`;

const MinusButton = styled.div`
  background: url("/images/svg/minus-icon.svg") no-repeat center;
  height: 10px;
  width: 10px;
`;

interface AmountSelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

const AmountSelector = ({ onChange, value, max = 1 }: AmountSelectorProps) => {
  const handlePlus = () => {
    const newValue = value + 1;
    if (newValue <= max) {
      onChange(newValue);
    }
  };

  const handleMinus = () => {
    const newValue = value - 1;
    if (newValue > 0) {
      onChange(newValue);
    }
  };

  return (
    <StyledContainer>
      <SelectorButton onClick={handleMinus}>
        <MinusButton />
      </SelectorButton>
      <StyledSelector> {value}</StyledSelector>
      <SelectorButton onClick={handlePlus}>
        <PlusButton />
      </SelectorButton>
    </StyledContainer>
  );
};

export default AmountSelector;
