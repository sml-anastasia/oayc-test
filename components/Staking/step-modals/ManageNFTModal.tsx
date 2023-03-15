import React, { useState } from "react";
import { useCheckNft } from "../../../hooks/contract/useCheckNft";
import { useStaking } from "../../../hooks/contract/useStaking";
import styles from "./ManageNFTModal.module.scss";
import Modal from "../../common/ovarlays/Modal";

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
    <Modal isOpen={isOpen} width={650} height={550} onClose={onClose}>
      <div
        style={{
          position: "relative",
          overflow: "auto",
          color: "white",
        }}
      >
        <button
          style={{
            position: "absolute",
            right: 20,
            top: 20,
          }}
          onClick={onClose}
        >
          Close
        </button>

        <h1>{isWithdraw ? "Withdraw" : "Stake"}</h1>
        {!isWithdraw ? (
          <div>
            {nfts.map((nft) => {
              if (staked?.includes(nft.id)) {
                return;
              }
              return (
                <button
                  key={nft.id}
                  className={styles.item}
                  onClick={() => setSelectedNft(nft.id)}
                >
                  {nft.id} <img src={nft.uri} />
                </button>
              );
            })}

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
        ) : (
          <div>
            {staked?.map((nft) => {
              return (
                <button key={nft} className={styles.item}>
                  {nft} <img src={nft.uri} />
                </button>
              );
            })}

            <p>WARNING! In case of premature withdrawal, the penalty is 100%</p>

            <button onClick={() => {}}>unstake</button>

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
