import { PaletteOptions } from "@mui/material";
import { baseAppColors } from "../config/color.constants";

const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    light: "#F0EDEA",
    main: baseAppColors.SECOND_GRADIENT,
    dark: baseAppColors.SECOND_GRADIENT,
  },
  secondary: {
    light: baseAppColors.FIRST_GRADIENT,
    main: baseAppColors.FIRST_GRADIENT,
    dark: baseAppColors.FIRST_GRADIENT,
  },
  info: {
    light: "#BE4FE4",
    main: "#ED54CD",
    dark: "#66415e",
  },
  success: {
    light: "#BE4FE4",
    main: "#ED54CD",
    dark: "#66415e",
  },
  warning: {
    light: "#BE4FE4",
    main: "#ED54CD",
    dark: "#66415e",
  },
  error: {
    light: "#FFB3C9",
    main: "#FF5E78",
    dark: "#B2002D",
  },

  grey: {
    50: "#FFFFFF",
    100: "#FAFAFF",
    200: "#F5F6F8",
    300: "#F5F5F5",
    400: "#BDCBE6",
    500: "#252427",
    600: "#7A8CB1",
    800: "#090909",
    900: "#000000",
    A100: "#F4F7FD",
    A200: "#D8DFEF",
  },
  text: {
    primary: "#000000",
    secondary: "#000f0",
  },
};
export default lightPalette;
