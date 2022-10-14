import { InjectedConnector } from "@wagmi/core";

import OaycNFT from '../contracts/OaycNFT.json';
import Banana from '../contracts/Banana.json';
import { Abi } from "abitype";

export const defaultConnector = new InjectedConnector();

export const OPToken = "0xD0537Bc7e07338174B85e81e61Aa9126d96De502";
export const NFTContract = "0x4c2ab59953EBF2536326064fFEAf3409365088b6";
export const goldenBananaContract = "0xc03Ca7Aa072C119393F5Ff294c1abedd4B7f1f71";
export const silverBananaContract = "0x8603588485b548A43DC17E9F5809EE73E15A8C94";

export const NFTContactABI = OaycNFT.abi as Abi;
export const goldenBananaContactABI = Banana.abi as Abi;
export const silverBananaContactABI = Banana.abi as Abi;
export const OPTokenABI: Abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
