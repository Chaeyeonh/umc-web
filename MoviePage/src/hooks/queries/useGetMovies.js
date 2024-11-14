
import { axiosInstance } from "../../apis/axios-instance.js";

const useGetMovies = async ({category,pageParam = 1}) => {
  const {data} = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`)
  return data;
}

export {useGetMovies}