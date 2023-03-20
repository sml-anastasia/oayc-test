const sizes = {
  tablet: 744,
  tabletL: 1100,
  laptopL: 1440,
  desktop: 1800,
};

const size = {
  tablet: `${sizes.tablet}px`,
  tabletL: `${sizes.tabletL}px`,
  laptopL: `${sizes.laptopL}px`,
  desktop: `${sizes.desktop}px`,
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
