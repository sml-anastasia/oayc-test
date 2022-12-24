import React, { useState } from 'react';
import styled, { css } from "styled-components";
import Image from "next/image";
import { useWindowSize } from "../../hooks/useScreenWidth";
import { device } from "../../styles/device";
import { useMoaycStatus } from "../../hooks/useMoaycStatus";
import Placeholder from "./Placeholder";
import ImageSelector from "./mutation/ImageSelector";
import { getDefaultNftMutate, NftMutate, useMoaycMutate } from "../../hooks/useMoaycMutate";
import { MoaycRectButton } from "../Button/MoaycRectButton";
import MoaycModal from "./MoaycModal";
import Success from "./Success";
import Fail from "./Fail";


export const MutationWindowContainer = styled.div<{ noContent?: boolean }>`
  background: #1E2117;
  border-radius: 20px;
  padding: 28px 39px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.noContent && css`
    width: 335px;
    height: 332px;
  `} @media screen and ${device.tablet} {
    padding: 23px;

    ${props => props.noContent && css`
      width: 620px;
      height: 357px;
    `}
  }
`;

export const MutantPreview = styled.img`
  border: 1.5px solid #87CC01 !important;
  border-radius: 15px;
`;


export const MintStatus = styled.div<{ noContent?: boolean }>`
  border: 1.5px solid #87CC01;
  border-radius: 6px;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 9.5px 36px;

  margin-bottom: 26px;


  min-width: 257px;
  @media screen and ${device.tablet} {
    min-width: 215px;
  }
`;


const ImageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;


const MutationArrow = styled.div`
  background: url("/images/svg/mutation-arrow.svg") no-repeat center center;
  width: 43px;
  height: 26px;

`;

const MutationWindow = () => {
    const {isMobile} = useWindowSize();

    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isFailOpen, setIsFailOpen] = useState(false);
    const [selectedNft, setSelectedNft] = useState<NftMutate>(getDefaultNftMutate());
    const [selectedMutagen, setSelectedMutagen] = useState<NftMutate>(getDefaultNftMutate());

    const nftSelected = selectedNft.id !== '-1';
    const mutagenSelected = selectedMutagen.id !== '-1';

    const saleInfo = useMoaycStatus();
    const {nfts, mutagenNfts, canMutate, handleMutate} = useMoaycMutate(saleInfo.mutation, nftSelected, selectedNft, selectedMutagen);

    const availableMutagens = mutagenNfts.filter(i => i.level === selectedNft.level + 1);

    const handleSelectNft = (nft: NftMutate) => {
        setSelectedNft(nft);
        if (selectedMutagen.level !== nft.level + 1) {
            setSelectedMutagen(getDefaultNftMutate());
        }
    }

    if (!saleInfo.saleInfo) {
        return null;
    }

    if (!saleInfo.mutation) {
        return <Placeholder/>;
    }

    return (
        <MutationWindowContainer>

            <ImageSelectorContainer>
                <MintStatus>1. Choose your nft</MintStatus>
                <ImageSelector selected={selectedNft} images={nfts} onSelected={handleSelectNft}/>
            </ImageSelectorContainer>

            {nftSelected && <>
                <ImageSelectorContainer style={{marginLeft: 80}} >
                    <MintStatus>2. Choose your mutagen</MintStatus>
                    <ImageSelector selected={selectedMutagen} images={availableMutagens} onSelected={setSelectedMutagen}/>
                </ImageSelectorContainer>
                {mutagenSelected && <>
                    <ImageSelectorContainer style={{marginRight: 40, marginLeft: 40}}>
                        <MutationArrow/>
                    </ImageSelectorContainer>
                    <ImageSelectorContainer style={{maxWidth: 311, justifyContent: 'space-between', flexGrow: 1}}>
                        <MutantPreview src={`https://oayc.io:3001/${selectedNft.id}.png`} width={311} height={311}/>
                        <MoaycRectButton
                            style={{height: 50, marginTop: 17}}
                            disabled={!canMutate}
                            onClick={handleMutate}
                        >
                            Mutate
                        </MoaycRectButton>
                    </ImageSelectorContainer>
                </>}
            </>
            }


            {/*<MoaycModal isOpen={isLoading}>*/}
            {/*    <Processing/>*/}
            {/*</MoaycModal>*/}

            <MoaycModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}>
                <Success onClose={() => setIsSuccessOpen(false)}/>
            </MoaycModal>

            <MoaycModal isOpen={isFailOpen} onClose={() => setIsFailOpen(false)}>
                <Fail onClose={() => setIsFailOpen(false)}/>
            </MoaycModal>
        </MutationWindowContainer>
    );
};

export default MutationWindow;