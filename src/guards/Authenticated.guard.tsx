import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/useAppRTK";

function Authenticated({ children }: { children: ReactNode }) {
  const { user } = useAppSelector((state) => state.auth);

  if (!!user) {
    return <Stack>{children}</Stack>;
  } else {
    return <Navigate to={"/signin"} />;
  }
}

export default Authenticated;
