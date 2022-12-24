import React from 'react';
import ArrowSurround from "./ArrowSurround";
import { MintStatus, MutationWindowContainer } from "./MutantMintWindow";
import { useWindowSize } from "../../hooks/useScreenWidth";

const Placeholder = () => {
    const {isMobile} = useWindowSize();

    return (
        <MutationWindowContainer noContent>
            <ArrowSurround sideArrows={!isMobile}>
                <MintStatus noContent>
                    {`MUTATION IS NOT LIVE YET`}
                </MintStatus>
            </ArrowSurround>
        </MutationWindowContainer>
    );
};

export default Placeholder;