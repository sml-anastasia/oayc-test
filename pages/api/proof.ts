import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";

interface ProofResponse {
    proof: string[];
}

const getAddressPacked = (address: string) => ethers.utils.solidityPack(['address'], [address]);

const generateTree = (data: string[]) => {
    const leaves = data.map(getAddressPacked);
    return new MerkleTree(
        leaves,
        ethers.utils.keccak256,
        {
            hashLeaves: true,
            sortPairs: true
        }
    );
};

const getProof = (tree: MerkleTree, account: string) => tree.getHexProof(ethers.utils.keccak256(account));


const addresses: string[] = [
    "0xA9fAb059d145C73d6A685C3F6e88deb08F433b1D",
    "0x8BcB3c7efeb52b05406C9334a3ebAe3Ae591Cf82",
    "0x1eE421CAA63279492Cc5e39879B2b9662CB78853",
    "0xeFCe60762558E113395d48B58E8567c556D36f23",
    "0x5891DE93aB83fA3AE89BF98cDCd878A1cc4F715A",
    "0x45d9Fd29861230D00864082fFab749aaF56dC21A",
    "0xA09AA75da763D4aEB692672897C057786Cdd258B",
    "0xD82735e62dd27e473ee65F59E87979efa85F4fff",
    "0x3D1fbDD55696dE2CCf932F15ABF7dBd34f3b1479",
    "0xE9267b0E4D5E03E6fa9EDe22fA2EFCc28938Bd82",
    '0xD246a9f67Cde248170024B7D129914a426402AfA'
];


const tree = generateTree(addresses);

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProofResponse>
) {
    res.status(200).json({proof: getProof(tree, req.query['address'] as string)});
}
