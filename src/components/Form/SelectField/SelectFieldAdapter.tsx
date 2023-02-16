import React, { useEffect, useState, useRef } from 'react';
import { FieldProps } from 'formik';

import SelectFieldStateless, { SelectValue, Option, SelectRefValue } from './SelectFieldStateless';

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

const SelectFieldAdapter: React.FC<FieldProps & Props> = ({ field, form, options, ...props }) => {
  const selectRef = useRef<SelectRefValue>(null);
  const [fieldSelectValue, setFieldSelectValue] = useState<Option | Option[] | undefined>(undefined);
  const { value, name } = field;

  useEffect(() => {
    const valueToSet = options.filter((option) => value.includes(option.value.toString()));
    setFieldSelectValue(valueToSet);
  }, [value, options]);

  const { setFieldValue } = form;

  const onChange = (newValue: SelectValue | SelectValue[]) => {
    setFieldValue(name, newValue);
  };

  const { touched, errors } = form;
  const hasError = typeof touched[name] === 'boolean' && typeof errors[name] === 'boolean';

  return (
    <SelectFieldStateless {...props} hasError={hasError} options={options} ref={selectRef} value={fieldSelectValue} onBlur={field.onBlur} onChange={onChange} />
  );
};

export default SelectFieldAdapter;
