import React, { ReactNode } from 'react';
import { MyMoviesLogo } from 'components/Icons';

import styles from './Layout.module.css';

interface Props {
  children?: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children, ...props }: Props) => {
  return (
    <>
      <header>
        <MyMoviesLogo className={styles.icon} /> Header
      </header>
      <main {...props}>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
