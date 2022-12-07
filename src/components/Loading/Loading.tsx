import React from 'react';

import styles from './Loading.module.css';

const Loading: React.FunctionComponent = () => {
  return (
    <div className={styles.backdrop}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
