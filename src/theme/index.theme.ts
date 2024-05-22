import { Theme, createTheme } from "@mui/material";
import lightPalette from "./light.palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import Button from "./customComponents/Button";
import Typography from "./customComponents/Typography";
import TextField from "./customComponents/TextField";
import Selector from "./customComponents/Selector";
const overriddenComponents = (theme: Theme) => {
  return Object.assign(
    Button(theme),
    Typography(theme),
    TextField(theme),
    Selector(theme)
  );
};
const theme = () => {
  const theme = createTheme({
    palette: { ...lightPalette },
    typography,
    breakpoints,
  });

  theme.components = overriddenComponents(theme);

  return theme;
};
export default theme;
