import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: fill 0.3s;

  &:hover {
    fill: #ff0420;
  }
`;

interface InfoIconProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const InfoIcon: React.FC<InfoIconProps> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H14C19.5228 0 24 4.47715 24 10V24H10C4.47715 24 0 19.5228 0 14V0Z"
          fill="#FF0420"
        />
        <path
          d="M13.9172 10.3958L11.1673 10.7117L11.0691 11.13L11.6101 11.22C11.9621 11.2975 12.0321 11.4133 11.9557 11.7358L11.0691 15.55C10.8372 16.5358 11.1964 17 12.0394 17C12.6941 17 13.4526 16.7233 13.7972 16.3425L13.9027 15.885C13.6635 16.0783 13.3116 16.1558 13.0797 16.1558C12.7496 16.1558 12.6305 15.9433 12.7141 15.5692L13.9172 10.3958ZM14 8.1C14 8.39174 13.8735 8.67153 13.6484 8.87782C13.4233 9.08411 13.118 9.2 12.7996 9.2C12.4813 9.2 12.1759 9.08411 11.9508 8.87782C11.7257 8.67153 11.5992 8.39174 11.5992 8.1C11.5992 7.80826 11.7257 7.52847 11.9508 7.32218C12.1759 7.11589 12.4813 7 12.7996 7C13.118 7 13.4233 7.11589 13.6484 7.32218C13.8735 7.52847 14 7.80826 14 8.1Z"
          fill="#F0EBDF"
        />
      </svg>
    </StyledSvg>
  );
};

export default InfoIcon;
