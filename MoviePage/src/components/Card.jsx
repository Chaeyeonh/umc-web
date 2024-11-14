import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageHover from '../ImageHover'; // ImageHover 컴포넌트 임포트

const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <PosterItem>
        <MovieInfo>
          <ImageHover
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // 수정된 부분
            altText={movie.title} // 수정된 부분
          />
          <h3>{movie.title}</h3> {/* 영화 제목 출력 */}
          <p style={{ fontSize: 10 }}>개봉일: {movie.release_date}</p> {/* 영화 개봉일 출력 */}
        </MovieInfo>
      </PosterItem>
    </Link>
  );
};

export default Card;

const PosterItem = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieInfo = styled.div`
  display: block;
`;
