import React, { ReactNode } from 'react';

import styles from './MoviesListContainer.module.css';

interface Props {
  children?: ReactNode;
}

const MoviesListContainer: React.FunctionComponent<Props> = ({ children, ...props }: Props) => {
  return (
    <div>
      <main className={styles.main} {...props}>
        {children}
      </main>
    </div>
  );
};

export default MoviesListContainer;
