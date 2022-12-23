import { useNetwork, useSwitchNetwork } from 'wagmi';
import { useEffect } from 'react';
import { optimism, polygonMumbai } from "@wagmi/core/chains";

const useChangeNetwork = () => {
    const {chain} = useNetwork();
    const {switchNetwork} = useSwitchNetwork();

    useEffect(() => {
        if (chain?.id !== optimism.id) {
            switchNetwork?.(optimism.id);
        }
    }, [chain]);


};

export default useChangeNetwork;