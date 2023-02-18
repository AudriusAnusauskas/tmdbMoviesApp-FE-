import { useFormik } from 'formik';

import { signUpSchema } from './signupSchema';
import styles from './Modal.module.css';
import { SignUpFormValues } from '../../api/signUp';

type ModalProps = {
  handleClose: () => void;
  onSubmit: (values: SignUpFormValues) => void;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { handleClose, onSubmit } = props;

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
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <form onSubmit={formik.handleSubmit}>
          <header className={styles.modalHeader}>Please sign-up</header>
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
          <footer className={styles.modalFooter}>
            <button className={styles.modalCancelButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.modalSigninuplButton} type="submit">
              Sign-up
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Modal;
