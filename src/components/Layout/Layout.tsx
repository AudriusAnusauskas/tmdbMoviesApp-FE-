import React, { ReactNode } from 'react';
import Header from 'components/Header/Header';

import styles from './Layout.module.css';

interface Props {
  children?: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />

      <main className={styles.main} {...props}>
        {children}
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};
export default Layout;
