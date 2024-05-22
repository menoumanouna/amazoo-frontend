import { Stack, Typography, styled } from "@mui/material";
import { baseAppColors } from "../../config/color.constants";

export const BaseSideBar = styled(Stack)(({ theme }) => ({
  backgroundColor: baseAppColors.FIRST_GRADIENT,
  textAlign: "center",
  height: "100%",
  width: "100%",
  padding: theme.spacing(1),
}));

export const SideBarrItems = styled(Stack)(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

export const SideBarrItem = styled(Stack)<{ selected: string }>(
  ({ theme, selected }) => ({
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    borderBottom:
      selected === "false" ? `1px solid ${theme.palette.divider}` : "none",
    color: "white",
    cursor: "pointer",
    backgroundColor:
      selected === "true" ? theme.palette.primary.main : "transparent",
    width: "100%",
    textAlign: "center",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.action.selected,
    },
  })
);

export const ItemHolder = styled(Typography)<{ selected: string }>(
  ({ theme, selected }) => ({
    color: "white",
    alignItems: "center",
  })
);
