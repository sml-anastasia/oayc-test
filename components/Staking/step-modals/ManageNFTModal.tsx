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
`;

export const ManageNFTModal = (props: ManageNFTModalProps) => {
  const { mode, isOpen, onClose } = props;

  // const [selectedPosition, setSelectedPosition] = useState<any>(null);
  // const { stake, positions, staked, claimAll, stakeWait, claim } = useStaking(
  //   [
  //     [BigNumber.from(+selectedNft[0] || 0)],
  //     [BigNumber.from(0)],
  //     BigNumber.from(0),
  //   ],
  //   BigNumber.from(selectedPosition || 0)
  // );

  // const isLock = selectedTabId === tabs[1].id;

  // useEffect(() => {
  //   onClose();
  // }, [stakeWait.isSuccess]);

  // function submit() {
  //   stake.write?.();
  // }

  // const totalReward =
  //   positions.data?.reduce(
  //     (total, { accruedReward }) => total + +accruedReward.toString(),
  //     0
  //   ) /
  //   10 ** 18;

  return (
    <StyledModal isOpen={isOpen} width={688} height={550} onClose={onClose}>
      <RedRoundCloseButton onClose={onClose} />
      {mode === "stake" && <AddToStaking />}
      {mode === "widthraw" && <WidthrawStakedNft />}
    </StyledModal>
  );
};
