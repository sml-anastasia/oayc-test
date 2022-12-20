import { useAccount, useClient, useConnect } from 'wagmi';
import { useEffect } from 'react';

const useEagerConnect = () => {
    const client = useClient();
    const {connectAsync, connectors} = useConnect();
    const {isConnected} = useAccount();
    useEffect(() => {
        client.autoConnect();
    }, [client, connectAsync, connectors]);
};

export default useEagerConnect;