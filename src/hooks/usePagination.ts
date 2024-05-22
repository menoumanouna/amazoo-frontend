import { useState } from "react";

export const usePagination = () => {
  const [paginator, setPaginator] = useState({
    page: 1,
    perPage: 5,
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(paginator.page);

  const syncPage = () => setCurrentPage(paginator.page);

  const nextPage = () =>
    setPaginator((prev) => ({ ...prev, page: prev.page + 1 }));

  const prevPage = () =>
    setPaginator((prev) => ({ ...prev, page: prev.page - 1 }));

  const setPage = (value: number) =>
    setPaginator((prev) => ({ ...prev, page: value }));

  const setTotal = (value: number) =>
    setPaginator((prev) => ({ ...prev, total: value }));

  return {
    paginator,
    nextPage,
    prevPage,
    setPage,
    syncPage,
    currentPage,
    setTotal,
  };
};
