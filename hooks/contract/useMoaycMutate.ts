import {
    useAccount,
    useContractRead,
    useContractReads,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction
} from "wagmi";
import { config } from "../../connection/connection";
import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import { NftMutate } from "../../types/NFT";
import { mutagenContractAbi, mutantContractAbi, oaycNftContractAbi } from "../../contracts";

const getOaycNfts = {
    address: config.oaycContract,
    abi: oaycNftContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

const getMoaycNfts = {
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

const getMoaycNftsLvl = {
    address: config.moaycContract,
    abi: mutantContractAbi,
    functionName: 'mutationLvl',
};

const getMutagen1Nfts = {
    address: config.mutagen1Contract,
    abi: mutagenContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

const getMutagen2Nfts = {
    address: config.mutagen2Contract,
    abi: mutagenContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

const getMutagen3Nfts = {
    address: config.mutagen3Contract,
    abi: mutagenContractAbi,
    functionName: 'tokenOfOwnerByIndex',
};

export const useMoaycMutate = (
    enableNftSelection: boolean = false,
    enableMutagenSelection: boolean = false,
    selectedNft: NftMutate,
    selectedMutagen: NftMutate,
) => {

    const {address} = useAccount();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        data: oaycBalanceOf,
        isSuccess: oaycBalanceOfIsSuccess,
    } = useContractRead({
        address: config.oaycContract,
        abi: oaycNftContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
        enabled: enableNftSelection
    });

    const {
        data: moaycBalanceOf,
        isSuccess: moaycBalanceOfIsSuccess,
    } = useContractRead({
        address: config.moaycContract,
        abi: mutantContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
        enabled: enableNftSelection
    });

    const {
        data: mutagen1BalanceOf,
        isSuccess: mutagen1BalanceOfIsSuccess,
        refetch: mutagen1BalanceOfRefetch,
    } = useContractRead({
        address: config.mutagen1Contract,
        abi: mutagenContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
        enabled: enableMutagenSelection
    });

    const {
        data: mutagen2BalanceOf,
        isSuccess: mutagen2BalanceOfIsSuccess,
        refetch: mutagen2BalanceOfRefetch,
    } = useContractRead({
        address: config.mutagen2Contract,
        abi: mutagenContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
        enabled: enableMutagenSelection
    });

    const {
        data: mutagen3BalanceOf,
        isSuccess: mutagen3BalanceOfIsSuccess,
        refetch: mutagen3BalanceOfRefetch,
    } = useContractRead({
        address: config.mutagen3Contract,
        abi: mutagenContractAbi,
        functionName: 'balanceOf',
        args: address && [address],
        enabled: enableMutagenSelection
    });

    const {data: oaycNfts} = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(oaycBalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getOaycNfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `https://oayc.io:3000/${i.toString()}.png`,
            level: 0
        })),
        enabled: enableNftSelection && oaycBalanceOfIsSuccess
    });

    const {
        data: moaycNftsPre,
        isSuccess: moaycNftsPreIsSuccess,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(moaycBalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMoaycNfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `https://oayc.io:3001/${i.toString()}.png`,
            level: 1
        })),
        enabled: enableNftSelection && moaycBalanceOfIsSuccess
    });

    const {
        data: moaycNftLvls,
        refetch: moaycNftLvlsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (const nft of moaycNftsPre ?? []) {
                reads.push({...getMoaycNftsLvl, args: [nft.id]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => Number(i.toString())),
        enabled: enableNftSelection && moaycBalanceOfIsSuccess && moaycNftsPreIsSuccess && !!moaycNftsPre
    });

    const getMoaycImage = (id: string, level: number) => {
        if (level === 1) {
            return `https://oayc.io:3001/${Number(id)}.png`;
        } else if (level === 2) {
            return `https://oayc.io:3001/${Number(id) + 100000}.png`;
        } else if (level === 3) {
            return `https://oayc.io:3001/${Number(id) + 200000}.png`;
        } else {
            return `https://oayc.io:3001/${Number(id)}.png`;
        }
    };

    const moaycNfts = (moaycNftsPre ?? []).map((i: any, index) => ({
        ...i,
        level: moaycNftLvls?.[index] ?? 1,
        uri: getMoaycImage(i.id, (moaycNftLvls as any)?.[index] ?? 1)
    }));

    const {
        data: mutagen1Nfts,
        refetch: mutagen1NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen1BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen1Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 1}.png`,
            level: 1
        })),
        enabled: enableMutagenSelection && mutagen1BalanceOfIsSuccess
    });

    const {
        data: mutagen2Nfts,
        refetch: mutagen2NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen2BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen2Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 4}.png`,
            level: 2
        })),
        enabled: enableMutagenSelection && mutagen2BalanceOfIsSuccess
    });

    const {
        data: mutagen3Nfts,
        refetch: mutagen3NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen3BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen3Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data: any) => data.map((i: any) => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 7}.png`,
            level: 3
        })),
        enabled: enableMutagenSelection && mutagen3BalanceOfIsSuccess
    });

    const mutagenNfts: any = [...(mutagen1Nfts ?? []), ...(mutagen2Nfts ?? []), ...(mutagen3Nfts ?? [])];

    const nfts = [...(oaycNfts ?? []), ...(moaycNfts ?? [])];


    const {
        config: mutate1Config,
        isSuccess: canMutate1,
        refetch: refetchCanMutate1
    } = usePrepareContractWrite({
        address: config.moaycContract,
        abi: mutantContractAbi,
        functionName: 'mutate1',
        overrides: ({
            value: ethers.utils.parseEther('0.006'),
        }),
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 0 && selectedMutagen.level === 1
    });

    const {
        write: mutate1,
        data: mutate1Data,
    } = useContractWrite(mutate1Config);

    const {
        isLoading: mutate1Loading,
    } = useWaitForTransaction({
        hash: mutate1Data?.hash,
        enabled: !!mutate1Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                setIsSuccess(true);
                await mutagen1BalanceOfRefetch();
                await moaycNftLvlsRefetch();
                await mutagen1NftsRefetch();
                await refetchCanMutate1();
            } else {
                setIsError(true);
            }
        },
        onError: async () => {
            setIsError(true);
        }
    });

    const {
        config: mutate2Config,
        isSuccess: canMutate2,
        refetch: refetchCanMutate2
    } = usePrepareContractWrite({
        address: config.moaycContract,
        abi: mutantContractAbi,
        functionName: 'mutate2',
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 1 && selectedMutagen.level === 2
    });

    const {
        write: mutate2,
        data: mutate2Data,
    } = useContractWrite(mutate2Config);

    const {
        isLoading: mutate2Loading,
    } = useWaitForTransaction({
        hash: mutate2Data?.hash,
        enabled: !!mutate2Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                setIsSuccess(true);
                await mutagen2BalanceOfRefetch();
                await moaycNftLvlsRefetch();
                await mutagen2NftsRefetch();
                await refetchCanMutate2();
            } else {
                setIsError(true);
            }
        },
        onError: async () => {
            setIsError(true);
        }
    });

    const {
        config: mutate3Config,
        isSuccess: canMutate3,
        refetch: refetchCanMutate3
    } = usePrepareContractWrite({
        address: config.moaycContract,
        abi: mutantContractAbi,
        functionName: 'mutate3',
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 2 && selectedMutagen.level === 3
    });

    const {
        write: mutate3,
        data: mutate3Data,
    } = useContractWrite(mutate3Config);

    const {isLoading: mutate3Loading} = useWaitForTransaction({
        hash: mutate3Data?.hash,
        enabled: !!mutate3Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                setIsSuccess(true);
                await mutagen3BalanceOfRefetch();
                await moaycNftLvlsRefetch();
                await mutagen3NftsRefetch();
                await refetchCanMutate3();
            } else {
                setIsError(true);
            }
        },
        onError: async () => {
            setIsError(true);
        }
    });


    const canMutate = (canMutate1 || canMutate2 || canMutate3)
        && selectedMutagen.id !== '-1'
        && selectedNft.id !== '-1'
        && selectedNft.level === selectedMutagen.level - 1;

    const handleMutate = () => {
        if (canMutate && selectedMutagen.level === 1) {
            mutate1?.();
        }
        if (canMutate && selectedMutagen.level === 2) {
            mutate2?.();
        }
        if (canMutate && selectedMutagen.level === 3) {
            mutate3?.();
        }
    };

    const isLoading = mutate1Loading || mutate2Loading || mutate3Loading;

    return {
        nfts,
        mutagenNfts,
        canMutate,
        handleMutate,
        isLoading,
        isSuccess,
        isError,
        setIsSuccess,
        setIsError
    };


};