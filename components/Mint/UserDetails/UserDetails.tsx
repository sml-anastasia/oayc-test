import React, { useMemo } from 'react';
import { useAccount, useDisconnect } from "wagmi";
import Button from "../../Button/Button";

const UserDetails = () => {
    const {address, isConnected} = useAccount();
    const {disconnect} = useDisconnect();


    const accountAddress = useMemo(() => {
        return `${address?.substring(0, 6)}...${address?.substring(address?.length - 4, address?.length)}`;
    }, [address]);


    if (!isConnected) {
        return null;
    }

    return (
        <div className="d-flex align-items-center">
            <div className="me-3">{accountAddress}</div>
            <Button onClick={() => {
                console.log('disconnect');
                disconnect();
            }}>DISCONNECT</Button>
        </div>
    );
};

export default UserDetails;