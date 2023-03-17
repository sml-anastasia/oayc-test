import React, { useState } from "react";
import { useCheckNft } from "../../../hooks/contract/useCheckNft";
import { useStaking } from "../../../hooks/contract/useStaking";
import styles from "./ManageNFTModal.module.scss";
import Modal from "../../common/ovarlays/Modal";
import Image from "next/image";
import { Tabs } from "../Tabs/Tabs";
import { Tab } from "../Tabs/Tabs";

interface Props {
  isWithdraw?: boolean;
  isOpen: boolean;
  onClose: () => {};
}

function ManageNFTModal({ isWithdraw, isOpen, onClose }: Props) {
  const { nfts } = useCheckNft();
  const { stake, positions, staked, claimAll } = useStaking();
  const [isLock, setIsLock] = useState(false);
  const [selectedNft, setSelectedNft] = useState<number | null>(null);
  const tabs: Tab[] = [
    { id: "1", label: "STAKE" },
    { id: "2", label: "LOCK" },
  ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  function submit() {
    stake.write?.({
      recklesslySetUnpreparedArgs: [[selectedNft], [0], 0],
    });
  }

  const totalReward =
    positions.data?.reduce(
      (total, { accruedReward }) => total + +accruedReward.toString(),
      0
    ) /
    10 ** 18;

  return (
    <Modal isOpen={isOpen} width={688} height={334} onClose={onClose}>
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
            <h1>Step 1</h1>
            <Tabs
              selectedId={selectedTabId}
              tabs={tabs}
              onClick={setSelectedTabId}
            />
            <div className={styles.tabPageContent}>
              {selectedTabId === tabs[0].id && (
                <div>
                  <div>
                    <label htmlFor="">Is Lock</label>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => setIsLock(e.target.checked)}
                    />
                  </div>
                  {selectedNft && <p>Selected {selectedNft}</p>}
                  <button disabled={!selectedNft} onClick={submit}>
                    {isLock ? "Lock" : "Stake"}
                  </button>
                </div>
              )}
              {selectedTabId === tabs[1].id && <div></div>}
            </div>
            {/*nfts.map((nft) => {
              if (staked?.includes(nft.id)) {
                return;
              }
              return (
                <button
                  key={nft.id}
                  className={styles.item}
                  onClick={() => setSelectedNft(Number(nft.id))}
                >
                  {nft.id} <img src={nft.uri} />
                </button>
              );
            })*/}

            <button className={styles.nextButton}>
              NEXT
              <Image
                src="/images/svg/arrow.svg"
                alt="arrow"
                width={21}
                height={12}
              />
            </button>
          </div>
        ) : (
          <div className={styles.stakeModal}>
            <h1>Withdraw</h1>
            <Tabs
              selectedId={selectedTabId}
              tabs={tabs}
              onClick={setSelectedTabId}
            />
            <div className={styles.tabPageContent}>
              {selectedTabId === tabs[0].id && <div></div>}
              {selectedTabId === tabs[1].id && <div></div>}
            </div>
            {staked?.map((nft: any) => {
              return (
                <button key={nft} className={styles.item}>
                  {nft} <img src={nft.uri} />
                </button>
              );
            })}

            <div className={styles.warning}>
              WARNING! In case of premature withdrawal, the penalty is 100%
            </div>
            <div className={styles.buttons}>
              <button className={styles.unstake} onClick={() => {}}>
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
