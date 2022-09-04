import { useCallback, useEffect, useState } from "react";
import { HackerNewsService } from "services";

export const useFetch = (filter: string, page: number) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const getData = useCallback(async () => {
    try {
      const data = await HackerNewsService.getNews(
        `/search_by_date?query=${filter}&page=${page}`
      );

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [filter, page]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    isLoading,
    error,
    refresh: getData,
  };
};
