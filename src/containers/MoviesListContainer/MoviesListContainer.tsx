import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';
import Pagination from 'components/Pagination/Pagination';
import { Formik } from 'formik';

import SelectField from '../../components/Form/SelectField/SelectField';
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
      <Formik
        initialValues={{ inputMovie: '', selectGenre: '', selectSorting: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <form className={styles.filterForm}>
          <TextInputField name="inputMovie" placeholder="Enter movie title" type="text" />
          <SelectField closeMenuOnSelect={true} isClearable={false} name="selectGenre" options={genreOptions} placeholder="Select genre" />
          <SelectField closeMenuOnSelect={true} isClearable={false} isMulti={false} name="selectSorting" options={sortOptions} placeholder="Select sorting" />
        </form>
      </Formik>
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
