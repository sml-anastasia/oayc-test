import React, { PropsWithChildren } from 'react';
import styled from "styled-components";

import Modal from 'react-modal';

const StyledModal = styled(Modal)`
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
`;


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MoaycModal = (props: PropsWithChildren<ModalProps>) => {
    return <StyledModal
        style={{
            overlay: {
                backgroundColor: 'rgba(25,25,25,0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '0.5s'
            }
        }}
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
    >
        {props.children}
    </StyledModal>;
};

export default MoaycModal;