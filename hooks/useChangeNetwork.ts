import { useNetwork, useSwitchNetwork } from 'wagmi';
import { useEffect } from 'react';
import { chains } from "../connection/connection";


const useChangeNetwork = () => {
    const {chain} = useNetwork();
    const {switchNetwork} = useSwitchNetwork();

    useEffect(() => {
        if (chain?.id !== chains[0].id) {
            switchNetwork?.(chains[0].id);
        }
    }, [chain]);


};

export default useChangeNetwork;