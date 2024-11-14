import React from 'react';
import MoviesDesign from '../../components/moviesDesign.jsx'; // MoviesDesign 컴포넌트 임포트
import useInfiniteFetch from '../useInfiniteFetch'; // useInfiniteFetch 훅 임포트
import Card from '../../components/Card.jsx'; // Card 컴포넌트 임포트

const Popular = () => {
  const { 
    data, 
    isLoading, 
    isError, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useInfiniteFetch('/movie/popular?language=ko-KR', ['popularMovies']);

  // 로딩 중일 때 표시
  if (isLoading) {
    return (
      <div> 
        <h1 style={{ color: 'white' }}>로딩 중 입니다...</h1>
      </div>
    );
  }

  // 에러 발생 시 표시
  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러가 발생했습니다</h1>
      </div>
    );
  }

  // 데이터 로드 후 결과 표시
  return (
    <MoviesDesign>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </React.Fragment>
      ))}

      {/* 다음 페이지가 있을 경우 "Load More" 버튼 */}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </MoviesDesign>
  );  
};

export default Popular;
