import axios from "axios";
import { endpoints } from "@constants/endpoints";
import { DecodedValueMap } from "use-query-params";
import { withPagination } from "@_types/pagination";
import { IUser, IUserPartialQueryParams } from "@_types/user";

const getUsersList = async (query: DecodedValueMap<IUserPartialQueryParams>): Promise<withPagination<Array<IUser>>> => {
  const users = await axios.get<Array<IUser>>(endpoints.users, { params: query });

  //@ts-ignore
  const page_size = users.headers.get("x-total-count");

  return {
    data: users.data,
    total_count: page_size,
  };
};

export default getUsersList;
