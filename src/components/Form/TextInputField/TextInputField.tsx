import { Field } from 'formik';

import TextInputFieldAdapter from './TextInputFieldAdapter';

interface Props {
  type: string;
  placeholder: string;
}

const TextInputField: React.FC<Props> = ({ ...props }) => <Field component={TextInputFieldAdapter} {...props} />;

export default TextInputField;
