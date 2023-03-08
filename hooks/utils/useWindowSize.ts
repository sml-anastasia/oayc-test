import { useEffect, useState } from "react";

const sizes = {
    tablet: 743,
    laptopL: 1440,
    desktop: 1800,
};

const isMobile = (width: number) => width < sizes.tablet;
const isTablet = (width: number) => width >= sizes.tablet && width < sizes.laptopL;
const isLaptop = (width: number) => width >= sizes.laptopL && width < sizes.desktop;
const isDesktop = (width: number) => width >= sizes.desktop;

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        isMobile: isMobile(windowSize.width),
        isTablet: isTablet(windowSize.width),
        isLaptop: isLaptop(windowSize.width),
        isDesktop: isDesktop(windowSize.width),
    };

};