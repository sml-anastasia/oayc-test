import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 65px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled(Image)`
  padding: 50px;
`;

const Text = styled.div`
  margin-top: 42px;
  font-size: 42px;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  color: #ff0420;
  line-height: 95.7%;
  text-align: center;
  letter-spacing: -0.035em;
`;

const CloseButtonContainer = styled.button`
  position: absolute;
  top: 5px;
  right: 3px;
  border: none;
`;

interface SuccessProps {
  onClose: () => void;
}

const Success = ({ onClose }: SuccessProps) => {
  return (
    <StyledContainer>
      <CloseButtonContainer>
        <Icon
          onClick={onClose}
          src="/images/svg/close-red-icon.svg"
          alt="oayc success"
          width="29px"
          height="29px"
        />
      </CloseButtonContainer>
      <Icon
        src="/images/svg/success.svg"
        alt="oayc success"
        width="73px"
        height="73px"
      />
      <Text>Success!</Text>
    </StyledContainer>
  );
};

export default Success;
