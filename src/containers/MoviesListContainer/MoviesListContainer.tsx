import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';
import Pagination from 'components/Pagination/Pagination';

import MoviesListFilter from '../../components/Form/MoviesListFilter/MoviesListFilter';
import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const title = searchParams.get('title') ?? 'harry';
  const genres = searchParams.get('genres') ?? [12];
  const sort = searchParams.get('sort') ?? 'original_title.asc';
  const activePage = page ? parseInt(page, 10) : 1;

  const fetchMovies = () => {
    return getMovies(activePage, title, genres as number[], sort);
  };

  const { data, isError, isLoading, error } = useQuery(['movies', { page: activePage, title, genres, sort }], fetchMovies);
  if (isLoading) return <Loading />;

  if (isError) return <span>Error: {error}</span>;
  const movies = data?.page === activePage ? data.movies : [];

  const onFilter = (title: string, genres: string, sort: string) => {
    setSearchParams({ title, genres, sort, page: '1' });
  };

  return (
    <div className={styles.mainContentWrapper}>
      <MoviesListFilter filterParams={onFilter} />
      <div className={styles.moviesList}>
        {movies.map((movie) => (
          <MovieCard key={movie.movieId} {...movie} />
        ))}
      </div>
      <Pagination
        activePage={activePage}
        totalPages={data?.totalPages as number}
        onPageChange={(page) => {
          setSearchParams({ page: page.toString() });
        }}
      />
    </div>
  );
};

export default MoviesListContainer;
