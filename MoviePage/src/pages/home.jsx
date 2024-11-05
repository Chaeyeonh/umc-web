
import {useEffect, useState} from 'react';

import ImageHover from '../ImageHover'; // ImageHover 컴포넌트 임포트
import MoviesDesign from "../components/moviesDesign.jsx";
import styled from 'styled-components';
import { axiosInstance } from '../apis/axios-instance.js';
import useCustomFetch from '../hooks/useCustomFetch.js';
import { Link } from 'react-router-dom';

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
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* 영화 카드 전체를 Link로 감싸서 클릭 시 상세 페이지로 이동 */}
          <PosterItem>
            <MovieInfo>
              <ImageHover
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                altText={movie.title}
              />
              <h3>{movie.title}</h3> {/* 영화 제목 출력 */}
              <p style={{ fontSize: 10 }}>개봉일: {movie.release_date}</p> {/* 영화 개봉일 출력 */}
            </MovieInfo>
          </PosterItem>
        </Link>
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