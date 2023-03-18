import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85px;
  height: 94px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 95.7%;
  text-align: center;
  letter-spacing: -0.035em;
  color: #84c098;
  margin-bottom: 31px;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 10px;
`;

// interface SuccessProps {
//   onClose: () => void;
// }

const Success = () => {
  return (
    <StyledContainer>
      <CloseButtonContainer></CloseButtonContainer>
      <Icon />
      <Text>Success!</Text>
    </StyledContainer>
  );
};

export default Success;
