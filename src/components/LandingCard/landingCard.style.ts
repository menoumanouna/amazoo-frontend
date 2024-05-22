import { Stack, styled } from "@mui/material";

export const MainHolder = styled(Stack)<{
  hasmorethanoneimage?: string;
  direction: "row" | "column";
  floating: string;
}>(({ theme, ...props }) => ({
  width: "70%",
  height: props.hasmorethanoneimage === "false" ? "50%" : "70%",
  display: "flex",
  flexDirection:
    `${props.direction}${props.floating === "true" && "-reverse"}` as
      | "row"
      | "row-reverse"
      | "column"
      | "column-reverse",
  alignItems: "center",
}));
