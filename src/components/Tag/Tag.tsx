import React, { ReactNode } from 'react';

import styles from './Tag.module.css';

interface Props {
  children?: ReactNode;
}

const Tag: React.FunctionComponent = ({ children }: Props) => {
  return (
    <div className={styles.tag}>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
