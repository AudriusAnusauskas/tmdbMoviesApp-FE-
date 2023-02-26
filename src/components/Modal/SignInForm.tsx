import React, { useContext } from 'react';
import { Formik, useFormik } from 'formik';
import TextInputField from 'components/Form/TextInputField/TextInputField';

import { loginSchema } from './signupSchema';
import { UserContext } from '../../providers/UserContext';
import styles from './SignForm.module.css';

type Props = {
  handleClose: () => void;
  toggleForms: () => void;
};

const SignInForm: React.FC<Props> = (props: Props) => {
  const { handleClose } = props;
  const { login } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: login,
  });

  return (
    <Formik initialValues={formik.initialValues} validationSchema={loginSchema} onSubmit={login}>
      {({ handleSubmit, errors, touched }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <header className={styles.formHeader}>Please sign-in</header>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>User email</label>
            <TextInputField name="email" placeholder="Enter user email" type="email" />
            {touched.email && errors.email ? <div className={styles.errorText}>{errors.email}</div> : null}
          </div>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>Password</label>
            <TextInputField name="password" placeholder="Enter password" type="password" />
            {touched.password && errors.password ? <div className={styles.errorText}>{errors.password}</div> : null}
          </div>
          <p className={styles.formChangeText}>
            Not a user yet?
            <button className={styles.formChangeButton} type="button" onClick={props.toggleForms}>
              Sign-up!
            </button>
          </p>
          <footer className={styles.formFooter}>
            <button className={styles.formCancelButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.formSigninuplButton} type="submit">
              Log-in
            </button>
          </footer>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
