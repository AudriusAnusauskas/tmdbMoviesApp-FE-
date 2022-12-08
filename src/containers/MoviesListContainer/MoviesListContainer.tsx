import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer: React.FunctionComponent = () => {
  const { data } = useQuery('movies', getMovies);

  return <div className={styles.moviesList}>{data ? JSON.stringify(data) : <Loading />}</div>;
};

export default MoviesListContainer;
