import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 29px;
  height: 29px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #ff0420;
  border: none;
`;

export const RedRoundCloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <StyledButton onClick={onClose}>
      <Image src="/images/svg/close.svg" alt="close" width={14} height={14} />
    </StyledButton>
  );
};
