import { Field } from 'formik';

import TextInputFieldAdapter from './TextInputFieldAdapter';
import styles from './TextInputField.module.css';

interface Props {
  type: string;
  placeholder: string;
  name: string;
}

const TextInputField: React.FC<Props> = ({ ...props }) => <Field className={styles.textInputField} component={TextInputFieldAdapter} {...props} />;

export default TextInputField;
