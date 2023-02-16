import React, { forwardRef } from 'react';
import Select, { OnChangeValue, SelectInstance } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type SelectValue = string | number;
export type SelectRefValue = SelectInstance<Option, boolean>;

type MySelectProps = {
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  options: Option[];
  placeholder: string;
  value?: Option | Option[];
  onChange: (newValue: SelectValue | SelectValue[]) => void;
  onBlur?: (e: FocusEvent) => void;
  hasError: boolean;
};

export type Option = {
  value: string | number;
  label: string;
};

const SelectFieldStateless = forwardRef((props: MySelectProps, ref: React.Ref<SelectRefValue>): JSX.Element => {
  const onChange = (value: OnChangeValue<Option, boolean>) => {
    if (props.isMulti && Array.isArray(value)) {
      props.onChange?.(value.map((option) => option.value));
    }

    if (!props.isMulti && value && 'value' in value) {
      props.onChange?.(value.value);
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
        ref={ref}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
});
SelectFieldStateless.displayName = 'SelectFieldStateless';
export default SelectFieldStateless;
