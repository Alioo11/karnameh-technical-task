import { QueryParamConfig } from "use-query-params";

export type sortable<S extends string> = `${S}` | `-${S}`;

export type sortOrder = "asc" | "desc";

export interface IPagination {
  _start: QueryParamConfig<number>;
}
