import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from "../apis/axios-instance.js";

const useInfiniteFetch = (url, queryKey) => {
  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosInstance.get(`${url}&page=${pageParam}`);
      return response.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.total_pages >= nextPage ? nextPage : undefined;
    },
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });
};

export default useInfiniteFetch;
