import React from "react";
import styled from "styled-components";
import Image from "next/image";
import OaycButton from "../../common/buttons/OaycButton";

const Icon = styled(Image)`
  padding: 0 20px;
`;

const WarningText = styled.div`
  display: flex;
  align-items: center;
  width: 187px;
  left: -1.5px;
  height: 76px;
  margin: 0;
  position: absolute;
  top: 27px;
  border-radius: 0 0 10px 10px;
  font-size: 12px;
  border: 1.5px solid #ff0420;
  color: #ff0420;
`;

const StyledUnstakeButton = styled(OaycButton)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid #ff0420;
  background-color: transparent;
  color: #ff0420;
  border-radius: 15px 15px 0 0;
  transition: height 0.1s, border-radius 0.1s;
  width: 187px;
  padding: 10px 1px 10px 10px;
  line-height: 90%;
  height: 30px;
  margin: 20px auto;
  font-size: 11px;

  @media (max-width: 480px) {
    width: 335px;
    height: 50px;
    margin: 20px auto;
    font-size: 18px;
  }

  @media (max-width: 375px) {
    width: 350px;
    margin: 20px 10px;
  }
`;

const StyledText = styled.div`
  font-size: 12px;
  margin-right: 8px;
`;
export const UnstakeAllButton = ({ claimAll }: { claimAll: () => void }) => {
  return (
    <StyledUnstakeButton onClick={claimAll}>
      <StyledText>UNSTAKE & CLAIM ALL</StyledText>
      <Icon
        src="/images/svg/claiminfo.svg"
        alt="claim button"
        width={22}
        height={22}
      />
      <WarningText>
        WARNING! In case of premature withdrawal, the penalty is 100%
      </WarningText>
    </StyledUnstakeButton>
  );
};
