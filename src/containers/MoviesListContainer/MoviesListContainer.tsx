import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loading from 'components/Loading/Loading';
import Pagination from 'components/Pagination/Pagination';
import { Formik } from 'formik';
import { get } from 'api/shared/methods';

import SelectField from '../../components/Form/SelectField/SelectField';
import TextInputField from '../../components/Form/TextInputField/TextInputField';
// import { genreOptions } from '../../components/Form/SelectField/options';
import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

type Genre = {
  id: string;
  name: string;
};

type Genres = {
  genres: Genre[];
};
type Sort = {
  code: string;
  name: string;
};

const MoviesListContainer: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const page = searchParams.get('page');
  const activePage = page ? parseInt(page, 10) : 1;
  const { data, isError, isLoading, error } = useQuery(['movies', { page: activePage }], () => getMovies(activePage));

  const [genreOptions, setGenreOptions] = useState<Array<{ value: string; label: string }>>([]);
  const [sortOptions, setSortOptions] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    const getGenreOptions = async () => {
      const resGenres = await get<Genres>(`genres`).then((e) => e.data.genres);
      setGenreOptions(resGenres.map((item: Genre) => ({ value: item.id, label: item.name })));
    };
    getGenreOptions();
  }, []);
  useEffect(() => {
    const getSortOptions = async () => {
      const resSort = await get<Sort[]>(`sort-options`).then((e) => e.data);
      setSortOptions(resSort.map((item: Sort) => ({ value: item.code, label: item.name })));
    };
    getSortOptions();
  }, []);

  if (isLoading) return <Loading />;

  if (isError) return <span>Error: {error}</span>;
  const movies = data?.page === activePage ? data.movies : [];
  return (
    <div className={styles.mainContentWrapper}>
      <Formik
        initialValues={{ inputMovie: '', selectGenre: [], selectSorting: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <form className={styles.filterForm}>
          <TextInputField name="inputMovie" placeholder="Enter movie title" type="text" />
          <SelectField closeMenuOnSelect={true} isClearable={false} isMulti={true} name="selectGenre" options={genreOptions} placeholder="Select genre" />
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
