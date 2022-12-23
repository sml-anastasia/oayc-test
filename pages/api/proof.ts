import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import { whitelistAddresses } from "../../connection/wl";

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


const tree = generateTree(whitelistAddresses);

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProofResponse>
) {
    res.status(200).json({proof: getProof(tree, req.query['address'] as string)});
}
