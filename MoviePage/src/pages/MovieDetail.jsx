import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../apis/axios-instance';

function MovieDetail() {
  const { movieId } = useParams(); // URL에서 movieId 추출
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axiosInstance.get(`/movie/${movieId}`);
        const creditsResponse = await axiosInstance.get(`/movie/${movieId}/credits`);

        setMovie(movieResponse.data);
        setCredits(creditsResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>영화 정보를 불러올 수 없습니다.</p>;

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
