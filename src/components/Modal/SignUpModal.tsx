import React from 'react';

import styles from './SignUpModal.module.css';

const SignUpModal = () => {
  return (
    <form>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>Full name</label>
        <input className={styles.textInputField} id="name" placeholder="Enter full name" type="text" />
      </div>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>User email</label>
        <input className={styles.textInputField} id="email" placeholder="Enter user email" type="text" />
      </div>
      <div className={styles.textInputFieldWrapper}>
        <label className={styles.textInputFieldLabel}>Password</label>
        <input className={styles.textInputField} id="password" placeholder="Enter password" type="text" />
      </div>
      <p className={styles.formChangeText}>
        Already a user?
        <button className={styles.formChangeButton}>Sign-in!</button>
      </p>
    </form>
  );
};

export default SignUpModal;
