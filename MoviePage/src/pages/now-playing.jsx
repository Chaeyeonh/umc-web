import MoviesDesign from "../components/moviesDesign.jsx";
import Card from '../components/Card.jsx';
import { useGetMovies } from "../hooks/queries/useGetMovies.js";
import { useQuery } from "@tanstack/react-query";

const NowPlaying = () => {
  const { data: movies, isLoading, isError } = useQuery({
    queryKey: ['movies', 'now_playing'],
    queryFn: () => useGetMovies({ category: 'now_playing', pageParam: 1 }), // pageParam을 명시적으로 전달
    cacheTime: 10000,
    staleTime: 10000,

  });

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>로딩 중 입니다...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러중</h1>
      </div>
    );
  }

  return (
    <MoviesDesign>
      {movies?.results?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </MoviesDesign>
  );
};

export default NowPlaying;
