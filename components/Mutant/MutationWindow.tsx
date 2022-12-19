import React, { useState } from 'react';
import styled from "styled-components";
import Image from "next/image";
import MutationStatLine from "./MutationStatLine";
import AmountSelector from "./AmountSelector";
import { MoaycRectButton } from "../Button/MoaycRectButton";
import { useWindowSize } from "../../hooks/useScreenWidth";
import { device } from "../../styles/device";
import MoaycModal from "./MoaycModal";
import Fail from "./Fail";


const MutationWindowContainer = styled.div`
  background: #1E2117;
  border-radius: 20px;
  padding: 28px 39px;
  display: flex;

  @media screen and ${device.tablet} {
    min-width: 215px;
    padding: 23px;
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


const MintStatus = styled.div`
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
  margin-bottom: 40px;
`;

const MutationWindow = () => {

    const {isMobile} = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MutationWindowContainer>
            {!isMobile && <MutantPreview src={"/images/placeholder.gif"} width={311} height={311}/>}

            <MintMenu>
                <MintStatus>
                    whitelist mint is live
                </MintStatus>
                <MutationStatLine name={"Mutants left:"} value={2999}/>
                <MutationStatLine name={"Price:"} value={'33 $OP'}/>
                <div style={{flexGrow: 1}}/>
                <MutationStatLine style={{marginBottom: 8}} name={"Total:"} value={'1833 $OP'}/>
                <AmountSelector/>
                <MoaycRectButton style={{marginTop: 11}} onClick={() => setIsOpen(true)}>Mint</MoaycRectButton>
            </MintMenu>


            {/*<MoaycModal isOpen={isOpen} onClose={() => setIsOpen(false)}>*/}
            {/*    <Processing/>*/}
            {/*</MoaycModal>*/}

            {/*<MoaycModal isOpen={isOpen} onClose={() => setIsOpen(false)}>*/}
            {/*    <Success onClose={() => setIsOpen(false)}/>*/}
            {/*</MoaycModal>*/}

            <MoaycModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Fail onClose={() => setIsOpen(false)}/>
            </MoaycModal>


        </MutationWindowContainer>
    );
};

export default MutationWindow;