import React from 'react';
import ArrowSurround from "./ArrowSurround";
import { MintStatus, MutationWindowContainer } from "./MutationWindow";
import { useWindowSize } from "../../hooks/useScreenWidth";

const Placeholder = () => {
    const {isMobile} = useWindowSize();

    return (
        <MutationWindowContainer noContent>
            <ArrowSurround sideArrows={!isMobile}>
                <MintStatus noContent>
                    {`MINT IS NOT LIVE YET`}
                </MintStatus>
            </ArrowSurround>
        </MutationWindowContainer>
    );
};

export default Placeholder;