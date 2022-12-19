import React, { useState } from 'react';
import styled from "styled-components";


const StyledContainer = styled.div`
  border: 1.5px solid #87CC01;
  border-radius: 6px;
  padding: 5.5px;
  display: flex;
`;

const StyledSelector = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
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
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
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
    onChange?: (value: number) => void;
}

const AmountSelector = ({onChange}: AmountSelectorProps) => {
    const [value, setValue] = useState(1);

    const handlePlus = () => {
        const newValue = value + 1;
        if (newValue <= 20) {
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    const handleMinus = () => {
        const newValue = value - 1;
        if (newValue > 0) {
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <StyledContainer>
            <SelectorButton onClick={handlePlus}>
                <PlusButton/>
            </SelectorButton>
            <StyledSelector> {value}</StyledSelector>
            <SelectorButton onClick={handleMinus}>
                <MinusButton/>
            </SelectorButton>
        </StyledContainer>
    );
};

export default AmountSelector;