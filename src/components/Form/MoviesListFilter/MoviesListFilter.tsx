import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import { get } from 'api/shared/methods';

import SelectField from '../SelectField/SelectField';
import TextInputField from '../TextInputField/TextInputField';
import styles from './MoviesListFilter.module.css';
import { Genre, Genres, Sort } from '../../../api/movies/types';

interface FilterParams {
  [key: string]: any;
}

const MoviesListFilter: React.FC<{ filterParams: FilterParams }> = () => {
  const [genreOptions, setGenreOptions] = useState<Array<{ value: number; label: string }>>([]);
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

  const [searchParams, setSearchParams] = useSearchParams();
  const initialValues = {
    page: searchParams.get('page') ?? 1,
    title: searchParams.get('title') ?? '',
    genres: searchParams.get('genres') ?? [],
    sort: searchParams.get('sort') ?? '',
  };

  const handleFilter = (values: any) => {
    setSearchParams({
      page: '1',
      title: values.inputMovie,
      genres: values.selectGenre,
      sort: values.selectSorting,
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleFilter}>
        {({ handleSubmit, values }) => (
          <form className={styles.filterForm} onSubmit={handleSubmit}>
            <TextInputField name="inputMovie" placeholder="Enter movie title" type="text" />
            <SelectField closeMenuOnSelect={true} isClearable={false} isMulti={true} name="selectGenre" options={genreOptions} placeholder="Select genre" />
            <SelectField
              closeMenuOnSelect={true}
              isClearable={false}
              isMulti={false}
              name="selectSorting"
              options={sortOptions}
              placeholder="Select sorting"
              value={values.sort}
            />
            <button className={styles.button} type="submit">
              Submit
            </button>
            <button className={styles.button} type="button">
              Reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MoviesListFilter;
