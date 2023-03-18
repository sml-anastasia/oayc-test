import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 83px;
  height: 81px;
`;

const Text = styled.div`
  font-family: "Chalkboard SE", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 95.7%;
  /* or 15px */

  text-align: center;
  letter-spacing: -0.035em;

  color: #c08484;
  margin-bottom: 21px;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 10px;
`;

// interface FailProps {
//   onClose: () => void;
// }

const Fail = () => {
  return (
    <StyledContainer>
      <CloseButtonContainer></CloseButtonContainer>
      <Icon />
      <Text>Fail...</Text>
    </StyledContainer>
  );
};

export default Fail;
