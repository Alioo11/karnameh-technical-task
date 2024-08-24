import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TextField  from "@mui/material/TextField";
import UserTable from "@components/User/Table";
import UserOverlay from "@components/User/Overlay";
import QueryParamHelper from "@helpers/queryParam";
import UserService from "@services/user";
import useToggle from "@hooks/useToggle";
import { useQueryParams } from "use-query-params";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { DEFAULT_PAGE_SIZE } from "@constants/pagination";
import { DEBOUNCE_TIMEOUT_IN_MS } from "@constants/index";
import type { sortOrder } from "@_types/queryParam";
import type { IUser, IUserPartialQueryParams, IUserSortingQueryParams } from "@_types/user";

const useQueryParamObservableKeys = ["_start", "name_like", "_sort"];
let timeoutRef: NodeJS.Timeout | null = null;

const DashboardPage = () => {
  const { name_like } = useParams();
  const [name, setName] = useState<IUser["name"]>(name_like || "");
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [usersCount, setUsersCount] = useState<number>();
  const [loading, toggleLoading] = useToggle();
  const [selectedUserId, setSelectedUserId] = useState<IUser["id"] | null>(null);
  const [queryParams, setQueryParams] = useQueryParams<IUserPartialQueryParams>(useQueryParamObservableKeys);

  const handleFetchUsersData = async () => {
    try {
      toggleLoading();
      const query = { ...queryParams };
      query._limit = DEFAULT_PAGE_SIZE;
      const users = await UserService.list(query);
      setUsers(users.data);
      setUsersCount(users.total_count);
    } catch (error) {
      console.error(error);
      toast.error("failed to fetch users data!", { position: "top-right" });
    } finally {
      toggleLoading();
    }
  };

  const handleSort = (key: string, order: sortOrder) => {
    const sortKey = QueryParamHelper.mapSortOrderToSortKey(key, order) as IUserSortingQueryParams;
    setQueryParams({ _sort: sortKey });
  };

  const selectedUser: IUser | null = useMemo(() => {
    if (!selectedUserId || users.length === 0) return null;
    const foundedUser = users.find((usr) => usr.id === selectedUserId);
    return foundedUser || null;
  }, [users, selectedUserId]);

  useEffect(() => {
    timeoutRef = setTimeout(() => {
      setQueryParams({ name_like: name || undefined });
    }, DEBOUNCE_TIMEOUT_IN_MS);

    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
        timeoutRef = null;
      }
    };
  }, [name]);

  useEffect(() => {
    handleFetchUsersData();
  }, [queryParams]);

  return (
    <Box>
      <ToastContainer />
      <UserOverlay user={selectedUser} onClose={() => setSelectedUserId(null)} />
      <TextField
        label="name"
        placeholder="search..."
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        size="small"
      />
      <UserTable
        page={queryParams._start / DEFAULT_PAGE_SIZE || 0}
        totalCount={usersCount || 0}
        onPageChange={(newPage) => setQueryParams({ _start: newPage * DEFAULT_PAGE_SIZE })}
        onEmailOrderChange={(order) => handleSort("email", order)}
        onNameOrderChange={(order) => handleSort("name", order)}
        emailOrder={QueryParamHelper.mapSortKeyToSortOrder("email", queryParams._sort)}
        nameOrder={QueryParamHelper.mapSortKeyToSortOrder("name", queryParams._sort)}
        onUserClick={(userId) => setSelectedUserId(userId)}
        loading={loading}
        data={users}
      />
    </Box>
  );
};

export default DashboardPage;
