import { useState } from 'react';
import { useFormik } from 'formik';

import { signUpSchema, loginSchema } from './signupSchema';
import styles from './Modal.module.css';
import { signUp } from '../../api/signUp';
import { login } from '../../api/login';

type ModalProps = {
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { handleClose } = props;

  const [signUpSignIn, setSignUpSignIn] = useState(true);

  const formik1 = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: signUp,
  });

  const formik2 = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: login,
  });

  const handleSignUpInClick = () => {
    setSignUpSignIn((signUpSignIn) => !signUpSignIn);
  };

  return (
    <div className={styles.backdrop}>
      {signUpSignIn && (
        <form className={styles.modal} onSubmit={formik1.handleSubmit}>
          <header className={styles.modalHeader}>Please sign-up</header>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>Full name</label>
            <input
              className={styles.textInputField}
              id="name"
              name="name"
              placeholder="Enter full name"
              type="text"
              value={formik1.values.name}
              onBlur={formik1.handleBlur}
              onChange={formik1.handleChange}
            />
            {formik1.touched.name && formik1.errors.name ? <div className={styles.errorText}>{formik1.errors.name}</div> : null}
          </div>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>User email</label>
            <input
              className={styles.textInputField}
              id="email"
              name="email"
              placeholder="Enter user email"
              type="email"
              value={formik1.values.email}
              onBlur={formik1.handleBlur}
              onChange={formik1.handleChange}
            />
            {formik1.touched.email && formik1.errors.email ? <div className={styles.errorText}>{formik1.errors.email}</div> : null}
          </div>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>Password</label>
            <input
              className={styles.textInputField}
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={formik1.values.password}
              onBlur={formik1.handleBlur}
              onChange={formik1.handleChange}
            />
            {formik1.touched.password && formik1.errors.password ? <div className={styles.errorText}>{formik1.errors.password}</div> : null}
          </div>
          <p className={styles.formChangeText}>
            Already a user?
            <button className={styles.formChangeButton} type="button" onClick={handleSignUpInClick}>
              Sign-in!
            </button>
          </p>
          <footer className={styles.modalFooter}>
            <button className={styles.modalCancelButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.modalSigninuplButton} type="submit" value="signin">
              Sign-up
            </button>
          </footer>
        </form>
      )}
      {!signUpSignIn && (
        <form className={styles.modal} onSubmit={formik2.handleSubmit}>
          <header className={styles.modalHeader}>Please sign-in</header>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>User email</label>
            <input
              className={styles.textInputField}
              id="email"
              name="email"
              placeholder="Enter user email"
              type="email"
              value={formik2.values.email}
              onBlur={formik2.handleBlur}
              onChange={formik2.handleChange}
            />
            {formik2.touched.email && formik2.errors.email ? <div className={styles.errorText}>{formik2.errors.email}</div> : null}
          </div>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>Password</label>
            <input
              className={styles.textInputField}
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={formik2.values.password}
              onBlur={formik2.handleBlur}
              onChange={formik2.handleChange}
            />
            {formik2.touched.password && formik2.errors.password ? <div className={styles.errorText}>{formik2.errors.password}</div> : null}
          </div>
          <p className={styles.formChangeText}>
            Not a user yet?
            <button className={styles.formChangeButton} type="button" onClick={handleSignUpInClick}>
              Sign-up!
            </button>
          </p>
          <footer className={styles.modalFooter}>
            <button className={styles.modalCancelButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.modalSigninuplButton} type="submit">
              Log-in
            </button>
          </footer>
        </form>
      )}
    </div>
  );
};
export default Modal;
