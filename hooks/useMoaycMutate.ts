import {
    useAccount,
    useContractRead,
    useContractReads,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction
} from "wagmi";
import {
    moaycContract,
    moaycContractABI,
    mutagen1Contract,
    mutagen2Contract,
    mutagen3Contract,
    mutagenContractABI,
    oaycContactABI,
    oaycContract
} from "../connection/connection";
import { BigNumber, ethers } from "ethers";

const getOaycNfts = {
    address: oaycContract,
    abi: oaycContactABI,
    functionName: 'tokenOfOwnerByIndex',
};

const getMoaycNfts = {
    address: moaycContract,
    abi: moaycContractABI,
    functionName: 'tokenOfOwnerByIndex',
};

const getMoaycNftsLvl = {
    address: moaycContract,
    abi: moaycContractABI,
    functionName: 'mutationLvl',
};

const getMutagen1Nfts = {
    address: mutagen1Contract,
    abi: mutagenContractABI,
    functionName: 'tokenOfOwnerByIndex',
};

const getMutagen2Nfts = {
    address: mutagen2Contract,
    abi: mutagenContractABI,
    functionName: 'tokenOfOwnerByIndex',
};

const getMutagen3Nfts = {
    address: mutagen3Contract,
    abi: mutagenContractABI,
    functionName: 'tokenOfOwnerByIndex',
};

export interface NftMutate {
    id: string;
    prefix: string;
    level: number;
}

export const getDefaultNftMutate = () => ({
    id: '-1',
    uri: '',
    level: -1
});

export const useMoaycMutate = (
    enableNftSelection: boolean = false,
    enableMutagenSelection: boolean = false,
    selectedNft: NftMutate,
    selectedMutagen: NftMutate,
) => {

    const {address} = useAccount();

    const {
        data: oaycBalanceOf,
        isSuccess: oaycBalanceOfIsSuccess,
        refetch: oaycBalanceOfIsRefetch,
    } = useContractRead({
        address: oaycContract,
        abi: oaycContactABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: enableNftSelection
    });

    const {
        data: moaycBalanceOf,
        isSuccess: moaycBalanceOfIsSuccess,
        refetch: moaycBalanceOfRefetch,
    } = useContractRead({
        address: moaycContract,
        abi: oaycContactABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: enableNftSelection
    });

    const {
        data: mutagen1BalanceOf,
        isSuccess: mutagen1BalanceOfIsSuccess,
        refetch: mutagen1BalanceOfRefetch,
    } = useContractRead({
        address: mutagen1Contract,
        abi: mutagenContractABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: enableMutagenSelection
    });

    const {
        data: mutagen2BalanceOf,
        isSuccess: mutagen2BalanceOfIsSuccess,
        refetch: mutagen2BalanceOfRefetch,
    } = useContractRead({
        address: mutagen2Contract,
        abi: mutagenContractABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: enableMutagenSelection
    });

    const {
        data: mutagen3BalanceOf,
        isSuccess: mutagen3BalanceOfIsSuccess,
        refetch: mutagen3BalanceOfRefetch,
    } = useContractRead({
        address: mutagen3Contract,
        abi: mutagenContractABI,
        functionName: 'balanceOf',
        args: [address],
        enabled: enableMutagenSelection
    });

    const {
        data: oaycNfts,
        isSuccess: oaycNftsIsSuccess,
        refetch: oaycNftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(oaycBalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getOaycNfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => ({
            id: i.toString(),
            uri: `https://oayc.io:3000/${i.toString()}.png`,
            level: 0
        })),
        enabled: enableNftSelection && oaycBalanceOfIsSuccess
    });

    const {
        data: moaycNftsPre,
        isSuccess: moaycNftsPreIsSuccess,
        refetch: moaycNftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(moaycBalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMoaycNfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => ({
            id: i.toString(),
            uri: `https://oayc.io:3001/${i.toString()}.png`,
            level: 1
        })),
        enabled: enableNftSelection && moaycBalanceOfIsSuccess
    });

    const {
        data: moaycNftLvls,
        isSuccess: moaycNftLvlsIsSuccess,
        refetch: moaycNftLvlsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (const nft of moaycNftsPre ?? []) {
                reads.push({...getMoaycNftsLvl, args: [nft.id]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => Number(i.toString())),
        enabled: enableNftSelection && moaycBalanceOfIsSuccess && moaycNftsPreIsSuccess && !!moaycNftsPre
    });

    const moaycNfts = (moaycNftsPre ?? []).map((i, index) => ({...i, level: moaycNftLvls?.[index] ?? 1}));

    const {
        data: mutagen1Nfts,
        isSuccess: mutagen1NftsIsSuccess,
        refetch: mutagen1NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen1BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen1Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 1}.png`,
            level: 1
        })),
        enabled: enableMutagenSelection && mutagen1BalanceOfIsSuccess
    });

    const {
        data: mutagen2Nfts,
        isSuccess: mutagen2NftsIsSuccess,
        refetch: mutagen2NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen2BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen2Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 4}.png`,
            level: 2
        })),
        enabled: enableMutagenSelection && mutagen2BalanceOfIsSuccess
    });

    const {
        data: mutagen3Nfts,
        isSuccess: mutagen3NftsIsSuccess,
        refetch: mutagen3NftsRefetch,
    } = useContractReads({
        contracts: (() => {
            const reads = [];
            for (let i = 0; i < Number(mutagen3BalanceOf?.toString() ?? '0'); i++) {
                reads.push({...getMutagen3Nfts, args: [address, i]});
            }
            return reads;
        })(),
        select: (data) => data.map(i => ({
            id: i.toString(),
            uri: `/images/mutagens/${(Number(i.toString()) - 1) % 3 + 7}.png`,
            level: 3
        })),
        enabled: enableMutagenSelection && mutagen3BalanceOfIsSuccess
    });

    const mutagenNfts = [...(mutagen1Nfts ?? []), ...(mutagen2Nfts ?? []), ...(mutagen3Nfts ?? [])];

    const nfts = [...(oaycNfts ?? []), ...(moaycNfts ?? [])];


    const {
        config: mutate1Config,
        isSuccess: canMutate1,
        refetch: refetchCanMutate1
    } = usePrepareContractWrite({
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'mutate1',
        overrides: {
            value: ethers.utils.parseEther('0.008'),
        },
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 0 && selectedMutagen.level === 1
    });

    const {
        write: mutate1,
        data: mutate1Data,
        reset: mutate1Reset
    } = useContractWrite(mutate1Config);

    const {
        isLoading: mutate1Loading,
        isSuccess: mutate1Success,
        isError: mutate1Error,
    } = useWaitForTransaction({
        hash: mutate1Data?.hash,
        enabled: !!mutate1Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                console.log('success')
                // await oaycBalanceOfIsRefetch();
                // await moaycBalanceOfRefetch();
                await mutagen1BalanceOfRefetch();
                // await mutagen2BalanceOfRefetch();
                // await mutagen3BalanceOfRefetch();
                // await oaycNftsRefetch();
                // await moaycNftsRefetch();
                await moaycNftLvlsRefetch();
                await mutagen1NftsRefetch();
                await refetchCanMutate1();
                // await mutagen2NftsRefetch();
                // await mutagen3NftsRefetch();
            }
        },
        onError: async () => {
            // await refetchContractWrite();
            // mintPublicReset();
        }
    });

    const {
        config: mutate2Config,
        isSuccess: canMutate2,
        refetch: refetchCanMutate2
    } = usePrepareContractWrite({
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'mutate2',
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 1 && selectedMutagen.level === 2
    });

    const {
        write: mutate2,
        data: mutate2Data,
        reset: mutate2Reset
    } = useContractWrite(mutate2Config);

    const {
        isLoading: mutate2Loading,
        isSuccess: mutate2Success,
        isError: mutate2Error,
    } = useWaitForTransaction({
        hash: mutate2Data?.hash,
        enabled: !!mutate2Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                console.log('success')
                // await oaycBalanceOfIsRefetch();
                // await moaycBalanceOfRefetch();
                // await mutagen1BalanceOfRefetch();
                await mutagen2BalanceOfRefetch();
                // await mutagen3BalanceOfRefetch();
                // await oaycNftsRefetch();
                // await moaycNftsRefetch();
                await moaycNftLvlsRefetch();
                // await mutagen1NftsRefetch();
                await mutagen2NftsRefetch();
                await refetchCanMutate2();
                // await mutagen3NftsRefetch();
            }
        },
        onError: async () => {

        }
    });

    const {
        config: mutate3Config,
        isSuccess: canMutate3,
        refetch: refetchCanMutate3
    } = usePrepareContractWrite({
        address: moaycContract,
        abi: moaycContractABI,
        functionName: 'mutate3',
        args: [BigNumber.from(selectedMutagen.id), BigNumber.from(selectedNft.id)],
        enabled: enableNftSelection && enableMutagenSelection && selectedNft.level === 2 && selectedMutagen.level === 3
    });

    const {
        write: mutate3,
        data: mutate3Data,
        reset: mutate3Reset
    } = useContractWrite(mutate3Config);

    const {
        isLoading: mutate3Loading,
        isSuccess: mutate3Success,
        isError: mutate3Error,
    } = useWaitForTransaction({
        hash: mutate3Data?.hash,
        enabled: !!mutate3Data?.hash,
        onSuccess: async (data) => {
            if (data.status === 1) {
                console.log('success')
                await mutagen3BalanceOfRefetch();
                await moaycNftLvlsRefetch();
                await mutagen3NftsRefetch();
                await refetchCanMutate3();
            }
        },
        onError: async () => {

        }
    });


    const canMutate = (canMutate1 || canMutate2 || canMutate3)
        && selectedMutagen.id !== '-1'
        && selectedNft.id !== '-1'
        && selectedNft.level === selectedMutagen.level - 1;

    console.log(canMutate1, canMutate2, canMutate3);
    console.log(canMutate, selectedNft, selectedMutagen);
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


    return {
        nfts,
        mutagenNfts,
        canMutate,
        handleMutate
    };


};