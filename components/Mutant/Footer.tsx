import React, { useState } from 'react';
import styled from "styled-components";
import { device } from "../../styles/device";
import CheckNftModal, { CheckNftButton } from "./CheckNftModal";
import { useAccount } from "wagmi";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 16px;
  padding: 0 20px;

  @media screen and ${device.tabletL} {
    margin-bottom: 43px;
    padding: 0 135px;
  }
`;

const StyledTextContainer = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


const StyledSocialsContainer = styled.div`
  display: flex;

  & > a:not(:last-child) {
    margin-right: 20px;
  }
`;


const TwitterSocial = styled.a`
  background: url("/images/svg/twitter-icon.svg") no-repeat center;
  width: 40px;
  height: 40px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

const DiscordSocial = styled.a`
  background: url("/images/svg/discord-social.svg") no-repeat center;
  width: 40px;
  height: 40px;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;


const Footer = () => {

    const {isConnected} = useAccount();
    const [checkNftModalOpen, setCheckNftModalOpen] = useState(false);
    return (
        <StyledFooter>
            <StyledTextContainer>
                {isConnected &&
                    <>
                        <div style={{alignSelf: 'center'}}>
                            <CheckNftButton onClick={() => setCheckNftModalOpen(true)}>
                                Check NFT
                            </CheckNftButton>
                        </div>

                        <CheckNftModal isOpen={checkNftModalOpen} onClose={() => setCheckNftModalOpen(false)} />
                    </>}
            </StyledTextContainer>
            <StyledSocialsContainer>
                <TwitterSocial href={"https://twitter.com/OptiApeYC"} target="_blank"/>
                <DiscordSocial href={"https://discord.com/invite/oayc"} target="_blank"/>
            </StyledSocialsContainer>
        </StyledFooter>
    );
};

export default Footer;