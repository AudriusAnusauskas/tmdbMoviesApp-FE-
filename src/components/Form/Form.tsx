import React from 'react';

import styles from './Form.module.css';
import SelectFieldStateless from './SelectFieldStateless/SelectFieldStateless';
import TextInputFieldStateless from './TextInputFieldStateless/TextInputFieldStateless';
import { genreOptions, sortOptions } from '../Form/SelectFieldStateless/options';

const Form: React.FunctionComponent = () => {
  return (
    <form className={styles.movieListFilterForm}>
      <TextInputFieldStateless />
      <SelectFieldStateless closeMenuOnSelect={true} isClearable={false} options={genreOptions} placeholder="Select genre" isMulti />
      <SelectFieldStateless closeMenuOnSelect={true} isClearable={false} options={sortOptions} placeholder="Select sorting" />
    </form>
  );
};

export default Form;
