import React from 'react';

import styles from './TextInputFieldStateless.module.css';

const TextInputFieldStateless: React.FunctionComponent = () => {
  return (
    <div className={styles.textInputFieldWrapper}>
      <input className={styles.textInputFieldStateless} id="title" placeholder="Enter movie title" type="text" />
    </div>
  );
};

export default TextInputFieldStateless;
