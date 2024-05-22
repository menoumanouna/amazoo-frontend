import { Stack, styled } from "@mui/material";
import { baseAppColors } from "../../config/color.constants";

export const DashboardLayoutContainer = styled(Stack)({
  height: "100vh",
});
export const UpperBar = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: baseAppColors.FIRST_GRADIENT,
  height: 50,
}));

export const DashboardLayoutMain = styled(Stack)({
  width: "100vw",
  height: "100vh",
});

export const DashboardLayoutContent = styled(Stack)({
  width: "100%",
});
