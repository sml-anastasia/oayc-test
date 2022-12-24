import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { getDefaultNftMutate, NftMutate } from "../../../hooks/useMoaycMutate";


interface ImageSelectorProps {
    selected: NftMutate;
    images: NftMutate[];
    onSelected: (nft: NftMutate) => void;
}


const ImageSelectorContainer = styled.div`
  max-width: 300px;
  min-width: 300px;
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
    background: #272C17;
  }

  ::-webkit-scrollbar-thumb {
    background: #87CC01;
  }

`;

const StyledImage = styled.img`
  border-radius: 5px;
  filter: light(0);
  width: 64px;
  height: 64px;
`;

const ImageContainer = styled.div<{ selected: boolean }>`
  position: relative;
 

  width: 64px;
  height: 64px;
  
  & > img {
    ${props => props.selected && css`border: 1.5px solid #87CC01;`};
    border-radius: 5px;
  }


  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    display: block;
    position: absolute;
    background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
    opacity: ${props => props.selected ? 0.35 : 0};
    border-radius: 5px;

  }

  &:hover::after {
    cursor: pointer;
    opacity: 0.35;
  }
`;

const ImageSelector = (props: ImageSelectorProps) => {

    const {selected, images, onSelected} = props;

    const handleSelect = (id: string) => {
        onSelected(id);
    };

    return (
        <ImageSelectorContainer>
            {images.map((i, index) =>
                <ImageContainer selected={i.id === selected.id && i.level === selected.level} key={index} onClick={() => handleSelect(i)}>
                    <StyledImage src={i.uri} alt=""/>
                </ImageContainer>)
            }
        </ImageSelectorContainer>
    );
};

export default ImageSelector;