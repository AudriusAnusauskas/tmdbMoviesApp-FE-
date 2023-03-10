import { Field } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import styles from './SelectField.module.css';

interface Props {
  closeMenuOnSelect: boolean;
  isClearable: boolean;
  isMulti?: boolean;
  // eslint-disable-next-line
  options: { value: string | number; label: string }[];
  placeholder: string;
  name: string;
  value?: string;
}

const SelectField: React.FC<Props> = ({ ...props }) => {
  return <Field className={styles.selectField} component={SelectFieldAdapter} {...props} />;
};

export default SelectField;
