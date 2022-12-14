import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';

import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';

const MoviesListContainer: React.FunctionComponent = () => {
  const { data } = useQuery('movies/', getMovies);

  return <div className={styles.moviesList}>{data ? <MovieCard /> : <Loading />}</div>;
};

export default MoviesListContainer;
