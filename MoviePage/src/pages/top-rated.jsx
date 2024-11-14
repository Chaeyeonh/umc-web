
import {useEffect, useState} from 'react';
import axios from "axios";
import ImageHover from '../ImageHover'; // ImageHover 컴포넌트 임포트
import MoviesDesign from "../components/moviesDesign.jsx";
import styled from 'styled-components';
import { axiosInstance } from '../apis/axios-instance.js';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';

const TopRated = () => {

  const[movies,setMovies] = useState([])

  //컴포넌트가 처음 마운트될 때 한 번만 실행되어 The Movie Database API에서 영화 데이터를 가져오도록 설정
  useEffect(() => {
    //getMovies: 영화 데이터 가져오는 비동기 함수
    //axios.get(): themoviedb api에 GET 요청 보내고 인기 영화 데이터 받아오기
    const getMovies = async () => {
        const movies = await axiosInstance.get(`/movie/top_rated?language=ko-KR&page=1`)
        setMovies(movies);//axios로부터 받아온 영화 데이터를 movies 상태로 업데이트
    }
    getMovies() // 만든 함수를 호출해 데이터 가져옴
}, []); // useEffect가 한 번만 실행되도록 두 번째 인자 빈배열


  return (
    <MoviesDesign>
      {movies?.data?.results.map((movie) => (
        <Card key = {movie.id} movie={movie}/>
      ))}
    </MoviesDesign>
  );  
};

export default TopRated;

