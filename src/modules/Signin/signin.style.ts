import { Box, Stack, styled } from "@mui/material";

export const SigninContainer = styled(Box)(({}) => ({
  height: "100vh",
}));

export const SignInBackgroundContainer = styled(Box)(({}) => ({
  height: "100vh",
  display: "flex",
}));

export const LeftBackgroundStack = styled(Stack)<{
  image: string;
  noOverlay?: boolean;
}>(({ image }) => ({
  backgroundColor: "#F0F0FF",
  background: `linear-gradient(to top,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const SignInForm = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "30%",
  height: "100%",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
}));
