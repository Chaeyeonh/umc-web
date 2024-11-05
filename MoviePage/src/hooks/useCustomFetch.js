import { axiosInstance } from '../apis/axios-instance.js';
import {useState, useEffect} from "react";

//const{data, isLoading, isError} = useCustomFetch('url');
//로딩중인지, 에러처리 중인지..를 즉각적으로 알 수 있게 하기 위해!!
const useCustomFetch = (url) => {
  const [data, setData] = useState([]);

  //loading 처리 , error 처리
  const[isLoading, setIsLoading] = useState(); //false 기본
  const [isError, setIsError] = useState();//false 기본

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try{
        const response = await axiosInstance.get(url);
        setData(response);
      }catch(error){
        setIsError(true);

      }finally{
        setIsLoading(false);
      }
    }
    fetchData();
  },[url]);
  return {data, isLoading, isError}
}

export default useCustomFetch;