import { Field, useField } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import styles from './SelectField.module.css';

interface Props {
  closeMenuOnSelect: boolean;
  isClearable: boolean;
  isMulti?: boolean;
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
  value?: string;
}

const SelectField: React.FC<Props> = ({ ...props }) => {
  const [state] = useField(props.name);
  return <Field className={styles.selectField} component={SelectFieldAdapter} value={state.value} {...props} />;
};

export default SelectField;
