export interface NftInfo {
  id: string;
  uri: string;
  level: number;
}

export const getDefaultNftInfo = (): NftInfo => ({
  id: "-1",
  uri: "",
  level: -1,
});
