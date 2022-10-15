import { InjectedConnector } from "@wagmi/core";

import OaycNFT from '../contracts/OaycNFT.json';
import Banana from '../contracts/Banana.json';
import { Abi } from "abitype";

export const defaultConnector = new InjectedConnector();

export const OPToken = "0x4200000000000000000000000000000000000042";

export const NFTContract = "0x0deaAc29d8A3d4EbBAAa3eCd3cC97C9deF00f720";
export const goldenBananaContract = "0xA4921a23AF154eDd14926a9F50e74cd2A1EFF0C4";
export const silverBananaContract = "0xA89EcbF1a89A9B6501F3651e2725fDc46C6AF20c";

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
