import { Maybe } from "@_types/index";
import { sortOrder } from "@_types/queryParam";

class QueryParamHelper {
  static reverseOrder = (order?: sortOrder) => (order === "asc" ? "desc" : "asc");

  static mapSortKeyToSortOrder = (key: string, sortKey: Maybe<string>): Maybe<sortOrder> => {
    if (!sortKey) return;
    const isDescOrder = sortKey.startsWith("-");
    const isValidSortKey = sortKey.endsWith(key);
    if(!isValidSortKey)return

    return isDescOrder ? "desc" : "asc";

  };

  static mapSortOrderToSortKey = (key: string, order: sortOrder): string => {
    const prefix = order === "asc" ? "" : "-";
    return prefix + key;
  };
}

export default QueryParamHelper;
