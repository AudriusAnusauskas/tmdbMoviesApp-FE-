import { useFormik } from 'formik';
import { SignUpFormValues } from 'api/signUp';

import { signUpSchema } from './signupSchema';
import styles from './SignUpModal.module.css';

type SignUpModalProps = {
  onSubmit: (values: SignUpFormValues) => void;
};

const SignUpModal: React.FC<SignUpModalProps> = (props: SignUpModalProps) => {
  const { onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>Full name</label>
        <input
          className={styles.textInputField}
          id="name"
          name="name"
          placeholder="Enter full name"
          type="text"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name ? <div className={styles.errorText}>{formik.errors.name}</div> : null}
      </div>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>User email</label>
        <input
          className={styles.textInputField}
          id="email"
          name="email"
          placeholder="Enter user email"
          type="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? <div className={styles.errorText}>{formik.errors.email}</div> : null}
      </div>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>Password</label>
        <input
          className={styles.textInputField}
          id="password"
          name="password"
          placeholder="Enter password"
          type="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password ? <div className={styles.errorText}>{formik.errors.password}</div> : null}
      </div>
      <p className={styles.formChangeText}>
        Already a user?
        <button className={styles.formChangeButton} type="button">
          Sign-in!
        </button>
      </p>
    </form>
  );
};

export default SignUpModal;
