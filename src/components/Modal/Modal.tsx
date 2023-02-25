import { useState } from 'react';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import styles from './Modal.module.css';

type ModalProps = {
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const [signUpSignIn, setSignUpSignIn] = useState(true);

  const toggleForms = () => {
    setSignUpSignIn(!signUpSignIn);
  };

  return (
    <div className={styles.backdrop}>
      {signUpSignIn ? (
        <SignUpForm handleClose={props.handleClose} toggleForms={toggleForms} />
      ) : (
        <SignInForm handleClose={props.handleClose} toggleForms={toggleForms} />
      )}
    </div>
  );
};
export default Modal;
