import React from "react";
import Modal from "../../common/ovarlays/Modal";
import styled from "styled-components";
import { RedRoundCloseButton } from "../components/RedRoundCloseButton";
import { StakeMode } from "../../../types/Staking";
import { AddToStaking } from "./AddToStaking";
import { WidthrawStakedNft } from "./WidthrawStakedNft";

interface ManageNFTModalProps {
  mode?: StakeMode;
  isOpen: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)`
  position: relative;
  color: #ff0420;
  background-color: #f0ebdf;
  border: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ManageNFTModal = (props: ManageNFTModalProps) => {
  const { mode, isOpen, onClose } = props;

  // useEffect(() => {
  //   onClose();
  // }, [stakeWait.isSuccess]);

  return (
    <StyledModal isOpen={isOpen} width={688} onClose={onClose}>
      <RedRoundCloseButton onClose={onClose} />
      {mode === "stake" && <AddToStaking />}
      {mode === "widthraw" && <WidthrawStakedNft />}
    </StyledModal>
  );
};
