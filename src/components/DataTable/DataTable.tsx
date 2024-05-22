import { ReactNode } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BaseTableCell from "./components/BaseTableCell";
import { Typography, useTheme } from "@mui/material";

export default function DataTable({
  header,
  children,
}: {
  header: string[];
  children: ReactNode;
}) {
  const theme = useTheme();
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.grey[300] }}>
            {header.map((name, index) => {
              return index === 0 ? (
                <BaseTableCell key={index}>
                  <Typography>{name}</Typography>
                </BaseTableCell>
              ) : (
                <BaseTableCell key={index} align="right">
                  <Typography>{name}</Typography>
                </BaseTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
