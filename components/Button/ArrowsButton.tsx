import React from 'react';
import MoaycButton from "./MoaycButton";
import ArrowSurround from "../Mutant/ArrowSurround";


const ArrowsButton = ({children, ...rest}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <ArrowSurround>
            <MoaycButton {...rest}>{children}</MoaycButton>

        </ArrowSurround>

    );
};

export default ArrowsButton;