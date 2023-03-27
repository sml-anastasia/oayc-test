export enum Style {
  DEFAULT,
  MUTANT,
}

export interface Theme {
  style: Style;
  primaryTextColor: string;
  secondaryTextColor: string;
  textClipColor: string;
  primaryBackground: string;
  secondaryBackground: string;
}

export const defaultTheme: Theme = {
  style: Style.DEFAULT,
  primaryTextColor: "#FF0420",
  secondaryTextColor: "#ffffff",
  textClipColor: "#FF0420",

  primaryBackground: "#ff0420",
  secondaryBackground: "white",
};

export const mutantTheme: Theme = {
  style: Style.MUTANT,
  primaryTextColor: "#77b102",
  secondaryTextColor: "#191919",
  textClipColor: "linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%)",

  primaryBackground:
    "linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%)",
  secondaryBackground:
    "linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%)",
};
