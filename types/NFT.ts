export interface NftInfo {
  id: number;
  uri: string;
  level: number;
}

export const getDefaultNftInfo = (): NftInfo => ({
  id: "-1",
  uri: "",
  level: -1,
});
