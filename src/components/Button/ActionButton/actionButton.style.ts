import { Button, styled } from "@mui/material";

export const ActionBarButton = styled(Button)<{ withoutbg?: string }>(
  ({ theme, withoutbg }) => ({
    borderRadius: 8,
    fontSize: "0.8rem",
    backgroundColor: withoutbg
      ? theme.palette.grey[300]
      : theme.palette.primary.main,
    color: withoutbg ? theme.palette.text.primary : "white",
  })
);
