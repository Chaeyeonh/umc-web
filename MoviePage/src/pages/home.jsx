
import {useEffect, useState} from 'react';
import MoviesDesign from "../components/moviesDesign.jsx";
import styled from 'styled-components';
import { axiosInstance } from '../apis/axios-instance.js';
import useCustomFetch from '../hooks/useCustomFetch.js';
import Card from '../components/Card.jsx';

const HomePage = () => {

  const{data: movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-KR&page=1`);

  if(isLoading){
    return<div> 
      <h1 style = {{color:'white'}}>로딩 중 입니다...</h1></div>
  }

  if (isError){
    return <div><h1 style = {{color:'white'}}>에러중</h1></div>
  }

  return (
    <MoviesDesign>
      {movies?.data?.results.map((movie) => (
        <Card key = {movie.id} movie={movie}/>
      ))}
    </MoviesDesign>
  );  
};

export default HomePage;

const PosterItem = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieInfo = styled.div`
  display: block;

`;