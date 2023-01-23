import React from 'react';

import styles from './TextInputFieldStateless.module.css';

type MyInputProps = {
  id?: string;
  placeholder: string;
  type: string;
};

const TextInputFieldStateless: React.FunctionComponent<MyInputProps> = (props) => {
  return (
    <div className={styles.textInputFieldWrapper}>
      <input className={styles.textInputFieldStateless} id={props.id} placeholder={props.placeholder} type={props.type} />
    </div>
  );
};

export default TextInputFieldStateless;
