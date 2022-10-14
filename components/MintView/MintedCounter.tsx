import React from 'react';
import styled from "styled-components";

const Counter = styled.p`
  font-family: 'Rubik', serif;
  font-style: italic;
  overflow-wrap: break-word;
  font-weight: 700;
  font-size: 54px;
  line-height: 90.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FF0420;
`;

const MintedCounter = ({data}: { data: string }) => {
    return (
        <Counter>
            {data}
        </Counter>
    );
};

export default MintedCounter;