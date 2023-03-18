import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: end;
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 95.7%;
  text-align: center;
  letter-spacing: -0.035em;
  color: #6684a8;
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
