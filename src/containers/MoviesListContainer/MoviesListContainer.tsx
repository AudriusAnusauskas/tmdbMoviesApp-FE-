import React from 'react';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer: React.FunctionComponent = () => {
  const { data } = useQuery('movies', getMovies);
  return <div className={styles.moviesList}>{JSON.stringify(data)}</div>;
};

export default MoviesListContainer;
