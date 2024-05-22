import { styled } from "@mui/material/styles";
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)<{
  backgroundColor?: string;
}>(({ theme, backgroundColor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light"
        ? backgroundColor ?? theme.palette.primary.main
        : "#308fe8",
  },
}));
function BorderLinearProgressBar({
  backgroundColor,
  ...props
}: LinearProgressProps & {
  backgroundColor?: string;
}) {
  return <BorderLinearProgress backgroundColor={backgroundColor} {...props} />;
}

export default BorderLinearProgressBar;
