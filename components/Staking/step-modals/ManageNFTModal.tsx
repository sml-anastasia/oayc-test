import React, { useEffect, useState } from "react";
import { useCheckNft } from "../../../hooks/contract/useCheckNft";
import { useStaking } from "../../../hooks/contract/useStaking";
import styles from "./ManageNFTModal.module.scss";
import Modal from "../../common/ovarlays/Modal";
import Image from "next/image";
import { Tabs } from "../Tabs/Tabs";
import { Tab } from "../Tabs/Tabs";
import StImageGrid from "../StImageGrid/StImageGrid";
import { BigNumber } from "ethers";
import Positions from "../Positions/Positions";

interface Props {
  isWithdraw?: boolean;
  isOpen: boolean;
  onClose: () => {};
}

function ManageNFTModal({ isWithdraw, isOpen, onClose }: Props) {
  const { nfts } = useCheckNft();
  const [selectedNft, setSelectedNft] = useState<string[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<any>(null);
  const { stake, positions, staked, claimAll, stakeWait, claim, claimAllWait } =
    useStaking(
      [
        [BigNumber.from(+selectedNft[0] || 0)],
        [BigNumber.from(0)],
        BigNumber.from(0),
      ],
      BigNumber.from(selectedPosition || 0)
    );
  const tabs: Tab[] = [
    { id: "1", label: "STAKE" },
    { id: "2", label: "LOCK" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const isLock = selectedTabId === tabs[1].id;

  useEffect(() => {
    onClose();
  }, [stakeWait.isSuccess]);

  function submit() {
    stake.write?.();
  }

  const totalReward =
    positions.data?.reduce(
      (total, { accruedReward }) => total + +accruedReward.toString(),
      0
    ) /
    10 ** 18;

  return (
    <Modal isOpen={isOpen} width={688} height={550} onClose={onClose}>
      <div className={styles.modal}>
        <button className={styles.closeBut} onClick={onClose}>
          <Image
            src="/images/svg/close.svg"
            alt="close"
            width={14}
            height={14}
          />
        </button>
        {!isWithdraw ? (
          <div className={styles.stakeModal}>
            <h1>Add</h1>

            <StImageGrid
              nfts={nfts.filter((nft) => !staked?.includes(nft.id))}
              onSelect={(ids) => setSelectedNft(ids)}
            />

            <div className={styles.tabPageContent}>
              {/* {selectedTabId === tabs[0].id && ( */}
              <div>
                <Tabs
                  selectedId={selectedTabId}
                  tabs={tabs}
                  onClick={setSelectedTabId}
                />
                <br />
                {selectedNft.length > 0 && <p>Selected {selectedNft}</p>}
                <button disabled={!selectedNft.length} onClick={submit}>
                  {isLock ? "Lock" : "Stake"}
                </button>
              </div>
            </div>

            {/* <button className={styles.nextButton}>
              NEXT
              <Image
                src="/images/svg/arrow.svg"
                alt="arrow"
                width={21}
                height={12}
              />
            </button> */}
          </div>
        ) : (
          <div className={styles.stakeModal}>
            <h1>Withdraw</h1>
            {/* <Tabs
              selectedId={selectedTabId}
              tabs={tabs}
              onClick={setSelectedTabId}
            /> */}
            {/* <div className={styles.tabPageContent}>
              {selectedTabId === tabs[0].id && <div></div>}
              {selectedTabId === tabs[1].id && <div></div>}
            </div> */}
            <Positions onSelect={(id) => setSelectedPosition(id)} />
            {/* {staked?.map((nft: any) => {
              return (
                <button key={nft} className={styles.item}>
                  {nft} <img src={nft.uri} />
                </button>
              );
            })} */}
            selectedPosition {selectedPosition}
            <div className={styles.warning}>
              WARNING! In case of premature withdrawal, the penalty is 100%
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.unstake}
                onClick={() => {
                  claim.write?.();
                }}
              >
                unstake
              </button>
              <button className={styles.unstake} onClick={() => {}}>
                unstake all
              </button>
            </div>
            {totalReward && (
              <div>
                BALANCE: {totalReward}
                <button onClick={() => claimAll.write?.()}>CLAIM ALL</button>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ManageNFTModal;
