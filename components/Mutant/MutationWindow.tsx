import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import Image from "next/image";
import MutationStatLine from "./MutationStatLine";
import AmountSelector from "./AmountSelector";
import { MoaycRectButton } from "../Button/MoaycRectButton";
import { useWindowSize } from "../../hooks/useScreenWidth";
import { device } from "../../styles/device";
import MoaycModal from "./MoaycModal";
import Fail from "./Fail";
import ArrowSurround from "./ArrowSurround";
import { useMoaycStatus } from "../../hooks/useMoaycStatus";
import { useMoaycPublicMint } from "../../hooks/useMoaycPublicMint";
import Processing from "./Processing";
import Success from "./Success";


const MutationWindowContainer = styled.div<{ noContent?: boolean }>`
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


const MintMenu = styled.div`
  min-width: 257px;

  height: 311px;
  display: flex;
  flex-direction: column;


  @media screen and ${device.tablet} {
    margin-left: 48px;
    min-width: 215px;
  }
`;

const MutantPreview = styled(Image)`
  border: 1.5px solid #87CC01 !important;
  border-radius: 15px;
`;


const MintStatus = styled.div<{ noContent?: boolean }>`
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

const MutationWindow = () => {
    const {isMobile} = useWindowSize();

    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isFailOpen, setIsFailOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(1);

    const saleInfo = useMoaycStatus();

    const {
        mintPublic,
        approveOp,
        canMint,
        isMintSuccess,
        isMintLoading,
        isApproveLoading,
        isError,
    } = useMoaycPublicMint(saleInfo.currentPrice, selectedAmount);


    useEffect(() => {
        if (isMintSuccess) {
            setIsSuccessOpen(true);
        }
    }, [isMintSuccess]);

    useEffect(() => {
        if (isError) {
            setIsFailOpen(true);
        }
    }, [isError]);


    if (!saleInfo.saleInfo) {
        return null;
    }

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
            {!saleInfo.mutation ?

                <MutationWindowContainer>

                    {!isMobile && <MutantPreview src={"/images/placeholder.gif"} width={311} height={311}/>}

                    <MintMenu>
                        {saleInfo.whitelistMint && <MintStatus>whitelist mint is live</MintStatus>}
                        {saleInfo.publicMint && <MintStatus>public mint is live</MintStatus>}

                        <MutationStatLine name={"Mutants left:"} value={saleInfo.supply - saleInfo.minted}/>
                        <MutationStatLine name={"Price:"} value={`${saleInfo.currentPrice} $OP`}/>


                        <div style={{flexGrow: 1}}/>
                        <MutationStatLine style={{marginBottom: 8}} name={"Total:"}
                                          value={`${selectedAmount * saleInfo.currentPrice} $OP`}/>
                        <AmountSelector value={selectedAmount} onChange={setSelectedAmount}/>
                        {canMint ?
                            <MoaycRectButton style={{marginTop: 11}}
                                             onClick={() => mintPublic?.()}>Mint</MoaycRectButton>
                            :
                            <MoaycRectButton style={{marginTop: 11}}
                                             onClick={() => approveOp?.()}>Approve</MoaycRectButton>
                        }
                    </MintMenu>

                    <MoaycModal isOpen={isMintLoading || isApproveLoading}>
                        <Processing/>
                    </MoaycModal>

                    <MoaycModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}>
                        <Success onClose={() => setIsSuccessOpen(false)}/>
                    </MoaycModal>

                    <MoaycModal isOpen={isFailOpen} onClose={() => setIsFailOpen(false)}>
                        <Fail onClose={() => setIsFailOpen(false)}/>
                    </MoaycModal>
                </MutationWindowContainer>
                :

                <>
                    {saleInfo.mutation && <MintStatus>mutation is live</MintStatus>}
                </>
            }
        </>


    );
};

export default MutationWindow;