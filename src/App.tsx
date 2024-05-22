import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { RouterDom } from "./router/routes";
import theme from "./theme/index.theme";
import GlobalStyles from "./theme/global.style";
export function App() {
  const baseTheme = theme();
  return (
    <Stack>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <GlobalStyles />
        <RouterDom />
      </ThemeProvider>
    </Stack>
  );
}

export default App;
