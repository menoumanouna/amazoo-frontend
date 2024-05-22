import { Theme } from "@mui/material";

export default function TextField(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.palette.text.secondary,
        },
      },
    },
  };
}
