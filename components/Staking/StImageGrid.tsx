import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
import StImageSelector from "./StImageSelector";
import { NftMutate } from "../../types/NFT";
import styled from "styled-components";

const mockNft: NftMutate[] = [
  {
    id: "1",
    uri: "/images/png/img.png",
    level: 1,
  },
  {
    id: "2",
    uri: "/images/png/img.png",
    level: 1,
  },
  {
    id: "3",
    uri: "/images/png/img.png",
    level: 1,
  },
];

const ImageSelectorContainer = styled.div`
  display: flex;
`;

const StImageGrid = () => {
  const [selectedNft, setSelectedNft] = useState<NftMutate>();
  const [filteredNfts, setfilteredNfts] = useState<NftMutate[]>(mockNft);

  const nft: NftMutate = selectedNft!;

  const handleSelectNft = (nft: NftMutate) => {
    setSelectedNft(nft);
  };
  return (
    <>
      <ImageSelectorContainer>
        <StImageSelector
          selected={nft}
          images={filteredNfts}
          showTooltips
          onSelected={handleSelectNft}
        />
      </ImageSelectorContainer>
    </>
  );
};

export default StImageGrid;
