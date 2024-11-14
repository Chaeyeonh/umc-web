import { useSearchParams } from 'react-router-dom';
import * as S from './search.style.js';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchMovieList from '../../components/Movie/search-movie-list.jsx';
import useDebounce from '../../hooks/useDebounce.js';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mq = searchParams.get('mq');

  // 검색어가 변경될 때마다 debounce된 값을 URL에 반영
  useEffect(() => {
    if (debouncedSearchValue && debouncedSearchValue !== mq) {
      navigate(`/search?mq=${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue, mq, navigate]);

  // 검색어 입력 시 값 업데이트
  const onChangeSearchValue = (event) => setSearchValue(event.target.value);

  // 버튼 클릭 또는 Enter 키로 검색 실행
  const handleSearchMovie = () => {
    if (searchValue && searchValue !== mq) {
      navigate(`/search?mq=${searchValue}`);
    }
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  };

  return (
    <>
      <S.SearchContainer>
        <input
          placeholder="영화 제목을 입력해주세요..."
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList />
    </>
  );
};

export default SearchPage;
