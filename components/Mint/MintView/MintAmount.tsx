import React from 'react';
import styled from "styled-components";


interface MintAmountProps {
    value: any,
    onChange: (e: any) => void;
}

const MintAmount = styled.input`
  border-radius: 100px;
  padding: 1em 2em;
  background: rgba(0,0,0,0.07);
  border: none;
  color: #636363;
  width: 100px;
  text-align: center;

  font-weight: 700;
  font-size: 15px;
  font-family: "Rubik", serif;
  
  &:focus {
    outline-color: #FF0420;
  }
`;


export default MintAmount;