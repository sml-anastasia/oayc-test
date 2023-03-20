import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 150px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const Icon = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 91px;
  height: 86px;
`;

const Text = styled.div`
  font-size: 42px;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  color: #ff0420;
  line-height: 95.7%;
  text-align: center;
  letter-spacing: -0.035em;
  margin-bottom: 40px;
`;

const Processing = () => {
  return (
    <StyledContainer>
      <Icon />
      <Text>Processing...</Text>
    </StyledContainer>
  );
};

export default Processing;
