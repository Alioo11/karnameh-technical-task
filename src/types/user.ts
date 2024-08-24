import { QueryParamConfig, QueryParamConfigMap } from "use-query-params";
import type { IAddress } from "./address";
import type { ICompany } from "./company";
import type { IPagination, sortable } from "./queryParam";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

type IUserSortingQueryParams = sortable<"email"> | sortable<"name">;

interface IUserQueryParams extends QueryParamConfigMap {
  name_like: QueryParamConfig<string>;
  _sort: QueryParamConfig<IUserSortingQueryParams >;
}

interface IUserPartialQueryParams extends IUserQueryParams , IPagination {};


export { type IUser, type IUserPartialQueryParams , type IUserSortingQueryParams };