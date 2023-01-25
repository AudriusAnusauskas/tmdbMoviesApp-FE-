import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';
import Pagination from 'components/Pagination/Pagination';

import SelectFieldStateless from '../../components/Form/SelectField/SelectFieldStateless';
import TextInputField from '../../components/Form/TextInputField/TextInputField';
import { genreOptions, sortOptions } from '../../components/Form/SelectField/options';
import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const page = searchParams.get('page');
  const activePage = page ? parseInt(page, 10) : 1;
  const { data, isError, isLoading, error } = useQuery(['movies', { page: activePage }], () => getMovies(activePage));

  if (isLoading) return <Loading />;

  if (isError) return <span>Error: {error}</span>;
  const movies = data?.page === activePage ? data.movies : [];
  return (
    <div className={styles.mainContentWrapper}>
      <form className={styles.filterForm}>
        <TextInputField placeholder="Enter movie title" type="text" />
        <SelectFieldStateless closeMenuOnSelect={true} isClearable={false} options={genreOptions} placeholder="Select genre" isMulti />
        <SelectFieldStateless closeMenuOnSelect={true} isClearable={false} options={sortOptions} placeholder="Select sorting" />
      </form>
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
