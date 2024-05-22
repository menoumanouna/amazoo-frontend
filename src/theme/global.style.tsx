import { alpha, useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        ":hover::-webkit-scrollbar-thumb:vertical": {
          borderRadius: 20,
          background: `transparent linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
        },
        ":hover::-webkit-scrollbar-track": {
          backgroundColor: alpha(theme.palette.primary.light, 0.05),
        },
        "*::-webkit-scrollbar": {
          width: 6,
          height: 7,
        },
        ":hover::-webkit-scrollbar": {
          width: 7,
          height: 7,
          borderRadius: 4,
        },
        ":hover::-webkit-scrollbar-thumb": {
          borderRadius: 2,
          background: `transparent linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        },
      }}
    />
  );
}
