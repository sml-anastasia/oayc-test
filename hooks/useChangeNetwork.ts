import { useNetwork, useSwitchNetwork } from 'wagmi';
import { useEffect } from 'react';
import { polygonMumbai } from "@wagmi/core/chains";

const useChangeNetwork = () => {
    const {chain} = useNetwork();
    const {switchNetwork} = useSwitchNetwork();

    useEffect(() => {
        if (chain?.id !== polygonMumbai.id) {
            switchNetwork?.(polygonMumbai.id);
        }
    }, [chain]);


};

export default useChangeNetwork;