import React from 'react';
import { Formik, useFormik } from 'formik';

import TextInputField from '../Form/TextInputField/TextInputField';
import { signUpSchema } from './signupSchema';
import { signUp } from '../../api/signUp';
import styles from './SignForm.module.css';

type Props = {
  handleClose: () => void;
  // eslint-disable-next-line
  toggleForms: (values: any) => void;
};

const SignUpForm: React.FC<Props> = (props: Props) => {
  const { handleClose } = props;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: signUp,
  });

  return (
    <Formik initialValues={formik.initialValues} validationSchema={signUpSchema} onSubmit={signUp}>
      {({ handleSubmit, errors, touched }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <header className={styles.formHeader}>Please sign-up</header>
          <div className={styles.textInputFieldWrapper}>
            <label className={styles.textInputFieldLabel}>Full name</label>
            <TextInputField name="name" placeholder="Enter full name" type="text" />
            {touched.name && errors.name ? <div className={styles.errorText}>{errors.name}</div> : null}
          </div>
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
            Already a user?
            <button className={styles.formChangeButton} type="button" onClick={props.toggleForms}>
              Sign-in!
            </button>
          </p>
          <footer className={styles.formFooter}>
            <button className={styles.formCancelButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.formSigninuplButton} type="submit">
              Sign-up
            </button>
          </footer>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
