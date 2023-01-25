import React from 'react';
import { FieldProps } from 'formik';

// interface Props extends FieldProps {
//   // placeholder: string;
// }

const TextInputFieldAdapter: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const { name, value } = field;
  const { touched, errors } = form;
  const hasError = touched[name] && errors[name];

  return <input className={hasError ? 'error' : ''} {...field} {...props} value={value} onBlur={field.onBlur} onChange={field.onChange} />;
};
export default TextInputFieldAdapter;
