import React, { useEffect, useMemo, useState } from 'react';
import styled, { css } from "styled-components";
import { useWindowSize } from "../../hooks/utils/useWindowSize";
import { device } from "../../styles/device";
import { useMoaycStatus } from "../../hooks/contract/useMoaycStatus";
import Placeholder from "./Placeholder";
import ImageSelector from "./mutation/ImageSelector";
import { useMoaycMutate } from "../../hooks/contract/useMoaycMutate";
import { MoaycRectButton } from "../Button/MoaycRectButton";
import MoaycModal from "./MoaycModal";
import Success from "./Success";
import Fail from "./Fail";
import Processing from "./Processing";
import MoaycOutlineButton from "../Button/MoaycOutlineButton";
import { getDefaultNftMutate, NftMutate } from "../../types/NFT";
import { SearchBar } from "./SearchBar";
import { MintStatus } from "./Styled/MintStatus";


export const MutationWindowContainer = styled.div<{ noContent?: boolean }>`
  background: #1E2117;
  border-radius: 20px;
  padding: 28px 39px;
  display: flex;
  justify-content: center;
  align-items: start;

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
    const {isMobile, isTablet} = useWindowSize();

    const [selectedNft, setSelectedNft] = useState<NftMutate>(getDefaultNftMutate());
    const [selectedMutagen, setSelectedMutagen] = useState<NftMutate>(getDefaultNftMutate());
    const [filterId, setFilterId] = useState('');

    const [mobileStage, setMobileStage] = useState(0);

    const nftSelected = selectedNft.id !== '-1';
    const mutagenSelected = selectedMutagen.id !== '-1';

    const getNftImage = (nft: NftMutate) => {
        if (nft.level === 0) {
            return '/images/placeholder.gif';
        }
        if (nft.level === 1) {
            return `https://oayc.io:3001/${Number(nft.id) + 100000}.png`;
        }
        if (nft.level === 2) {
            return `https://oayc.io:3001/${Number(nft.id) + 200000}.png`;
        }
    };

    const saleInfo = useMoaycStatus();
    const {
        nfts,
        mutagenNfts,
        canMutate,
        handleMutate,
        isLoading,
        isSuccess,
        isError,
        setIsSuccess,
        setIsError
    } = useMoaycMutate(saleInfo.mutation, nftSelected, selectedNft, selectedMutagen);

    const availableMutagens: any = mutagenNfts.filter((i: any) => i.level === selectedNft.level + 1);

    const filteredNfts = useMemo(() => {
        if (filterId !== '') {
            return nfts.filter(i => i.id.startsWith(filterId));
        }
        return nfts;
    }, [nfts, filterId]);

    const handleSelectNft = (nft: NftMutate) => {
        setSelectedNft(nft);
        if (selectedMutagen.level !== nft.level + 1) {
            setSelectedMutagen(getDefaultNftMutate());
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setSelectedNft(getDefaultNftMutate());
            setSelectedMutagen(getDefaultNftMutate());
            setMobileStage(0);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (selectedNft.id !== '-1' && !filteredNfts.some(i => i.id == selectedNft.id)) {

            setSelectedNft(getDefaultNftMutate());
        }
    }, [filteredNfts, selectedNft]);

    if (!saleInfo.saleInfo) {
        return null;
    }

    if (!saleInfo.mutation) {
        return <Placeholder/>;
    }

    return (
        <MutationWindowContainer>
            {(isMobile || isTablet) ?
                <>
                    {mobileStage == 0 &&
                        <ImageSelectorContainer>
                            <MintStatus>1. Choose your nft</MintStatus>
                            <ImageSelector selected={selectedNft} images={filteredNfts} showTooltips
                                           onSelected={handleSelectNft}/>
                            <div style={{marginTop: 20}}>
                                <SearchBar placeholder={"Search by id"} value={filterId}
                                           onChange={event => setFilterId(event.target.value)}/>
                            </div>

                            <MoaycRectButton
                                style={{height: 50, marginTop: 10, fontSize: 16}}
                                disabled={!nftSelected}
                                onClick={() => setMobileStage(1)}
                            >
                                Next Step
                            </MoaycRectButton>
                        </ImageSelectorContainer>
                    }

                    {mobileStage == 1 &&

                        <ImageSelectorContainer>
                            <MintStatus>2. Choose your mutagen</MintStatus>
                            <ImageSelector selected={selectedMutagen} images={availableMutagens}
                                           onSelected={setSelectedMutagen}/>
                            <div style={{display: 'flex', marginTop: 31}}>
                                <MoaycOutlineButton
                                    style={{height: 50}}
                                    onClick={() => setMobileStage(0)}
                                >
                                    Back
                                </MoaycOutlineButton>
                                <MoaycRectButton
                                    style={{height: 50, fontSize: 16, marginLeft: 14, flexGrow: 1}}
                                    disabled={!mutagenSelected}
                                    onClick={() => setMobileStage(2)}
                                >
                                    Next Step
                                </MoaycRectButton>
                            </div>

                        </ImageSelectorContainer>
                    }

                    {mobileStage == 2 &&

                        <ImageSelectorContainer
                            style={{maxWidth: 300, justifyContent: 'space-between', flexGrow: 1}}>
                            <MintStatus>Mutation preview</MintStatus>

                            <MutantPreview src={getNftImage(selectedNft)} width={300}
                                           height={300}/>

                            <div style={{display: 'flex', marginTop: 31}}>
                                <MoaycOutlineButton
                                    style={{height: 50}}
                                    onClick={() => setMobileStage(1)}
                                >
                                    Back
                                </MoaycOutlineButton>
                                <MoaycRectButton
                                    style={{height: 50, fontSize: 16, marginLeft: 14, flexGrow: 1}}
                                    disabled={!canMutate}
                                    onClick={handleMutate}
                                >
                                    Mutate
                                </MoaycRectButton>
                            </div>
                        </ImageSelectorContainer>
                    }

                </>
                :
                <>
                    <ImageSelectorContainer>
                        <MintStatus>1. Choose your nft</MintStatus>
                        <ImageSelector selected={selectedNft} images={filteredNfts} showTooltips
                                       onSelected={handleSelectNft}/>
                        <div style={{marginTop: 20}}>
                            <SearchBar placeholder={"Search by id"} value={filterId}
                                       onChange={event => setFilterId(event.target.value)}/>
                        </div>
                    </ImageSelectorContainer>

                    {nftSelected && <>
                        <ImageSelectorContainer style={{marginLeft: 80}}>
                            <MintStatus>2. Choose your mutagen</MintStatus>
                            <ImageSelector selected={selectedMutagen} images={availableMutagens}
                                           onSelected={setSelectedMutagen}/>
                        </ImageSelectorContainer>
                        {mutagenSelected && <>
                            <ImageSelectorContainer style={{marginRight: 40, marginLeft: 40, alignSelf: 'center'}}>
                                <MutationArrow/>
                            </ImageSelectorContainer>
                            <ImageSelectorContainer
                                style={{
                                    maxWidth: 311,
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    alignSelf: 'center'
                                }}>
                                <MutantPreview src={getNftImage(selectedNft)} width={311}
                                               height={311}/>
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
                </>
            }


            <MoaycModal isOpen={isLoading}>
                <Processing/>
            </MoaycModal>

            <MoaycModal isOpen={isSuccess} onClose={() => setIsSuccess(false)}>
                <Success onClose={() => setIsSuccess(false)}/>
            </MoaycModal>

            <MoaycModal isOpen={isError} onClose={() => setIsError(false)}>
                <Fail onClose={() => setIsError(false)}/>
            </MoaycModal>
        </MutationWindowContainer>
    );
};

export default MutationWindow;