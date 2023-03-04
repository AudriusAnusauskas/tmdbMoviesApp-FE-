import { useState } from 'react';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import styles from './Modal.module.css';

type ModalProps = {
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const [shouldDisplaySignUpForm, setShouldDisplaySignUpForm] = useState(true);
  const [signUpValues, setSignUpValues] = useState({ name: '', email: '', password: '' });

  const toggleForms = (values: any) => {
    setShouldDisplaySignUpForm(!shouldDisplaySignUpForm);
    setSignUpValues(values);
  };

  return (
    <div className={styles.backdrop}>
      {shouldDisplaySignUpForm ? (
        <SignUpForm handleClose={props.handleClose} toggleForms={toggleForms} />
      ) : (
        <SignInForm handleClose={props.handleClose} signUpValues={signUpValues} toggleForms={toggleForms} />
      )}
    </div>
  );
};
export default Modal;
