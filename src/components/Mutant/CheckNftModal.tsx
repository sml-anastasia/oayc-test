import React, { useMemo, useState } from "react";
import Modal from "../common/ovarlays/Modal";
import ImageSelector from "./ImageSelector";
import { getDefaultNftInfo } from "../../web3/types/NFT";
import { SearchBar } from "./SearchBar";
import styled from "styled-components";
import { useAccount, useContractRead } from "wagmi";
import { MintStatus } from "./Styled/MintStatus";
import { MoaycStyledButton } from "../common/buttons/MoaycButton";
import { config } from "../../web3/config";
import { mutantContractAbi } from "../../web3/contracts";
import { BigNumber } from "ethers";
import { useOaycNftsOfAddress } from "../../hooks/contract/util/useOaycNftsOfAddress";
import { AddressZero } from "@ethersproject/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const MutatedStatus = styled(MintStatus)`
  margin-top: 20px;
  background: #c93041;
  border: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  font-family: "Rubik", serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: #191919;
`;

const NotMutatedStatus = styled(MutatedStatus)`
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
`;

export const CheckNftButton = styled(MoaycStyledButton)`
  padding: 12px 37px;
  background: transparent;
  border: 1.5px solid #87cc01;
  color: #87cc01;
`;

const CheckNftModal = ({ isOpen, onClose }: ModalProps) => {
  const [selectedNft, setSelectedNft] = useState(getDefaultNftInfo());
  const [filterId, setFilterId] = useState("");
  const { address } = useAccount();

  const { oaycNfts } = useOaycNftsOfAddress(address ?? AddressZero);

  const { data: lvl } = useContractRead({
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: "mutationLvl",
    args: [BigNumber.from(selectedNft.id)],
    enabled: selectedNft.id != "-1",
  });

  const filteredNfts = useMemo(() => {
    if (filterId !== "") {
      return oaycNfts.filter((i) => i.id.startsWith(filterId));
    }
    return oaycNfts;
  }, [oaycNfts, filterId]);

  return (
    <Modal isOpen={isOpen} width={450} height={550} onClose={onClose}>
      <Container>
        <MintStatus>Choose your nft</MintStatus>

        <ImageSelector
          selected={selectedNft}
          images={filteredNfts}
          showTooltips
          onSelected={setSelectedNft}
        />
        <div style={{ marginTop: 20 }}>
          <SearchBar
            placeholder={"Search by id"}
            value={filterId}
            onChange={(event) => setFilterId(event.target.value)}
          />
        </div>
        <>
          {lvl && (
            <>
              {lvl?.toString() === "0" ? (
                <NotMutatedStatus>Not Mutated Yet</NotMutatedStatus>
              ) : (
                <MutatedStatus>Already Mutated</MutatedStatus>
              )}
            </>
          )}
        </>
      </Container>
    </Modal>
  );
};

export default CheckNftModal;
