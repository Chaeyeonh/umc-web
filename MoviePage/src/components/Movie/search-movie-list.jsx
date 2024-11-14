import * as S from '../../pages/Search/search.style.js'
import Card from '../Card.jsx';
import { useSearchParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch.js';

const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({ mq: '' });
  const mq = searchParams.get('mq');
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const { data: movies, isLoading, isError } = useCustomFetch(url);

  if (isLoading){
    return(
      <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h2 style = {{color: 'white'}}> 로딩중 입니다...</h2>
      </div>
    )
  }
  
  //검색 결과가 없을 때
  if (mq && movies?.data?.results.length === 0) {

    return(
      <div style={{textAlign: 'center', marginTop: '30px'}}>
      <h2 style = {{color: 'white'}}> 해당하는 검색어 {mq}에</h2>
      <h2 style = {{color: 'white'}}> 해당하는 데이터가 없습니다. </h2>
      </div>
    )
  }
  console.log(movies);  // 데이터 구조 확인
  return(
    <S.MovieGridContainer>
        {movies?.data?.results.map((movie) => (
          <Card key = {movie.id} movie={movie}/>
        ))}
    </S.MovieGridContainer>
  );
};

export default SearchMovieList;