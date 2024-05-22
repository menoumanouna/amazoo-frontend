import { Theme } from "@mui/material";

export default function Selector(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "0s",
          color: theme.palette.text.secondary,
          "&.MuiSelect-select": {
            backgroundColor: "red",
          },
        },
      },
    },
  };
}
