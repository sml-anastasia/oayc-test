import React from 'react';
import { useContractRead } from "wagmi";
import { SaleStatus } from "./models/SaleStatus";
import { NFTContactABI, NFTContract } from "../../connection/connection";
import MintedCounter from "./MintedCounter";
import Button from "../Button/Button";
import { useGoldenBananaMint } from "../../hooks/useGoldenBananaMint";
import { useSilverBananaMint } from "../../hooks/useSilverBananaMint";
import { usePublicMint } from "../../hooks/usePublicMint";
import MintAmount from "./MintAmount";


const MintView = () => {


    const {data: saleInfo} = useContractRead({
        address: NFTContract,
        abi: NFTContactABI,
        functionName: 'info',
        staleTime: 10000
    });

    const {bananaCount: goldenBananaCount, mintGoldenBanana} = useGoldenBananaMint();
    const {bananaCount: silverBananaCount, mintSilverBanana} = useSilverBananaMint(saleInfo?.pricePerTokenWl);
    const {publicMint, tokenNum, setTokenNum} = usePublicMint(saleInfo?.pricePerTokenPublic);

    const getStageString = (stage: SaleStatus) => {
        if (stage === SaleStatus.Closed) {
            return "Sale is closed!";
        } else if (stage === SaleStatus.SoldOut) {
            return "Sold out!";
        } else if (stage === SaleStatus.WhiteListMint) {
            return "Whitelist sale is open!";
        } else if (stage === SaleStatus.PublicMint) {
            return "Public sale is open!";
        } else if (stage === SaleStatus.NotStarted) {
            return "Sale is not started yet!";
        }
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <p className="text-main-1">
                {getStageString(saleInfo?.stage)}
            </p>

            {(saleInfo?.stage === SaleStatus.WhiteListMint || saleInfo?.stage == SaleStatus.PublicMint) &&
                <>
                    <MintedCounter data={`${saleInfo?.minted.toString()} / ${saleInfo?.supply.toString()}`}/>
                    <div className="d-flex flex-wrap justify-content-center">
                        <Button
                            className="m-3"
                            disabled={!goldenBananaCount}
                            onClick={mintGoldenBanana}
                        >
                            Mint with Golden Banana
                        </Button>
                        <Button
                            className="m-3"
                            disabled={!silverBananaCount}
                            onClick={mintSilverBanana}

                        >
                            Mint with Silver Banana
                        </Button>
                    </div>

                    {saleInfo?.stage == SaleStatus.PublicMint &&
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <MintAmount value={tokenNum || ''} onChange={(e) => {
                                let num = Number(e.target.value);

                                if (num > 25) {
                                    num = 25;
                                } else if (num < 0) {
                                    num = 0;
                                }
                                setTokenNum(num);


                            }}/>
                            <Button
                                className="m-3"
                                onClick={publicMint}
                            >
                                Mint!
                            </Button>
                        </div>}


                </>
            }
        </div>
    );
};

export default MintView;