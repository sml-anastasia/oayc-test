import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import Image from "next/image";
import MutationStatLine from "./MutationStatLine";
import AmountSelector from "./AmountSelector";
import { MoaycRectButton } from "../Button/MoaycRectButton";
import { useWindowSize } from "../../hooks/utils/useWindowSize";
import { device } from "../../styles/device";
import MoaycModal from "./MoaycModal";
import Fail from "./Fail";
import ArrowSurround from "./ArrowSurround";
import { useMoaycStatus } from "../../hooks/contract/useMoaycStatus";
import { useMoaycPublicMint } from "../../hooks/contract/useMoaycPublicMint";
import Processing from "./Processing";
import Success from "./Success";
import { useMoaycWhitelistMint } from "../../hooks/contract/useMoaycWhitelistMint";


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


export const MintMenu = styled.div`
  min-width: 257px;

  height: 311px;
  display: flex;
  flex-direction: column;


  @media screen and ${device.tablet} {
    margin-left: 48px;
    min-width: 215px;
  }
`;

export const MutantPreview = styled(Image)`
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

  ${props => !props.noContent && css`margin-bottom: 40px;`}


  min-width: 257px;
  @media screen and ${device.tablet} {
    min-width: 215px;
  }
`;

const MutantMintWindow = () => {
    const {isMobile} = useWindowSize();

    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isFailOpen, setIsFailOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(1);

    const saleInfo = useMoaycStatus();

    const {
        mintPublic,
        approvePublicOp,
        canPublicMint,
        isPublicMintSuccess,
        isPublicMintLoading,
        isPublicApproveLoading,
        isPublicError,
        publicMints,
        publicAllocation,
        updateSaleInfo: updatePublicAllocInfo
    } = useMoaycPublicMint(saleInfo.currentPrice, selectedAmount, saleInfo.publicMint);

    const {
        mintWl,
        approveWlOp,
        canWlMint,
        isWlMintSuccess,
        isWlMintLoading,
        isWlApproveLoading,
        isWlError,
        whitelistMints,
        whiteListAllocation,
        updateSaleInfo: updateWlAllocInfo
    } = useMoaycWhitelistMint(saleInfo.currentPrice, selectedAmount, saleInfo.whitelistMint);


    useEffect(() => {
        if (isPublicMintSuccess || isWlMintSuccess) {
            setIsSuccessOpen(true);
            saleInfo.updateSaleInfo();
            updateWlAllocInfo();
            updatePublicAllocInfo();
        }
    }, [isPublicMintSuccess, isWlMintSuccess]);

    useEffect(() => {
        if (isPublicError || isWlError) {
            setIsFailOpen(true);
        }
    }, [isPublicError, isWlError]);

    const isLoading = isPublicMintLoading || isPublicApproveLoading || isWlMintLoading || isWlApproveLoading;
    const canMint = canPublicMint || canWlMint;

    const handleApprove = () => {
        if (saleInfo.publicMint) {
            approvePublicOp?.();
        }
        if (saleInfo.whitelistMint) {
            approveWlOp?.();
        }
    };
    const handleMint = () => {
        if (saleInfo.publicMint) {
            mintPublic?.();
        }
        if (saleInfo.whitelistMint) {
            mintWl?.();
        }
    };

    if (!saleInfo.saleInfo) {
        return null;
    }

    const getAlloc = () => {
        if (saleInfo.whitelistMint) {
            return Number(whiteListAllocation);
        }
        if (saleInfo.publicMint) {
            return Number(publicAllocation);
        }
        return 0;
    };

    const getMinted = () => {
        if (saleInfo.whitelistMint) {
            return Number(whitelistMints);
        }
        if (saleInfo.publicMint) {
            return Number(publicMints);
        }
        return 0;
    };

    const isAllocationOk = () => {
        if (saleInfo.whitelistMint) {
            return Number(whitelistMints) < Number(whiteListAllocation);
        }
        if (saleInfo.publicMint) {
            return Number(publicMints) < Number(publicAllocation);
        }
        return false;
    };

    if (saleInfo.soldOut || saleInfo.notStarted || saleInfo.closed) {
        return (
            <MutationWindowContainer noContent>
                <ArrowSurround sideArrows={!isMobile}>
                    <MintStatus noContent>
                        {saleInfo.soldOut && `SOLD OUT!`}
                        {saleInfo.notStarted && `MINT IS NOT LIVE YET`}
                        {saleInfo.closed && `MINT IS CLOSED`}
                    </MintStatus>
                </ArrowSurround>
            </MutationWindowContainer>
        );
    }

    return (
        <>
            {!saleInfo.mutation &&
                <MutationWindowContainer>
                    {!isMobile && <MutantPreview src={"/images/placeholder.jpg"} width={311} height={311}/>}
                    <MintMenu>
                        {saleInfo.whitelistMint && <MintStatus>whitelist mint is live</MintStatus>}
                        {saleInfo.publicMint && <MintStatus>public mint is live</MintStatus>}

                        <MutationStatLine name={"Mutants left:"}
                                          value={saleInfo.supply.sub(saleInfo.minted).toString()}/>
                        <MutationStatLine name={"Price:"} value={`${saleInfo.currentPrice} $OP`}/>
                        <MutationStatLine name={"Your Allocation:"} value={`${getMinted()} / ${getAlloc()}`}/>


                        <div style={{flexGrow: 1}}/>

                        <MutationStatLine style={{marginBottom: 8}} name={"Total:"}
                                          value={`${selectedAmount * saleInfo.currentPrice} $OP`}/>
                        <AmountSelector value={selectedAmount} onChange={setSelectedAmount}
                                        max={getAlloc() - getMinted()}/>
                        {canMint ?
                            <MoaycRectButton style={{marginTop: 11}}
                                             onClick={handleMint}>Mint</MoaycRectButton>
                            :
                            <MoaycRectButton style={{marginTop: 11}} disabled={!isAllocationOk()}
                                             onClick={handleApprove}>Approve</MoaycRectButton>
                        }
                    </MintMenu>

                    <MoaycModal isOpen={isLoading}>
                        <Processing/>
                    </MoaycModal>

                    <MoaycModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}>
                        <Success onClose={() => setIsSuccessOpen(false)}/>
                    </MoaycModal>

                    <MoaycModal isOpen={isFailOpen} onClose={() => setIsFailOpen(false)}>
                        <Fail onClose={() => setIsFailOpen(false)}/>
                    </MoaycModal>
                </MutationWindowContainer>
            }
        </>


    );
};

export default MutantMintWindow;