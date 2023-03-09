import React, { PropsWithChildren } from 'react';
import styled from "styled-components";

import ReactModal from 'react-modal';

const StyledModal = styled(ReactModal)`
  width: 251px;
  height: 251px;
  justify-content: center;
  display: flex;
  background: #191919;
  border-radius: 15px;
  border: 1.5px solid #87CC00;
  padding: 0;
  transition: 0.5s;
  overflow: hidden;
  outline: none;
  margin: 20px;
`;


interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    width?: number;
    height?: number;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
    return <StyledModal
        style={{
            overlay: {
                backgroundColor: 'rgba(25,25,25,0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '0.5s'
            },
            content: {
                width: props.width,
                height: props.height
            }
        }}
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        appElement={window.document.body}
    >
        {props.children}
    </StyledModal>;
};

export default Modal;