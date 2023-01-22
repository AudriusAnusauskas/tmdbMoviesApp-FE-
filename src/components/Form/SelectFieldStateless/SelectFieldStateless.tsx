import React from 'react';
import Select from 'react-select';

import styles from './SelectFieldStateless.module.css';

type MySelectProps = {
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  options: { value: string; label: string }[];
  placeholder: string;
  value?: string;
};

const SelectFieldStateless: React.FunctionComponent<MySelectProps> = (props) => {
  return (
    <div className={styles.movieListFilterSelectField}>
      <Select
        closeMenuOnSelect={props.closeMenuOnSelect}
        isClearable={props.isClearable}
        isMulti={props.isMulti}
        options={props.options}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SelectFieldStateless;
