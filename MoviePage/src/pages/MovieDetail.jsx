import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';

function MovieDetail() {
  const { movieId } = useParams(); // URL에서 movieId 추출

  // 영화 정보 요청
  const { data: movie, isLoading: isLoadingMovie, isError: isErrorMovie } = useQuery({
    queryKey: ['movieDetails', movieId], // queryKey는 고유한 배열 형태
    queryFn: async () => {
      const response = await axiosInstance.get(`/movie/${movieId}`);
      return response.data;
    },
  });

  // 출연진 정보 요청
  const { data: credits, isLoading: isLoadingCredits, isError: isErrorCredits } = useQuery({
    queryKey: ['movieCredits', movieId], // queryKey는 고유한 배열 형태
    queryFn: async () => {
      const response = await axiosInstance.get(`/movie/${movieId}/credits`);
      return response.data;
    },
  });

  // 로딩 상태 처리
  if (isLoadingMovie || isLoadingCredits) return <p>Loading...</p>;
  if (isErrorMovie || isErrorCredits) return <p>영화 정보를 불러올 수 없습니다.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>개봉일: {movie.release_date}</p>

      <h2>출연진</h2>
      <ul>
        {credits?.cast?.map((castMember) => (
          <li key={castMember.id}>{castMember.name} as {castMember.character}</li>
        ))}
      </ul>

      <h2>감독</h2>
      <ul>
        {credits?.crew
          ?.filter((crewMember) => crewMember.job === 'Director')
          .map((director) => (
            <li key={director.id}>{director.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
