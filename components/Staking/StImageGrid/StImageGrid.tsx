import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
import StImageSelector from "../StImageSelector";
import { NftMutate } from "../../../types/NFT";
import styles from "./StImageGrid.module.scss";

const mockNft: NftMutate[] = [
  {
    id: "1",
    uri: "/images/png/img.png",
    level: 7,
  },
  {
    id: "2",
    uri: "/images/png/img.png",
    level: 14,
  },
  {
    id: "3",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "4",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "5",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "6",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "7",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "1",
    uri: "/images/png/img.png",
    level: 7,
  },
  {
    id: "2",
    uri: "/images/png/img.png",
    level: 14,
  },
  {
    id: "3",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "4",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "5",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "6",
    uri: "/images/png/img.png",
    level: 21,
  },
  {
    id: "7",
    uri: "/images/png/img.png",
    level: 21,
  },
];

interface GridProps {
  header: string;
}

const StImageGrid = (props: GridProps) => {
  const [selectedNft, setSelectedNft] = useState<NftMutate>();
  const [filteredNfts, setfilteredNfts] = useState<NftMutate[]>(mockNft);

  const nft: NftMutate = selectedNft!;

  const handleSelectNft = (nft: NftMutate) => {
    setSelectedNft(nft);
  };
  return (
    <div className={styles.section}>
      <h2 className={styles.head}>{props.header}</h2>
      <div className={styles.gridWrapper}>
        <StImageSelector
          selected={nft}
          images={filteredNfts}
          showTooltips
          onSelected={handleSelectNft}
        />
      </div>
    </div>
  );
};

export default StImageGrid;
