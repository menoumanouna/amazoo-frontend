import React from "react";
import { ActionBarButton } from "./actionButton.style";
import { ButtonProps } from "@mui/material/Button";

function ActionButton({
  children,
  withoutBg = false,
  ...props
}: { children: React.ReactNode; withoutBg: boolean } & ButtonProps) {
  return (
    <ActionBarButton withoutbg={withoutBg} variant={"contained"} {...props}>
      {children}
    </ActionBarButton>
  );
}

export default ActionButton;
