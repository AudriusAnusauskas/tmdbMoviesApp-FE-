import { useState } from 'react';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import styles from './Modal.module.css';

type ModalProps = {
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const [signUpSignIn, setSignUpSignIn] = useState(true);
  const [signUpValues, setSignUpValues] = useState({ name: '', email: '', password: '' });

  const toggleForms = (values: any) => {
    setSignUpSignIn(!signUpSignIn);
    setSignUpValues(values);
  };

  return (
    <div className={styles.backdrop}>
      {signUpSignIn ? (
        <SignUpForm handleClose={props.handleClose} toggleForms={toggleForms} />
      ) : (
        <SignInForm handleClose={props.handleClose} signUpValues={signUpValues} toggleForms={toggleForms} />
      )}
    </div>
  );
};
export default Modal;
