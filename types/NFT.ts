export interface NftMutate {
    id: string;
    uri: string;
    level: number;
}


export const getDefaultNftMutate = (): NftMutate => ({
    id: '-1',
    uri: '',
    level: -1
});