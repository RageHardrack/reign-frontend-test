import { useCallback, useEffect, useState } from "react";
import { HackerNewsService } from "services";
import { INews } from "interfaces";

/**
 * Custom hook to fetch data from the API using the url property.
 */
export const useFetch = (url: string) => {
  const [data, setData] = useState<INews>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await HackerNewsService.getNews(url);

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

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
