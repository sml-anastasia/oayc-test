import React from 'react';
import Button from "../../Button/Button";
import { useDefaultConnect } from "../../../hooks/web3/useDefaultConnect";

const ConnectWalletButton = () => {

    const {connect} = useDefaultConnect();

    return (
        <Button onClick={() => connect()}>
            CONNECT WALLET
        </Button>
    );
};

export default ConnectWalletButton;