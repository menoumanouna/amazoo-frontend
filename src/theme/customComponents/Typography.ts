import { Theme } from "@mui/material";

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "0s",
          color: theme.palette.text.secondary,
        },
      },
    },
  };
}
