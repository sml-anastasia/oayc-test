import React, { useMemo } from "react";
import styled from "styled-components";
import { device } from "../../styles/device";
import { useAccount, useDisconnect } from "wagmi";
import { Balance } from "../Staking/Balance";
import MoaycButton from "../common/buttons/MoaycButton";
import { StakingButton } from "../Button/StakingButton";

const StyledTopBar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0 20px;

  @media screen and ${device.tabletL} {
    padding: 43px 136px 0 136px;
  }
`;

const StyledLogo = styled.div<{ logoUrl: string }>`
  background: url(${(props) => props.logoUrl});
  background-size: 100% 100%;
  width: 39px;
  height: 46px;
  @media screen and ${device.tabletL} {
    width: 57px;
    height: 68px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const MoaycText = styled.div<{ connected: boolean }>`
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  line-height: 90%;

  display: ${(props) => (props.connected ? "none" : "flex")};
  align-items: center;
  text-align: right;
  text-transform: uppercase;

  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 24px;

  @media screen and ${device.tabletL} {
    display: flex;
    font-size: 70px;
  }
`;

const CenterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and ${device.tabletL} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
  }
`;

const AccountAddress = styled.div<{ green: boolean }>`
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  background: ${(props) =>
    props.green
      ? `linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%)`
      : "#FF0420"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-right: 14px;
`;

const StyledSocialsContainer = styled.div`
  display: flex;

  & > a:not(:last-child) {
    margin-right: 20px;
  }
`;

const TwitterSocial = styled.a`
  background: url("/images/svg/twitter-red.svg") no-repeat center;
  width: 50px;
  height: 50px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

const DiscordSocial = styled.a`
  background: url("/images/svg/discord-red.svg") no-repeat center;
  width: 50px;
  height: 50px;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

interface TopBarProps {
  socials?: boolean;
  displayText?: string;
  logoUrl: string;
  balance?: string;
  pageType?: "moayc" | "staking";
}

const TopBar = ({ socials, displayText, logoUrl, pageType }: TopBarProps) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const isStakingPage = pageType === "staking";

  const accountAddress = useMemo(() => {
    return `${address?.substring(0, 6)}...${address?.substring(
      address?.length - 4,
      address?.length
    )}`;
  }, [address]);
  return (
    <StyledTopBar>
      <StyledLogo as="a" href="/" logoUrl={logoUrl} />
      {isConnected && (
        <>
          <CenterContainer>
            {/* TODO: add themes to styled components, sha uzhe zajeblasa*/}
            <AccountAddress green={!isStakingPage}>
              {accountAddress}{" "}
            </AccountAddress>
            {isStakingPage ? (
              <StakingButton size="small" onClick={() => disconnect()}>
                Disconnect
              </StakingButton>
            ) : (
              <MoaycButton size="small" onClick={() => disconnect()}>
                Disconnect
              </MoaycButton>
            )}
          </CenterContainer>
        </>
      )}
      <MoaycText connected={isConnected}>{displayText}</MoaycText>
      {!isConnected && socials && (
        <StyledSocialsContainer>
          <TwitterSocial
            href={"https://twitter.com/OptiApeYC"}
            target="_blank"
          />
          <DiscordSocial
            href={"https://discord.com/invite/oayc"}
            target="_blank"
          />
        </StyledSocialsContainer>
      )}
      {isConnected && isStakingPage && <Balance />}
    </StyledTopBar>
  );
};

export default TopBar;
