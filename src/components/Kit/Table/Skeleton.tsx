import Skeleton from "@mui/material/Skeleton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { FunctionComponent } from "react";

interface TableSkeletonProps {
  rows: number;
  columns: number;
}
const TableSkeleton: FunctionComponent<TableSkeletonProps> = (props) => {
  const { rows, columns } = props;

  const rowsList = Array.from(new Array(rows).keys());

  return (
    <>
      {rowsList.map((rowIdx) => {
        return (
          <TableRow key={rowIdx}>
            {Array.from(new Array(columns).keys()).map((columIdx) => (
              <TableCell key={columIdx} component="th" scope="row">
                <Skeleton animation="wave" variant="text" />
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};

export default TableSkeleton;
