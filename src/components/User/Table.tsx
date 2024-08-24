
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import TableSkeleton from "@components/Kit/Table/Skeleton";
import { Case, Default, Switch } from "react-if";
import QueryParamHelper from "@helpers/queryParam";
import { DEFAULT_PAGE_SIZE } from "@constants/pagination";
import { grey } from "@mui/material/colors";
import type { Maybe } from "@_types/index";
import type { sortOrder } from "@_types/queryParam";
import type { IUser } from "@_types/user";
import type { FunctionComponent } from "react";



interface UserTableProps {
  loading: boolean;
  page: number;
  totalCount: number;
  onPageChange: (newPage: number) => void;
  nameOrder: Maybe<sortOrder>;
  emailOrder: Maybe<sortOrder>;
  onNameOrderChange: (order: sortOrder) => void;
  onEmailOrderChange: (order: sortOrder) => void;
  onUserClick: (userId: IUser["id"]) => void;
  data: Array<IUser>;
}

const UserTable: FunctionComponent<UserTableProps> = (props) => {
  const {
    loading,
    page,
    totalCount: pageSize,
    onPageChange,
    nameOrder,
    emailOrder,
    onNameOrderChange,
    onEmailOrderChange,
    onUserClick,
    data,
  } = props;

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>
              <TableSortLabel
                onClick={() => onNameOrderChange(QueryParamHelper.reverseOrder(nameOrder))}
                active={!!nameOrder}
                direction={nameOrder}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                onClick={() => onEmailOrderChange(QueryParamHelper.reverseOrder(emailOrder))}
                active={!!emailOrder}
                direction={emailOrder}
              >
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Website</TableCell>
          </TableHead>
          <TableBody sx={{ width: "100%" }}>
            <Switch>
              <Case condition={loading}>
                <TableSkeleton rows={5} columns={4} />
              </Case>
              <Case condition={data.length === 0}>
                <TableCell align="center" colSpan={4} sx={{ color: grey["500"], border: "none", height: 300 }}>
                  no record found !
                </TableCell>
              </Case>
              <Default>
                {data.map((record) => {
                  return (
                    <TableRow sx={{ cursor: "pointer" }} onClick={() => onUserClick(record.id)} key={record.id}>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.email}</TableCell>
                      <TableCell>{record.phone}</TableCell>
                      <TableCell>{record.website}</TableCell>
                    </TableRow>
                  );
                })}
              </Default>
            </Switch>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={pageSize}
        page={page}
        rowsPerPageOptions={[]} // prevents row per page component to render
        onPageChange={(_, newPage) => onPageChange(newPage)}
        rowsPerPage={DEFAULT_PAGE_SIZE}
      />
    </>
  );
};

export default UserTable;
