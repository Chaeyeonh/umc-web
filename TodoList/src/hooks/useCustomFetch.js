import { axiosInstance } from '../apis/axios-instance.js';
import {useState, useEffect} from "react";

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
}//url이 변경 -> fetchDat호출... 불필요한 호출 발생. ex) 명탐정 코난 검색할 때 ㅁ,ㅕ,마다...

export default useCustomFetch;