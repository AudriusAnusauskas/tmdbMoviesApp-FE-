import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';

import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';

const MoviesListContainer: React.FunctionComponent = () => {
  const { data, isError, isLoading, error } = useQuery('movies/', getMovies);
  if (isLoading) return <Loading />;

  if (isError) return <span>Error: {error}</span>;

  return (
    <div className={styles.moviesList}>
      {data?.movies.map((movie) => (
        <MovieCard key={movie.movieId} {...movie} />
      ))}
    </div>
  );
};

export default MoviesListContainer;
