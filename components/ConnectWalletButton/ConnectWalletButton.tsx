import React from 'react';
import Button from "../Button/Button";
import { useDefaultConnect } from "../../hooks/useDefaultConnect";

const ConnectWalletButton = () => {

    const {connect} = useDefaultConnect();

    return (
        <Button onClick={() => connect()}>
            CONNECT WALLET
        </Button>
    );
};

export default ConnectWalletButton;