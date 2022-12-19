import React from 'react';
import EyeIcon from "../Icons/EyeIcon";
import SlashesIcon from "../Icons/SlashesIcon";

const Footer = () => {
    return (
        <div className="d-flex mb-3 align-items-end">
            <p className="text-footer-1 w-50">
                OPTIMISTIC <br/> APE YACHT CLUB
            </p>
            <div className="w-50 text-end">
                <EyeIcon className="svg-footer-2"/>
                <SlashesIcon className="svg-footer-2"/>
                <p className="text-footer-2">
                    THE BEST DERIV<br/>ON THIS F****N PLANET
                </p>
            </div>
        </div>
    );
};

export default Footer;