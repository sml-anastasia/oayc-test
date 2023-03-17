import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
import StImageSelector from "../StImageSelector";
import { NftMutate } from "../../../types/NFT";
import styles from "./StImageGrid.module.scss";

interface GridProps {
  header?: string;
  nfts: NftMutate[];
  onSelect?: (ids: string[]) => void;
}

const StImageGrid = ({ header, nfts, onSelect }: GridProps) => {
  const [selectedNft, setSelectedNft] = useState<NftMutate>();

  const nft: NftMutate = selectedNft!;

  const handleSelectNft = (nft: NftMutate) => {
    setSelectedNft(nft);

    if (onSelect) {
      onSelect([nft.id]);
    }
  };
  return (
    <div className={styles.section}>
      {header && <h2 className={styles.head}>{header}</h2>}
      <div className={styles.gridWrapper}>
        <StImageSelector
          selected={nft}
          images={nfts}
          showTooltips
          onSelected={handleSelectNft}
        />
      </div>
    </div>
  );
};

export default StImageGrid;
