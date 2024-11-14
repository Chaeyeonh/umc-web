import MoviesDesign from "../components/moviesDesign.jsx";
import useCustomFetch from '../hooks/useCustomFetch.js';
import Card from '../components/Card.jsx';

const Popular = () => {

  const{data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-KR&page=1`);

  if(isLoading){
    return<div> 
      <h1 style = {{color:'white'}}>로딩 중 입니다...</h1></div>
  }

  if (isError){
    return <div><h1 style = {{color:'white'}}>에러중</h1></div>
  }

  return (
    <MoviesDesign>
      {movies?.data?.results.map((movie) => (
        <Card key = {movie.id} movie={movie}/>
      ))}
    </MoviesDesign>
  );  
};

export default Popular;

