import React, { useMemo } from 'react';
import styled from "styled-components";
import { device } from "../../styles/device";
import { useAccount, useDisconnect } from "wagmi";
import MoaycButton from "../Button/MoaycButton";


const StyledTopBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 0 20px;

  @media screen and ${device.tablet} {
    margin-top: 43px;
    padding: 0 136px;
  }

`;

const StyledLogo = styled.div`
  background: url("/main/favicons/green.svg");
  background-size: 100% 100%;
  width: 39px;
  height: 46px;
  @media screen and ${device.tablet} {
    width: 57px;
    height: 68px;
  }


`;

const MoaycText = styled.div<{ connected: boolean }>`
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  line-height: 90%;

  display: ${props => props.connected ? 'none' : 'flex'};
  align-items: center;
  text-align: right;
  text-transform: uppercase;

  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 24px;


  @media screen and ${device.tablet} {
    display: flex;
    font-size: 70px;
  }

`;

const CenterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;


  @media screen and ${device.tablet} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
  }
`;

const AccountAddress = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-right: 14px;
`;


const TopBar = () => {
    const {address, isConnected} = useAccount();
    const {disconnect} = useDisconnect();

    const accountAddress = useMemo(() => {
        return `${address?.substring(0, 6)}...${address?.substring(address?.length - 4, address?.length)}`;
    }, [address]);


    return (
        <StyledTopBar>
            <StyledLogo/>
            {isConnected &&
                <CenterContainer>
                    <AccountAddress>{accountAddress}</AccountAddress>
                    <MoaycButton size="small" onClick={() => disconnect()}>
                        Disconnect
                    </MoaycButton>
                </CenterContainer>
            }
            <MoaycText connected={isConnected}>MOAYC</MoaycText>
        </StyledTopBar>
    );
};

export default TopBar;