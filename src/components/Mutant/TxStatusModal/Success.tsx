import React from "react";
import styled from "styled-components";
import RoundCloseButton from "../../common/buttons/RoundCloseButton";

const StyledSuccess = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const SuccessIcon = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("/images/svg/success-icon.svg") no-repeat top;
  width: 73px;
  height: 73px;
`;

const Text = styled.div`
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 31px;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 10px;
`;

interface SuccessProps {
  onClose: () => void;
}

const Success = ({ onClose }: SuccessProps) => {
  return (
    <StyledSuccess>
      <CloseButtonContainer>
        <RoundCloseButton onClick={onClose} />
      </CloseButtonContainer>
      <SuccessIcon />
      <Text>Success!</Text>
    </StyledSuccess>
  );
};

export default Success;
