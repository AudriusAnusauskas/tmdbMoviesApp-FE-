import React from 'react';
import { FieldProps } from 'formik';

import SelectFieldStateless, { SelectValue } from './SelectFieldStateless';

interface Props {
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  options: { value: string | number; label: string }[];
  placeholder: string;
  value?: string;
  onChange: (value: SelectValue | SelectValue[]) => void;
  onBlur?: (e: FocusEvent) => void;
  hasError: boolean;
}

const SelectFieldAdapter: React.FC<FieldProps & Props> = ({ field, form, ...props }) => {
  const { value, name } = field;
  const { touched, errors } = form;
  const hasError = typeof touched[name] === 'boolean' && typeof errors[name] === 'boolean';

  return <SelectFieldStateless {...field} {...props} hasError={hasError} value={value} onBlur={props.onBlur} onChange={props.onChange} />;
};

export default SelectFieldAdapter;
