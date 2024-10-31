
import {useEffect, useState} from 'react';
import axios from "axios";
import ImageHover from '../ImageHover'; // ImageHover 컴포넌트 임포트
import MoviesDesign from "../components/moviesDesign.jsx";
import styled from 'styled-components';
const Upcoming = () => {

  const[movies,setMovies] = useState([])

  //컴포넌트가 처음 마운트될 때 한 번만 실행되어 The Movie Database API에서 영화 데이터를 가져오도록 설정
  useEffect(() => {
    //getMovies: 영화 데이터 가져오는 비동기 함수
    //axios.get(): themoviedb api에 GET 요청 보내고 인기 영화 데이터 받아오기
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU2NGJkMGU0NTU1NWJkNWVmODdkNDMxNThhNGRjZCIsIm5iZiI6MTcyODQ4OTM5Mi42NzMzMzksInN1YiI6IjY3MDY4MzQ5ZGM1NGYyOWQwZWFiNmRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HVQYrdVe893G74GX-jqj_-uOglWhyVQWKS96fog6cNo`,
            }
        })
        setMovies(movies);//axios로부터 받아온 영화 데이터를 movies 상태로 업데이트
    }
    getMovies() // 만든 함수를 호출해 데이터 가져옴
}, []); // useEffect가 한 번만 실행되도록 두 번째 인자 빈배열

  return (
    <MoviesDesign> 
      {movies.data?.results.map((movie) => (
        <PosterItem key={movie.id}>
           
           <MovieInfo>
            <ImageHover
            // imageUrl, altText는 ImageHover컴포넌트로 전달되는 props
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              altText={movie.title}
            />
            <h3>{movie.title}</h3>  {/* 영화 제목 출력 */}
            <p>개봉일: {movie.release_date}</p>  {/* 영화 개봉일 출력 */}
           </MovieInfo>
            
         
        </PosterItem>
      ))}

    </MoviesDesign>
  );
};

export default Upcoming;

const PosterItem = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieInfo = styled.div`
  display: block;

`;