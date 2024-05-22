import { Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "0s",
          color: "white",
        },
        contained: {
          borderRadius: "60px",
          color: "white",
          "&:hover": {
            color: "white",
          },
        },
        sizeLarge: {
          height: 50,
        },
      },
    },
  };
}
