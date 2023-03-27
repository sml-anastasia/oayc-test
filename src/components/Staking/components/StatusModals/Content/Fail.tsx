import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CloseModalButton } from "../CloseModalButton";

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
  //padding: 50px;
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

const Text2 = styled(Text)`
  margin-top: 10px;
  font-size: 16px;
`;

interface FailProps {
  onClose: () => void;
}

const Fail = ({ onClose }: FailProps) => {
  return (
    <>
      <StyledContainer>
        <Icon
          src="/images/svg/fail.svg"
          alt="oayc fail"
          width="73px"
          height="73px"
        />
        <Text>Fail...</Text>
        <Text2>SOMETHING WENT WRONG</Text2>
      </StyledContainer>
      <CloseModalButton onClick={onClose} />
    </>
  );
};

export default Fail;
