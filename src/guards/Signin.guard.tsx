import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/useAppRTK";

function SigninGuard({ children }: { children: ReactNode }) {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return <Stack>{children}</Stack>;
  }
}

export default SigninGuard;
