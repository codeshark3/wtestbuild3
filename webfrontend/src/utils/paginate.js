import _ from "lodash";

export function paginate({ tests, pageNumber, pageSize }) {
  const startIndex = (pageNumber - 1) * pageSize;
  _(tests).slice(startIndex).take(pageSize).value();
  // _.slice(items,startIndex)
}
