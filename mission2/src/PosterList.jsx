import React from 'react';
import { MOVIES } from './mocks/movies'; // 더미 데이터 임포트
import ImageHover from './ImageHover'; // ImageHover 컴포넌트 임포트

const PosterList = () => {
  return (
    <div style={styles.posterContainer}>
      {MOVIES.results.slice(0, 20).map((movie) => (
        <div key={movie.id} style={styles.posterItem}>
          <ImageHover
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            altText={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  posterContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',  // 한 줄에 10개의 포스터
    gap: '10px',  // 포스터 간격
    justifyContent: 'center',
    marginTop: '20px',
  },
  posterItem: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default PosterList;