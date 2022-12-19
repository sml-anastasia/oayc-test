const sizes ={
    tablet: 744,
    laptopL: 1440,
    desktop: 1800,
}

const size = {
    tablet: `${sizes.tablet}px`,
    laptopL: `${sizes.laptopL}px`,
    desktop: `${sizes.desktop}px`
};

export const device = {
    tablet: `(min-width: ${size.tablet})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};
