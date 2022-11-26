import React, { ReactNode } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

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
      <Footer />
    </>
  );
};
export default Layout;
