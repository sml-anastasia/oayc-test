import React from "react";
import styled from "styled-components";

import ReactModal from "react-modal";

const StyledModal = styled(ReactModal)`
  position: relative;

  width: 251px;
  height: 251px;
  justify-content: center;
  display: flex;
  background: #191919;
  border-radius: 15px;
  border: 1.5px solid #87cc00;
  padding: 0;
  transition: 0.5s;
  overflow: hidden;
  outline: none;
  margin: 20px;
`;

interface ModalProps extends Readonly<ReactModal.Props> {
  isOpen: boolean;
  onClose?: () => void;
  width?: number;
  height?: number;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  width,
  height,
  ...props
}: ModalProps) => {
  let appElement;
  if (typeof window === "undefined") {
    appElement = undefined;
  } else {
    appElement = window.document.body;
  }

  return (
    <StyledModal
      style={{
        overlay: {
          backgroundColor: "rgba(25,25,25,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.5s",
        },
        content: {
          width: width ?? "min-content",
          height: height ?? "min-content",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={appElement}
      {...props}
    >
      {children}
    </StyledModal>
  );
};

export default Modal;
