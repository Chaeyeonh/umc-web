
import {useEffect, useState} from 'react';
import {axiosInstance} from "../apis/axios-instance.js";
import ImageHover from '../ImageHover'; // ImageHover 컴포넌트 임포트
import MoviesDesign from "../components/moviesDesign.jsx";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const NowPlaying = () => {

  const[movies,setMovies] = useState([])

  //컴포넌트가 처음 마운트될 때 한 번만 실행되어 The Movie Database API에서 영화 데이터를 가져오도록 설정
  useEffect(() => {
    //getMovies: 영화 데이터 가져오는 비동기 함수
    //axios.get(): themoviedb api에 GET 요청 보내고 인기 영화 데이터 받아오기
    const getMovies = async () => {
        const movies = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=1`)
        setMovies(movies);//axios로부터 받아온 영화 데이터를 movies 상태로 업데이트
    }
    getMovies() // 만든 함수를 호출해 데이터 가져옴
}, []); // useEffect가 한 번만 실행되도록 두 번째 인자 빈배열


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

export default NowPlaying;

const PosterItem = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieInfo = styled.div`
  display: block;

`;