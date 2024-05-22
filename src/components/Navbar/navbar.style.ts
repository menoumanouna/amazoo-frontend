import { BorderBottom } from "@mui/icons-material";
import { Stack, Typography, styled } from "@mui/material";

export const BaseNavBar = styled(Stack)({
  backgroundColor: "transparent",
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
});

export const NavBarItems = styled(Stack)({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const NavBarItem = styled(Typography)(({ theme }) => ({
  color: "white",
  cursor: "pointer",
  "&:hover": {
    borderBottom: "2px solid white",
  },
}));
