import { TableCell, Typography } from "@mui/material";
import { ReactNode } from "react";

function BaseTableCell({
  align,
  children,
}: {
  children: ReactNode | string;
  align?: "right" | "left";
}) {
  return (
    <TableCell align={align ?? "left"}>
      {typeof children === "string" ? (
        <Typography>{children}</Typography>
      ) : (
        children
      )}
    </TableCell>
  );
}

export default BaseTableCell;
