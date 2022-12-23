import { InjectedConnector } from "@wagmi/core";

import OaycNFT from '../contracts/OaycNFT.json';
import Banana from '../contracts/Banana.json';
import Mutant from '../contracts/Mutant.json';
import Mutagen from '../contracts/Mutagen.json';
import { Abi } from "abitype";

export const defaultConnector = new InjectedConnector();

export const OPToken = "0x4200000000000000000000000000000000000042";
export const NFTContract = "0x0deaAc29d8A3d4EbBAAa3eCd3cC97C9deF00f720";
export const goldenBananaContract = "0xA4921a23AF154eDd14926a9F50e74cd2A1EFF0C4";
export const silverBananaContract = "0xA89EcbF1a89A9B6501F3651e2725fDc46C6AF20c";


//todo: mumbai
export const tokenContract = "0x4200000000000000000000000000000000000042";
export const mutantContract = "0x1Ff8382E43F5Cb5064044C2833CA4f1070Da5d51";


export const oaycContract = "0x68559eE6959BCD646b00741ac52C5BAFfD0f2CED";
export const mutagen1Contract = "0xB1c9acFB939E746E6c7E17AbD23109ADf99ef602";
export const mutagen2Contract = "0x34297C67bAdf235fB9bf95a27d8da51BC826b2C9";
export const mutagen3Contract = "0x2AA79C491b13715932201301efFCb627878621a2";


export const NFTContactABI = OaycNFT.abi as Abi;
export const bananaAbi = Banana.abi as Abi;
export const mutantContractABI = Mutant.abi as Abi;
export const mutagenContractABI = Mutagen.abi as Abi;


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
