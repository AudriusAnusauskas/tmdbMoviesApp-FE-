import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { get } from 'api/shared/methods';

import SelectField from '../SelectField/SelectField';
import TextInputField from '../TextInputField/TextInputField';
import styles from './MoviesListFilter.module.css';
import { Genre, Genres, Sort } from '../../../api/movies/types';

export type MovieListFilterFormValues = {
  title: string;
  genres: string[];
  sort: string;
};

type MovieListFilterProps = {
  initialValues: MovieListFilterFormValues;
};

const MoviesListFilter: React.FC<MovieListFilterProps> = (props) => {
  const [genreOptions, setGenreOptions] = useState<Array<{ value: string; label: string }>>([]);
  const [sortOptions, setSortOptions] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    const getGenreOptions = async () => {
      const resGenres = await get<Genres>(`genres`).then((e) => e.data.genres);
      setGenreOptions(resGenres.map((item: Genre) => ({ value: item.id.toString(), label: item.name })));
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

  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (values: MovieListFilterFormValues) => {
    // eslint-disable-next-line
    const params: any = {};

    if (values.title) {
      params.title = values.title;
    }
    if (values.genres) {
      params.genres = values.genres;
    }
    if (values.sort) {
      params.sort = values.sort;
    }

    setSearchParams({ ...searchParams, ...params });
  };

  const handleReset = (values: MovieListFilterFormValues, setValues: (values: MovieListFilterFormValues) => void) => {
    setValues({
      ...values,
      title: '',
      genres: [],
      sort: '',
    });
    setSearchParams({});
  };

  return (
    <div>
      <Formik initialValues={props.initialValues} onSubmit={handleFilter}>
        {({ handleSubmit, setValues }) => (
          <form className={styles.filterForm} onSubmit={handleSubmit}>
            <TextInputField name="title" placeholder="Enter movie title" type="text" />
            <SelectField closeMenuOnSelect={true} isClearable={false} isMulti={true} name="genres" options={genreOptions} placeholder="Select genre" />
            <SelectField closeMenuOnSelect={true} isClearable={false} isMulti={false} name="sort" options={sortOptions} placeholder="Select sorting" />
            <button className={styles.button} type="submit">
              Submit
            </button>
            <button className={styles.button} type="button" onClick={() => handleReset(props.initialValues, setValues)}>
              Reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MoviesListFilter;
