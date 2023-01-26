import React from 'react';
import { FieldProps } from 'formik';
import Select from 'react-select';

interface Props {
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  options: { value: string; label: string }[];
  placeholder: string;
  value?: string;
}

const SelectFieldAdapter: React.FC<FieldProps & Props> = ({ field, form, ...props }) => {
  const { name, value } = field;
  const { touched, errors } = form;
  const hasError = touched[name] && errors[name];

  return (
    <Select
      className={hasError ? 'error' : ''}
      {...field}
      {...props}
      closeMenuOnSelect={props.closeMenuOnSelect}
      isClearable={props.isClearable}
      isMulti={props.isMulti}
      options={props.options}
      placeholder={props.placeholder}
      value={value}
      onBlur={field.onBlur}
      onChange={field.onChange}
    />
  );
};

export default SelectFieldAdapter;

{
  /* <Select
        
      /> */
}
