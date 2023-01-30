import React, { useMemo, useState } from 'react';
import MoaycModal from "./MoaycModal";
import ImageSelector from "./mutation/ImageSelector";
import { getDefaultNftMutate } from "../../types/NFT";
import { useCheckNft } from "../../hooks/useCheckNft";
import { SearchBar } from "./SearchBar";
import styled from "styled-components";
import { useContractRead } from "wagmi";
import { moaycContract, moaycContractABI } from "../../connection/connection";
import { MintStatus } from "./Styled/MintStatus";
import { MoaycStyledButton } from "../Button/MoaycButton";


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
  background: #C93041;
  border: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  font-family: 'Rubik',serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: #191919;
`


const NotMutatedStatus = styled(MutatedStatus)`
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
`

export const CheckNftButton = styled(MoaycStyledButton)`
  padding: 12px 37px;
  margin-bottom: 15px;
  background: transparent;
  border: 1.5px solid #87CC01;
  color: #87CC01;
`

const CheckNftModal = ({isOpen, onClose}: ModalProps) => {

    const [selectedNft, setSelectedNft] = useState(getDefaultNftMutate());
    const [filterId, setFilterId] = useState('');

    const {nfts} = useCheckNft();


    const {
        data: lvl,
    } = useContractRead({
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'mutationLvl',
        args: [selectedNft.id],
        enabled: selectedNft.id != '-1'
    });

    const filteredNfts = useMemo(() => {
        if (filterId !== '') {
            return nfts.filter(i => i.id.startsWith(filterId));
        }
        return nfts;
    }, [nfts, filterId]);

    return (
        <MoaycModal isOpen={isOpen} width={450} height={550} onClose={onClose}>
            <Container>
                <MintStatus>Choose your nft</MintStatus>

                <ImageSelector selected={selectedNft} images={filteredNfts} showTooltips onSelected={setSelectedNft}/>
                <div style={{marginTop: 20}}>
                    <SearchBar placeholder={"Search by id"} value={filterId}
                               onChange={event => setFilterId(event.target.value)}/>
                </div>
                <>
                    {lvl && <>{
                        lvl?.toString() === '0' ?
                            <NotMutatedStatus>Not Mutated Yet</NotMutatedStatus> :
                            <MutatedStatus>Already Mutated</MutatedStatus>
                    }
                    </>}
                </>

            </Container>


        </MoaycModal>
    );
};

export default CheckNftModal;