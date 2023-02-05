import React from 'react';
import Select, { OnChangeValue } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type SelectValue = string | string[] | number | number[];

type MySelectProps = {
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  options: Option[];
  placeholder: string;
  value?: string;
  onChange: (newValue: SelectValue) => void;
  onBlur?: (e: FocusEvent) => void;
  hasError: boolean;
};

type Option = {
  value: string | number;
  label: string;
};

const SelectFieldStateless: React.FunctionComponent<MySelectProps> = (props) => {
  const onChange = (value: OnChangeValue<Option, boolean>) => {
    if (props.isMulti && Array.isArray(value)) {
      onChange?.(value.map((option) => option.value));
    }

    if (!props.isMulti && value) {
      onChange?.(value);
    }
  };

  return (
    <div className={styles.movieListFilterSelectField}>
      <Select
        closeMenuOnSelect={props.closeMenuOnSelect}
        isClearable={props.isClearable}
        isMulti={props.isMulti}
        options={props.options}
        placeholder={props.placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectFieldStateless;
