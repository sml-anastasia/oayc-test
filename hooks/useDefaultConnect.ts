import { useConnect } from "wagmi";
import { defaultConnector } from "../connection/connection";

export const useDefaultConnect = () => {
    return useConnect({connector: defaultConnector});
}