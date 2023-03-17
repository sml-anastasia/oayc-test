import React, { useState } from "react";
import styled, { css } from "styled-components";
import { getDefaultNftMutate, NftMutate } from "../../types/NFT";

interface ImageSelectorProps {
  selected?: NftMutate;
  images: NftMutate[];
  onSelected: (nft: NftMutate) => void;
  showTooltips?: boolean;
}

const ImageSelectorContainer = styled.div`
  max-width: 520px;
  min-width: 520px;
  max-height: 315px;
  min-height: 315px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  position: relative;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #272c17;
  }

  ::-webkit-scrollbar-thumb {
    background: #87cc01;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px;
  filter: light(0);
  width: 78px;
  height: 78px;
`;

const ImageContainer = styled.div<{ selected: boolean }>`
  position: relative;

  width: 78px;
  height: 78px;

  & > img {
    ${(props) =>
      props.selected &&
      css`
        border: 1.5px solid #87cc01;
      `};
    border-radius: 5px;
  }

  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 78px;
    height: 78px;
    display: block;
    position: absolute;
    background: linear-gradient(159.53deg, #ff0420 1.07%, #87cc00 72.47%);
    opacity: ${(props) => (props.selected ? 0.35 : 0)};
    border-radius: 5px;
  }

  &:hover::after {
    cursor: pointer;
    opacity: 0.35;
  }
`;

ImageContainer.defaultProps = {
  selected: false,
};

const StyledTooltipOne = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  z-index: 1000;
  background: rgba(25, 25, 25, 0.8);
  color: #87cc00;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 12px;
`;

const StyledTooltipTwo = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  z-index: 1000;
  background: #ff0420;
  color: white;
  width: 100%;
  text-transform: uppercase;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
`;

const ImageSelector = (props: ImageSelectorProps) => {
  const { selected = false, images, onSelected, showTooltips = false } = props;

  const [hovered, setHovered] = useState(getDefaultNftMutate());

  const handleSelect = (id: NftMutate) => {
    onSelected(id);
  };

  return (
    <ImageSelectorContainer>
      {images.map((i, index) => (
        <ImageContainer
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(getDefaultNftMutate())}
          selected={
            selected && i.id === selected.id && i.level === selected.level
          }
          key={index}
          onClick={() => handleSelect(i)}
        >
          <StyledImage src={i.uri} alt="" />
          {showTooltips && (
            <>
              {hovered.id == i.id &&
                hovered.level == i.level &&
                i.level != 0 && (
                  <StyledTooltipTwo>{i.level} days</StyledTooltipTwo>
                )}
            </>
          )}
        </ImageContainer>
      ))}
    </ImageSelectorContainer>
  );
};

export default ImageSelector;
